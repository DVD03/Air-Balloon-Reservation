import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
handlebars.registerHelper("multiply", (a, b) => (a * b).toFixed(2));


export const generateEmailHTML = ({ username, items, total, orderId, date }) => {
  const templatePath = path.join(__dirname, "email_template.html");
  const templateSource = fs.readFileSync(templatePath, "utf8");
  const template = handlebars.compile(templateSource);

  return template({
    username,
    items,
    total: total.toFixed(2),
    orderId,
    date,
  });
};

export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nipuntgin@gmail.com",
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: "nipuntgin@gmail.com",
      to,
      subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
