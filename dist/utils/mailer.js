"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailer = void 0;
const dotenv_1 = require("dotenv");
const nodemailer_1 = require("nodemailer");
(0, dotenv_1.config)();
function mailer(sendee, title, message, senderName) {
    console.log('Sent mail => ', {
        auth: {
            user: process.env.NOREPLY_EMAIL,
            pass: process.env.NOREPLY_PASSWORD,
        },
    });
    const transporter = (0, nodemailer_1.createTransport)({
        host: 'mail.teesas.com',
        port: 465,
        auth: {
            user: process.env.NOREPLY_EMAIL,
            pass: process.env.NOREPLY_PASSWORD,
        },
    });
    const mailOptions = {
        from: `${senderName || 'Teesas Education'} <${process.env.NOREPLY_EMAIL}>`,
        to: sendee,
        subject: title,
        text: message.text,
        html: message.html,
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log('Error while sending email => ' + err);
                reject('Error while sending email' + err);
            }
            else {
                console.log('Email sent => ', info);
                resolve(info);
            }
        });
    });
}
exports.mailer = mailer;
//# sourceMappingURL=mailer.js.map