'use strict';
const nodemailer = require('nodemailer');
const appConfig = require('../../config/appConfig');

let signUpMail = (email, fullName) => {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: appConfig.email, // generated ethereal user
                pass: appConfig.password // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Scooby-Doo 🐕" <scooby@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: `Hello ${fullName}`, // plain text body
            html: `<h3>Thank You, You signed up succesfully !</h3>` // html body                                                             
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}


// mail for forgot password
let forgotPasswordMail = (email, userId) => {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: appConfig.email, // generated ethereal user
                pass: appConfig.password // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Scooby-Doo 🐕" <scooby@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Change Password', // Subject line
            text: `Hello `, // plain text body
            html: `<h3><a href="http://localhost:3000/users/change-password/">Link</a> to change password.</h3> 
            <p>Use this as your user ID : "${userId}" </p>
            <p>Thank You</p>` // html body                                                             
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}

let invitationMail = (roomName, reciverEmail, link, senderName) => {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: appConfig.email, // generated ethereal user
                pass: appConfig.password // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Scooby-Doo 🐕" <scooby@gmail.com>',
            to: reciverEmail, // list of receivers
            subject: 'Invitation Mail', // Subject line
            text: `Hello, `, // plain text body
            html: `<h3>Hey, ${senderName} has invited you to join ${roomName}.</h3>` // html body                                                             
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}


module.exports = {

    signUpMail: signUpMail,
    forgotPasswordMail: forgotPasswordMail,
    invitationMail: invitationMail,
}