const nodemailer = require('nodemailer')

async function sendEmail(email,subject,text){
    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"moolaemailservice@gmail.com",
                pass:"1399Ahmed!"
            }
        });

        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text,
        });
        console.log("Email Send Successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = sendEmail