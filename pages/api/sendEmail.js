import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { validate as uuidValidate } from "uuid";
import { EmailTemplate } from "../../lib/email/email_template";

const { PUB_KEY } = JSON.parse(process.env.PUBLIC_KEY);
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

/**
 * Serverless function to send an email to my inbox using Nodemailer
 */

const sendEmail = async (req, res) => {
  if (req.method === "POST") {
    try {
      const token = req.headers.authorization.split(" ")[1];
      // decode
      const decode = jwt.verify(token, PUB_KEY, { algorithms: ["RS256"] });

      // validate
      const validation = uuidValidate(decode);
      if (!validation || !decode || !token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
      }
      // send email to my inbox for new business inquiries
      const { from_email, from_name, subject, message } = req.body;

      const { data, error } = await resend.emails.send({
        from: `${from_name} <onboarding@resend.dev>`,
        to: ["tonyc6731@gmail.com"],
        subject: subject,
        react: EmailTemplate({ email: from_email, message: message }),
      });

      if (error) {
        return res.status(400).json(error);
      }

      res.status(200).json({ message: "Email successfully sent to inbox" });
    } catch (err) {
      return NextResponse.json(
        { message: "ERROR sending the email" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Wrong method error" },
      { status: 403 }
    );
  }
};

export default sendEmail;
