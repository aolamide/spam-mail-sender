const requestValidator = (req, res, next) => {
    //mailAddress
    req.check('mailAddress', 'Write an email address').notEmpty();
    req.check('mailAddress', 'Write a valid email address').isEmail()

    //frequency
    req.check('frequency', 'Write a number').notEmpty();

    //howMany
    req.check('howMany', 'Write a number for the number of emails to be sent').notEmpty();

    //errors
    const errors = req.validationErrors();
    //if there are errors, respond with first one
    if(errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({msg : firstError});
    }


    return next();
}

module.exports = requestValidator;