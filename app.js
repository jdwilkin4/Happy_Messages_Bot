const nodeMailer = require('nodemailer');
const nodeCron = require('node-cron');
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

//testing every minute
nodeCron.schedule('* * * * *', () => {
    async function eveningMomEmail() {
        let info = await transporter.sendMail(goodEveningMsg);
        console.log(`Message sent:${info.messageId}`);
    }
    eveningMomEmail().catch(console.error);
})


