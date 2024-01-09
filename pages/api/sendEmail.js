import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { validate as uuidValidate } from 'uuid';

const publicKey = fs.readFileSync('id_rsa_pub.pem','utf8');

const sendEmail = async(req,res) => {
    if(req.method === 'POST'){
        try{
            const token = req.headers.authorization.split(' ')[1];
            // decode
            const decode = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
            // validate
            const validation = uuidValidate(decode);
            if(validation){
                
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