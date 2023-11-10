import sendgridMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function GET() {
  const responseEmail = {
    to: 'kamil.bazanow@gmail.com',
    from: 'contact@842u.dev',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<h1>Hello Kamil. You have got a message from contact form. Here it is:</h1>
    <p>Name</p>
    <p>Email</p>
    <p>Message</p>`,
  };

  try {
    await sendgridMail.send(responseEmail);

    return NextResponse.json({
      message: 'Got your message. I will contact with you as soon as possible.',
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: `Something went wrong with mailing service: ${error}`,
      status: 400,
    });
  }
}
