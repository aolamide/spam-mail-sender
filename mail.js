const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const reply = `
      <p>Yooo</p>
      <p> Hi I'm Olamide, and I'm here to spam you</p>
      <p>Expect more mails</p>
      <p>Enjoy</p>
    `

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASS
    }
});
  
var mailOptions = {
    from: process.env.MAIL_ADDRESS,
    to: '',
    subject: 'WELCOME TO MR SPAM!!!',
    html: reply
}

module.exports = {
    transporter, mailOptions
}