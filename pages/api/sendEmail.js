import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { validate as uuidValidate } from 'uuid';

const { PUB_KEY } = JSON.parse(process.env.NEXT_PUBLIC_PUBLIC_KEY)

/**
 * Serverless function to send an email to my inbox using Nodemailer
 */

const sendEmail = async(req,res) => {
    if(req.method === 'POST'){
        try{
            const token = req.headers.authorization.split(' ')[1];
            // decode
            const decode = jwt.verify(token, PUB_KEY, { algorithms: ['RS256'] });
            // validate
            const validation = uuidValidate(decode);
            if(!validation || !decode || !token){
                return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
            }
            // send email to my inbox for new business inquiries
            const { from_name, from_email, subject, message } = req.body
    
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'tonyc6731@gmail.com',
                    pass: process.env.NEXT_PUBLIC_SMTP_PASSWRD
                }
            });
    
            const mail_options = {
                from: from_email,
                to: 'tonyc6731@gmail.com',
                subject: subject,
                html: `
                <h3>New message from: ${from_name}</h3>
                <p>Email: ${from_email}</p>
                <br></br>
                <p>Title: ${subject}</p>
                <p>${message}</p>
                `
            }
    
            await transporter.sendMail(mail_options);
            res.status(200).json({ message: "Email successfully sent to inbox" })
        } catch(err){
            console.log(err);
            return NextResponse.json({ message: "ERROR sending the email" }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: "Wrong method error" }, { status: 403 });
    }

}

export default sendEmail;