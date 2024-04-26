import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, subject, text, html } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "mauri.monzon.dev@gmail.com",
        pass: "nqmepexgvfepyfgr",
      },
    });

    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <mongar.dev@gmail.com>',
      to: to,
      subject: subject,
      text: text,
      html: html,
    });

    console.log("Correo electrónico enviado:", info.messageId);
    return NextResponse.json(info, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
