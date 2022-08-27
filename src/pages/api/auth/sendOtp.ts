import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import { transporter } from '../../../utils/emailTransport'
import mjml2html from 'mjml'
import Otp from '../../../models/Otp'

async function sendOtp(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        console.log('otp', req.body)
        const {  personalEmail, firstName, lastName } = req.body

        //generate random 6 digit code
        const otp = Math.floor(Math.random() * 1000000)

        const fullName = `${firstName} ${lastName}`

        const htmlOutput = mjml2html(
            `
  <mjml>
  <mj-body>
    <mj-section background-color='#E8E7E7' border-radius='1rem' font-family='Lato'>
      <mj-column>


        <mj-image width="70px" src="https://i.ibb.co/FXyQXg8/logo.jpg"></mj-image>

        <mj-divider border-color="#112ea3" border-width='1px'></mj-divider>

        <mj-text font-size='20px' align='center'>${fullName}</mj-text>



        <mj-text font-size='15px' align='center'>Below is your Verification Code</mj-text>

        <mj-button font-size='20px' color='black' background-color='white' padding-top='30px'>${otp}</mj-button>


      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`,
            {}
        )

        const mail = {
            from: 'admin@eslams.com',
            to: 'munisco12@gmail.com',
            subject: `Account Verification`,
            html: `${htmlOutput.html}`,
        }

        transporter
            .verify()
            .then((data) => {
                console.log('verified email credentials', data)
            })
            .catch((err) =>
                res.json({
                    status: 'fail',
                })
            )

        transporter.sendMail(mail, async(err, _) => {
            if (err) {
                console.log({ err })
                res.json({
                    status: 'fail',
                })
            } else {
                const pendingOtp = new Otp({
                    verificationOtp: otp,
                })

                const theUser = await pendingOtp.save()

                console.log('the user', theUser)
                res.json({
                    status: 'success',
                })
            }
        })
    } catch (err) {
        console.log({ err })
        res.json({
            status: 'fail',
        })
    }
}

export default sendOtp
