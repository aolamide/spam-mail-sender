const router = require('express').Router();
const requestValidator = require('../validator');
const {transporter, mailOptions} = require('../mail');


const sendMail = async (req, res) => {
  try {
    const { mailAddress, frequency, howMany } = req.body;
    mailOptions.to = mailAddress;
    let count = 0;
    await transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(400).json({msg : 'Server error, try again'});
      } else {
        console.log(info);
        res.json({msg : 'Success, spam emails would now be sent the number of times you specified in the specified frequency'});
      }
    });

    setTimeout(function() {
      const sendingMails = setInterval(function() {
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            count++;
          }
          if(count === Number(howMany - 1)){
            clearInterval(sendingMails);
          }
        });
      }, frequency * 1000);
    }, frequency * 1000)
  } catch(err){
    console.log(err)
  }
}

router.post('/', requestValidator,  sendMail);

module.exports = router;

