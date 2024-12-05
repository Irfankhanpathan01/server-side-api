// import Contact  from  '../module/Contact.js'
import nodemailer from "nodemailer";
export const sendEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nodemailerdemo@gmail.com",
          pass: "demo ysesu duej dree",
        },
      });
    const { fullname, workemail, companyemail, phone, subject, message } = req.body;
  
    const mailOptions = {
      from: "no-reply@gmail.com",
      to: "info@Demo.com",
      subject: `New Contact Form Submission - ${subject}`,
      html: `
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Work Email:</strong> ${workemail}</p>
        <p><strong>Company Email:</strong> ${companyemail}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
  
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully!");
    });
  }


  
  