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
    const papaaa = "mauri@mauri.com"
    const info = await transporter.sendMail({
      from: `Maddison Foo Koch 👻 ${papaaa} `,/* quien lo envia */
      to: to,/* a quien lo recive (creo la publicaicon)*/
      subject: subject,/* asunto (Esta interesado en adoptar) */
      text: text, /* mensaje */
      html: html, /* estructura html */
    });

    console.log("Correo electrónico enviado:", info.messageId);
    return NextResponse.json(info, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
