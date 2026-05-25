import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shariqmoiz34@gmail.com",
      subject: "New Contact Message",
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}