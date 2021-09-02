require('dotenv').config();
const momEmail = process.env.MOM_EMAIL;
const jessEmail = process.env.ADMIN_EMAIL;


const goodMorningMsg = {
    from: jessEmail,
    to: momEmail,
    cc: jessEmail,
    subject: 'Good morning!',
    text: `Have a beautiful day!`
};
module.exports = goodMorningMsg

