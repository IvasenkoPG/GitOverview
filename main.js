var http = require('http');
var express = require ("express");
var nodemailer = require('nodemailer');
var bodyParser = require ("body-parser");
var fs = require('fs');
var jeans = JSON.parse(fs.readFileSync('./jeans.json', 'utf8'));


var application = express();

application.use(express.static(__dirname + '/public'));
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended: true}));

application.get('/goods_womens', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(jeans.wom)
});
application.get('/goods_man', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(jeans.mans)
});

application.get('/goods', function (req, res) {
    for( var key  in jeans.wom){
         if(jeans.wom[key].id == req.query.id){
    res.header('Content-Type', 'application/json');
    res.send(jeans.wom[key])
        }
        for( var key  in jeans.mans){
            if(jeans.mans[key].id == req.query.id){
                res.header('Content-Type', 'application/json');
                res.send(jeans.mans[key])
            }
        }
    }
});

application.get('/cart', function (req, res) {
                res.header('Content-Type', 'application/json');
                res.send(jeans);
});

// application.get('/getAdmin', function (req, res) {
//     res.header('Content-Type', 'application/json');
//     res.send(jeans)
// });
// application.post('/setAdmin', function(req, res) {
//     jeans[key].push(req.body);
//     res.send(ok);
// });

application.post('/posting', function(req, res) {
    if(req.body.email == ''){
        res.send('Error');
        return false;

    }
          var smtpTransport = nodemailer.createTransport('SMTP', {
            host: 'smtp.gmail.com',
            secureConnection: true,
            port: 465,
            auth:{
                user:"ivasenko.pg@gmail.com",
                pass: '80504437173'
            }
        });
        var mailOptions = {
            to: "ivasenko.pg@gmail.com",
            subject: 'Хочу получить рассылку',
            text: req.body.email
        };
        smtpTransport.sendMail(mailOptions, function (error, response) {
            if(error){
               res.send('Erorr: '+error)
            }else{
                res.send('OK')
            }

        });
    });


application.post('/singUp', function(req, res) {
        if(req.body.firstname == '' || req.body.lastname == '' || req.body.email == '' || req.body.password == ''){
        res.send('Error');
        return false;
    }

    var smtpTransport = nodemailer.createTransport('SMTP', {
        host: 'smtp.gmail.com',
        secureConnection: true,
        port: 465,
        auth:{
            user:"ivasenko.pg@gmail.com",
            pass: '80504437173'
        }
    });
    var mailsOptions = {
        to: "ivasenko.pg@gmail.com",
        subject: 'Регістрація',
        text: req.body.firstname,
        text: req.body.lastname,
        text: req.body.email,
        text: req.body.password
    };
    smtpTransport.sendMail(mailsOptions, function (error, response) {
        if(error){
            res.send('Erorr: '+error)
        }else{
            res.send('OK')
        }

    });
});


application.listen(8887);

