const nodeMailer = require('nodemailer');
//const nodeCron = require('node-cron');
require('dotenv').config();
const jessEmail = process.env.ADMIN_EMAIL;
const jessPassword = process.env.ADMIN_PASSWORD;

// mom message imports
const goodMorningMsg = require('./mom-messages/morning-messages');
const goodAfternoonMsg = require('./mom-messages/afternoon-messages');
const goodEveningMsg = require('./mom-messages/evening-messages');


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

// functions for mom messages
/* async function morningMomEmail() {
    let info = await transporter.sendMail(goodMorningMsg)
    console.log(`Message sent: ${info.messageId}`);
}
morningMomEmail().catch(console.error); */

async function afternoonMomEmail() {
    let info = await transporter.sendMail(goodAfternoonMsg);
    console.log(`Message sent: ${info.messageId}`);
}
afternoonMomEmail().catch(console.error);

/* async function eveningMomEmail() {
    let info = await transporter.sendMail(goodEveningMsg);
    console.log(`Message sent:${info.messageId}`);
}
eveningMomEmail().catch(console.error); */

