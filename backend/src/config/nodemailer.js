import nodemailer from "nodemailer";
import 'dotenv/config'
async function sendMail(email,message) {
  // Configure nodemailer with secure settings
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: "studentprojecthub11@gmail.com", // This may need to be the authorized sender by 'smtp-relay.brevo.com'
      pass: `${process.env.MAIL_SECERT_KEY}`,
    },
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates
    }
  });

  // Temporary storage for verification codes (replace with a database)
  // const verificationCodes = new Map();

  try {
    let info = await transporter.sendMail({
      from: email,
      to: "studentprojecthub11@gmail.com",
      subject: "Query",
      text: `${message}`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return code;
    // await res.json(info);
  } catch (error) {
    console.error(error);
    // res.status(500).send('Internal Server Error');
  }
}

export default sendMail;
