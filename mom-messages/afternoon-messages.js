require('dotenv').config();
const momEmail = process.env.MOM_EMAIL;
const jessEmail = process.env.ADMIN_EMAIL;

const goodAfternoonMsg = {
   from: jessEmail,
   to: momEmail,
   cc: jessEmail,
   subject: 'Good Afternoon!',
   text: `Did you drink your water today? This was sent from my bot :)`
}
module.exports = goodAfternoonMsg;