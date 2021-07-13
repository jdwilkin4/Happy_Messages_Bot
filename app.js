const nodeMailer = require('nodemailer');
const nodeCron = require('node-cron');
require('dotenv').config();
const momEmail = process.env.MOM_EMAIL;
const jessEmail = process.env.ADMIN_EMAIL;
const jessPassword = process.env.ADMIN_PASSWORD;

// message objects

const testMsg = {
    from: jessEmail,
    to: momEmail,
    cc: jessEmail,
    subject: 'Good afternoon, brat :)',
    text: `This is your daughter brat. 
     I am creating a new email bot that sends encouraging messages at set times.
     This is my first test email. 
     Text me when you get this message
    `
};

//transporter to send emails

let transporter = nodeMailer.createTransport({
    service: 'outlook',
    port: 587,
    secure: false,
    auth: {
        user: jessEmail,
        pass: jessPassword
    }
});

async function sendEmails() {
    let info = await transporter.sendMail(testMsg)
    console.log(`Message sent: ${info.messageId}`);
}

sendEmails().catch(console.error);

