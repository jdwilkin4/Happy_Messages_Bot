# Happy Messages Bot
<img width="671" alt="Screen Shot 2021-07-24 at 9 08 56 PM" src="https://user-images.githubusercontent.com/67210629/126887409-59e796d0-37d3-4ba6-af56-eb33c2f2f98a.png">

## Description
This bot was created to send happy email messages to my Mom at set times throughout the day and year.<br>
At 9, noon and 6pm, different greetings will be sent to my mom.<br>
I have also created a message to remind my mom to drink water. That goes out every day at 1pm.<br>
Inside the `messages.js` and `holiday-messsages.js` file, I have created all of the variables for the messages.<br>
The bot also sends out messages once a year on Christmas, Valentines Day and New Year's Day.


## How run the bot locally
1. In your terminal, run `git clone https://github.com/github-username/Happy_Messages_Bot.git`. Replace github-username with your actual username.
2. In your terminal, under the project directory, run `npm install` to add the `node_modules` folder
3. In your terminal, under the project directory, run `touch .env`. Store these variables inside the file with our own email address, password and mom's email.
```
ADMIN_EMAIL = YOUR EMAIL ADDRESS 
ADMIN_PASSWORD = YOUR PASSWORD
MOM_EMAIL = YOUR MOM'S EMAIL
```
4. In your terminal, run `npm start`

If you want to test sending your own message, then run this code.
```
//this runs every minute after the server starts
nodeCron.schedule('* * * * *', () => {
  async function testingMsg() {
    let info = await transporter.sendMail({
    from: ADMIN_EMAIL, // sender address
    to: MOM_EMAIL, // list of receivers
    subject: "Just testing", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html text
    })
    console.log(`Message send: ${info.messageId}`)
  }
  testingMsg().catch(console.error);
});
```

## Technologies used
Node.js<br>
Express.js

## Packages used
NodeMailer<br>
Node-cron<br>
Nodemon

## Node Cron syntax
```
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
 ```
