require('dotenv').config();
const nodeFetch = require('node-fetch');
const momEmail = process.env.MOM_EMAIL;
const jessEmail = process.env.ADMIN_EMAIL;

let quote = '';
let author = '';

nodeFetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        const randomNum = Math.floor(Math.random() * data.length)
        //console.log(data[randomNum])
        quote = data[randomNum].text
        author = data[randomNum].author
        console.log(data[randomNum].text)
        console.log(data[randomNum].author)
    })
    .catch(err => console.error(err))


const goodEveningMsg = {
    from: jessEmail,
    to: momEmail,
    cc: jessEmail,
    subject: 'Good evening!',
    text: `Hope you had a good day. This was sent from my bot :)\n ${quote} - ${author}`
}
module.exports = goodEveningMsg;