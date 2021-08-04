const nodeMailer = require('nodemailer');
//const nodeCron = require('node-cron');
require('dotenv').config();
const jessEmail = process.env.ADMIN_EMAIL;
const jessPassword = process.env.ADMIN_PASSWORD;

// message import objects
//const goodMorningMsg = require('./morning-messages');
const goodEveningMsg = require('./evening-messages');


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
    let info = await transporter.sendMail(goodEveningMsg)
    console.log(`Message sent: ${info.messageId}`);
}

sendEmails().catch(console.error);

