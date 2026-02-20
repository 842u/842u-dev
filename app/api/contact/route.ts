import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import ContactEmail from '@/emails/ContactEmail';
import { ContactFormValues, FormInputsIdentifiers } from '@/types';
import {
  emailInputValidationRules,
  InputValidationError,
  messageInputValidationRules,
  nameInputValidationRules,
  validateInput,
} from '@/utils/validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = (await request.json()) as ContactFormValues;

  try {
    validateInput(FormInputsIdentifiers.Name, name, nameInputValidationRules);
    validateInput(
      FormInputsIdentifiers.Email,
      email,
      emailInputValidationRules,
    );
    validateInput(
      FormInputsIdentifiers.Message,
      message,
      messageInputValidationRules,
    );
  } catch (error) {
    if (error instanceof InputValidationError)
      return NextResponse.json(
        {
          message: `Server validation error: ${error.message} Try again.`,
          inputIdentifier: error.inputIdentifier,
        },
        { status: 400 },
      );
  }

  try {
    const { error } = await resend.emails.send({
      from: 'kamil.bazanow@contact.842u.dev',
      to: 'kamil.bazanow@gmail.com',
      subject: `New contact form submission from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      return NextResponse.json(
        { message: 'Failed to send email. Please try again later.' },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        message:
          'Got your message. I will contact with you as soon as possible.',
      },
      { status: 200 },
    );
  } catch (_error) {
    return NextResponse.json(
      {
        message: `Something went wrong with mailing service. Please try again.`,
      },
      { status: 400 },
    );
  }
}
