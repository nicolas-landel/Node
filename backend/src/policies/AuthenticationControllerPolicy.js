const Joi = require('joi')


module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,50}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password must contain at least 8 characters with at least one letter and one numeric character`
                    })
                    break
                default:
                    res.statuc(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()
        }
    }
}