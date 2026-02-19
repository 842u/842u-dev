import sendgridMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

import { ContactFormValues, FormInputsIdentifiers } from '@/types';
import {
  emailInputValidationRules,
  InputValidationError,
  messageInputValidationRules,
  nameInputValidationRules,
  validateInput,
} from '@/utils/validation';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const { name, email, message } = (await request.json()) as ContactFormValues;

  const responseEmail = {
    to: 'kamil.bazanow@gmail.com',
    from: 'contact@842u.dev',
    subject: '842u.dev: Someone wants to contact with you!',
    html: `<h1>Hello Kamil. You have got a message from contact form. Here it is:</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>${message}</p>`,
  };

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
    await sendgridMail.send(responseEmail);

    return NextResponse.json(
      {
        message:
          'Got your message. I will contact with you as soon as possible.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: `Something went wrong with mailing service. Please try again.`,
      },
      { status: 400 },
    );
  }
}
