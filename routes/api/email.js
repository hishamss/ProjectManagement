const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
router.route("/:email").get((req, res) => {
  console.log(req.params.email);
  //   const output = `
  //     <h1>You have been added to project {Project Title} on Email:${req.params.email}</h1>
  //     <p>Click on the link below to login/sign up to be able to access the project</p>
  //     `;
  let link = `http://20ecf077912c.ngrok.io/api/projects/adduser/${req.params.email}`;
  let PM = "Hisham Saymeh";
  let ProjectTitle = "Project3";
  const output = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <!--<![endif]-->
      <style type="text/css">
          body {
              margin: 0;
              padding: 0;
          }
  
          table,
          td,
          tr {
              vertical-align: top;
              border-collapse: collapse;
          }
  
          * {
              line-height: inherit;
          }
  
          a[x-apple-data-detectors=true] {
              color: inherit !important;
              text-decoration: none !important;
          }
      </style>
      <style type="text/css" id="media-query">
          @media (max-width: 610px) {
  
              .block-grid,
              .col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
              }
  
              .block-grid {
                  width: 100% !important;
              }
  
              .col {
                  width: 100% !important;
              }
  
              .col>div {
                  margin: 0 auto;
              }
  
              img.fullwidth,
              img.fullwidthOnMobile {
                  max-width: 100% !important;
              }
  
              .no-stack .col {
                  min-width: 0 !important;
                  display: table-cell !important;
              }
  
              .no-stack.two-up .col {
                  width: 50% !important;
              }
  
              .no-stack .col.num4 {
                  width: 33% !important;
              }
  
              .no-stack .col.num8 {
                  width: 66% !important;
              }
  
              .no-stack .col.num4 {
                  width: 33% !important;
              }
  
              .no-stack .col.num3 {
                  width: 25% !important;
              }
  
              .no-stack .col.num6 {
                  width: 50% !important;
              }
  
              .no-stack .col.num9 {
                  width: 75% !important;
              }
  
              .video-block {
                  max-width: none !important;
              }
  
              .mobile_hide {
                  min-height: 0px;
                  max-height: 0px;
                  max-width: 0px;
                  display: none;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide {
                  display: block !important;
                  max-height: none !important;
              }
          }
      </style>
  </head>
  
  <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top">
          <tbody>
              <tr style="vertical-align: top;" valign="top">
                  <td style="word-break: break-word; vertical-align: top;" valign="top">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
                      <div style="background-color:#4bb3fd;">
                          <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 590px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#4bb3fd;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:590px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="590" style="background-color:transparent;width:590px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
                                  <div class="col num12" style="min-width: 320px; max-width: 590px; display: table-cell; vertical-align: top; width: 590px;">
                                      <div style="width:100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                                              <!--<![endif]-->
                                              <div class="img-container center autowidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/555517_536777/getitdone.JPG" alt="Alternate text" title="Alternate text" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 590px; display: block;" width="590">
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                              </div>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <div style="background-color:#4bb3fd;">
                          <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 590px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#4bb3fd;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:590px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="590" style="background-color:#ffffff;width:590px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:60px;"><![endif]-->
                                  <div class="col num12" style="min-width: 320px; max-width: 590px; display: table-cell; vertical-align: top; width: 590px;">
                                      <div style="width:100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;">
                                              <!--<![endif]-->
                                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: Arial, sans-serif"><![endif]-->
                                              <div style="color:#4bb3fd;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                                                  <div style="line-height: 1.2; font-size: 12px; color: #4bb3fd; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                                                      <p style="font-size: 34px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 41px; margin: 0;"><span style="font-size: 34px;"><strong>You've been added!</strong></span></p>
                                                  </div>
                                              </div>
                                              <!--[if mso]></td></tr></table><![endif]-->
                                              <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                  <tbody>
                                                      <tr style="vertical-align: top;" valign="top">
                                                          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                              <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="40%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 3px solid #FF22B1; width: 40%;" align="center" role="presentation" valign="top">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top;" valign="top">
                                                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                              <div style="color:#4bb3fd;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                  <div style="line-height: 1.2; font-size: 12px; color: #4bb3fd; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                                                      <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 17px; mso-ansi-font-size: 18px;">Hi,</span></strong></p>
                                                      <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 17px; mso-ansi-font-size: 18px;">${PM} has added you to ${ProjectTitle}</span></strong></p>
                                                  </div>
                                              </div>
                                              <!--[if mso]></td></tr></table><![endif]-->
                                              <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                                                  <tbody>
                                                      <tr style="vertical-align: top;" valign="top">
                                                          <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                              <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="40%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 3px solid #FF22B1; width: 40%;" align="center" role="presentation" valign="top">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top;" valign="top">
                                                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <div style="font-size:16px;text-align:center;font-family:Arial, Helvetica Neue, Helvetica, sans-serif"><br /><br /></div>
                                              <div class="button-container" align="center" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.google.com" style="height:37.5pt; width:140.25pt; v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#2dd881"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:20px"><![endif]--><a href=${link} target="_blank" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #2dd881; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #2dd881; border-right: 1px solid #2dd881; border-bottom: 1px solid #2dd881; border-left: 1px solid #2dd881; padding-top: 5px; padding-bottom: 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:20px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span style="font-size: 20px; line-height: 40px;" data-mce-style="font-size: 20px; line-height: 40px;"><strong>Get Started</strong></span></span></span></a>
                                                  <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                                              </div>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <div style="background-color:#4bb3fd;">
                          <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 590px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #4bb3fd;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#4bb3fd;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#4bb3fd;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:590px"><tr class="layout-full-width" style="background-color:#4bb3fd"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="590" style="background-color:#4bb3fd;width:590px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:60px;"><![endif]-->
                                  <div class="col num12" style="min-width: 320px; max-width: 590px; display: table-cell; vertical-align: top; width: 590px;">
                                      <div style="width:100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;">
                                              <!--<![endif]-->
                                              <div></div>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
              </tr>
          </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
  </body>
  
  </html>`;

  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "getitdone992@gmail.com", // generated ethereal user
        pass: process.env.GMAIL_PASS, // generated ethereal password
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
