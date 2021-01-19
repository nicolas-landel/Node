const Joi = require('joi')


module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9@$!%#?&]{8,32}$')
            )
        })

        const validation = schema.validate(req.body)
        const error = validation.error

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