require('dotenv').config();
const nodeMailer = require('nodemailer');
const nodeCron = require('node-cron');
const momEmail = process.env.MOM_EMAIL;
const jessEmail = process.env.ADMIN_EMAIL;
const jessPassword = process.env.ADMIN_PASSWORD;
const { morningMessage, drinkWater, afternoonMessage, birthdayMessage, eveningMessage } = require('./messages');
const { christmasMessage, valentinesMessage, thanksgivingMessage, mothersDayMessage, newYearMessage } = require('./holiday-messages');

//object constructor for emails
function EmailMessage(from, to, cc, subject, html) {
  this.from = from;
  this.to = to;
  this.cc = cc;
  this.subject = subject;
  this.html = html
};

//object instances for sending the different emails
let sendMomBirthdayMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Happy Birthday', birthdayMessage);
let sendMorningMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Good Morning!', morningMessage);
let sendAfternoonMsg = new EmailMessage(jessEmail, momEmail, jessEmail, "Good Afternoon", afternoonMessage);
let sendEveningMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Good Evening', eveningMessage);
let sendDrinkWater = new EmailMessage(jessEmail, momEmail, jessEmail, "Please Drink water", drinkWater);
let sendChristmasMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Merry Christmas', christmasMessage);
let sendValentinesMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Happy Valentines Day', valentinesMessage);
let sendThanksgivingMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Happy Thanksgiving', thanksgivingMessage);
let sendMothersMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Happy Mother\'s Day', mothersDayMessage);
let sendNewYearMsg = new EmailMessage(jessEmail, momEmail, jessEmail, 'Happy New Year', newYearMessage);


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

//verify email connection for admin email
transporter.verify((error) => {
  error ? console.log(`There was an error message: ${error}`) : console.log('Ready to send email')
});

//setup the cron schedule to deliver mail every day at 9am, noon and 6pm PST
nodeCron.schedule('0 9 * * *', () => {
  async function morningMsg() {
    let info = await transporter.sendMail(sendMorningMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  morningMsg().catch(console.error);
});

nodeCron.schedule('0 12 * * *', () => {
  async function afternoonMsg() {
    let info = await transporter.sendMail(sendAfternoonMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  afternoonMsg().catch(console.error);
});

nodeCron.schedule('0 18 * * *', () => {
  async function eveningMsg() {
    let info = await transporter.sendMail(sendEveningMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  eveningMsg().catch(console.error);
});


//setup the cron schedule to deliver email on mom's birthday
nodeCron.schedule('0 8 20 May *', () => {
  async function momBirthday() {
    let info = await transporter.sendMail(sendMomBirthdayMsg);
    console.log(`Message sent:${info.messageId}`);
  }
  momBirthday().catch(console.error);
});

//setup the cron schedule to deliver email remainder to drink water every 4 hours
nodeCron.schedule('* */4 * * *', () => {
  async function drinkWaterMsg() {
    let info = await transporter.sendMail(sendDrinkWater)
    console.log(`Message send: ${info.messageId}`)
  }
  drinkWaterMsg().catch(console.error);
});

//setup the cron schedule to deliver email for holidays 

//TODO: work on holiday schedules 
nodeCron.schedule('* * * * *', () => {
  async function christmasMsg() {
    let info = await transporter.sendMail(sendChristmasMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  christmasMsg().catch(console.error);
});

nodeCron.schedule('* * * * *', () => {
  async function valentinesMsg() {
    let info = await transporter.sendMail(sendValentinesMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  valentinesMsg().catch(console.error);
});

nodeCron.schedule('* * * * *', () => {
  async function thanksgivingMsg() {
    let info = await transporter.sendMail(sendThanksgivingMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  thanksgivingMsg().catch(console.error);
});

nodeCron.schedule('* * * * *', () => {
  async function mothersDayMsg() {
    let info = await transporter.sendMail(sendMothersMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  mothersDayMsg().catch(console.error);
});

nodeCron.schedule('* * * * *', () => {
  async function newYearsMsg() {
    let info = await transporter.sendMail(sendNewYearMsg)
    console.log(`Message send: ${info.messageId}`)
  }
  newYearsMsg().catch(console.error);
});





