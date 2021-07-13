const nodeMailer = require('nodemailer');
const nodeCron = require('node-cron');
const env = require('dotenv').config();
const momEmail = process.env.MOM_EMAIL
const jessEmail = process.env.ADMIN_EMAIL;
const jessPassword = process.env.ADMIN_PASSWORD;



