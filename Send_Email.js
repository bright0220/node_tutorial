var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jackfortin0220@gmail.com',
        pass: 'senko438'
    },
    tls: {rejectUnauthorized: false}
});

var mailOptions = {
    from: 'jackfortin0220@gmail.com',
    to: 'th719138@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, inof){
    if(error) console.log(error);
    else console.log('Email sent: ' + inof.response);
});