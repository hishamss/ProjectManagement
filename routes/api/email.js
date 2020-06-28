const router = require("express").Router();
const nodemailer = require("nodemailer");
router.route("/:email").get((req, res) => {
  console.log(req.params.email);
  const output = `
    <h1>You have been added to project {Project Title} on Email:${req.params.email}</h1>
    <p>Click on the link below to login/sign up to be able to access the project</p>
    `;

  console.log(output);
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "getitdone992@gmail.com", // generated ethereal user
        pass: "22h6m1990", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"DoNotReply" <getitdone992@gmail.com>', // sender address
      to: `${req.params.email}`, // list of receivers
      subject:
        "You have been added by {current User} to collborate on {Project title}", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    res.status(200).end();
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(() => {
    console.error;
    res.status(500).end();
  });
  // End of route
});

module.exports = router;
