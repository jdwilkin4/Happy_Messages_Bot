require('dotenv').config();
const momEmail = process.env.MOM_EMAIL;
const jessEmail = process.env.ADMIN_EMAIL;

const goodEveningMsg = {
    from: jessEmail,
    to: momEmail,
    cc: jessEmail,
    subject: 'Good evening!',
    text: 'Hope you had a good day. This was sent from my bot :)'
}
module.exports = goodEveningMsg;