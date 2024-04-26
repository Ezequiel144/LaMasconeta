/* import { transporter } from "@/utils/nodeMailer"; */
'use server'
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "lamasconeta49@gmail.com",
    pass: "LAMASCONETA2024",
  },
});

const sendEmail = async () => {
  try {
    // Configurar el correo electrónico
    const mailOptions = {
      from: "lamasconeta49@gmail.com",
      to: "garciaezequiel2022001gmail.com",
      subject: "Asunto del correo",
      text: "Contenido del correo electrónico",
    };

    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:", info.response);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};
export default sendEmail;
