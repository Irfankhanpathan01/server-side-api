import nodemailer from "nodemailer";
import  emailsend  from  "../module/emailSend.js"

export const sendEmailApi = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Demo234@gmail.com",
      pass: "ades ytgqc sdfg sdfg",
    },
  });
  const { Name, email, company, description, moreInfo } = req.body;

  const mailOptions = {
    from: "no-reply@gmail.com",
    to: " Demo234@gmail.com",
    subject: `Your email - ${moreInfo}`,
    html: `
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Which best describes your project:</strong> ${description}</p>
      <p><strong>More information:</strong> ${moreInfo}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
  
    console.log("Email sent: " + info.response);
  
    // Save the data to the database
    const newData = new emailsend({
      Name,
      email,
      company,
      description,
      moreInfo,
      emailResponse: info.response,  
    });
  
    newData.save()
      .then(savedData => {
        // console.log("Data saved to database:", savedData);
        res.status(200).send({ msg: "Email sent successfully and data saved to database!", data: savedData });
      })
      .catch(err => {
        res.status(500).send(err.toString());
      });
  });
  

};
