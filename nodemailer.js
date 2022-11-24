var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sender@gmail.com",
    pass: "senderapppw", //use app pw not normal gmail pw
  },
});

var mailOptions = {
  from: "sender@gmail.com",
  to: "reciver@gmail.com",
  subject: "Sending Email using Node.js",
  text: `Hi reciver, i am sender`,
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
