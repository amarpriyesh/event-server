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
        
          async function main(data) {
           
           
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: data.from, // sender address
              to: "priyesh00500@gmail.com", // list of receivers
              subject: "From PriyeshPortfolio", // Subject line
              text: `From: ${data.name} \n\n${data.text}`, // plain text body
              // html body
            });

            
          
            console.log("Message sent: %s", info.messageId);
         
          }


          try { 
            await main(req.body)
            res.sendStatus(200);
          }
          catch (error) {

            res.status(500).send({data: error.message || 'An unexpected error occurred'});


          }

          
         

          


          
        
        
        
    };
      
    


    app.post("/api/index", index);
}
export default  TestController