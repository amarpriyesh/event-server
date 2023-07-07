import nodemailer from 'nodemailer';
const TestController = (app) => {

    const index = async (req, res) => {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: 'priyesh.fnu@gmail.com',
              pass: 'blvjfdbhhcnqpclx'
            }
          });
        
          async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: '"Events App"', // sender address
              to: "priyesh.p@northeastern.edu", // list of receivers
              subject: "Hello ✔", // Subject line
              text: "Hello world?", // plain text body
              html: "<b>Hello world?</b>", // html body
            });
          
            console.log("Message sent: %s", info.messageId);
         
          }
          
          main().catch(console.error);
        
        res.send("Index Page");
    };
      
    


    app.get("/api/index", index);
}
export default  TestController