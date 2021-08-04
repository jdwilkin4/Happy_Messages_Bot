const momEmail = process.env.MOM_EMAIL;
const jessEmail = process.env.ADMIN_EMAIL;
const axios = require('axios').default;


//needs work
const randomQuote = axios.get('https://free-quotes-api.herokuapp.com/')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));


const goodAfternoonMsg = {
    from: jessEmail,
    to: jessEmail, //temporarily testing with my email
    cc: jessEmail,
    subject: 'Good Afternoon!',
    text: `Did you drink your water today? This was sent from my bot :) ${randomQuote}`
}
module.exports = goodAfternoonMsg;