var User = require('../models/user');


var jwt = require('jsonwebtoken');
var secret = 'harrypotter';
// var nodemailer = require('nodemailer');
// var sgTransport = require('nodemailer-sendgrid-transport');

module.exports = function(router) {

   router.post('/users', function (req, res) {
        let { name, password,email } = req.body;
        let data = validate({ name, password,email })
        if (data.status) {
            let blog = new Blog(data.data);
            blog.save()
                .then(result => res.status(200).json(successResult(result, "Registered Successfully")))
                .catch(err => res.status(500).json(serverError(err)))
        } else {
            res.status(400).json(parameterMissing(data.data))
        }
    });
   
    }