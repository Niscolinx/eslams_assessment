import { IUser } from '../../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import { transporter } from '../../../utils/emailTransport'
import mjml2html from 'mjml'

async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        //console.log('req body', req.body)
        console.log('register', req.body)
        const {
            firstName,
            lastName,
            personalEmail,
            password,
            phoneNumber,
            birthDate,
            Gender,
            GuardianName,
            GuardianPhoneNumber,
            GuardianEmail,
            GuardianRelationship,
            institutionName,
            institutionType,
            institutionYearOfStudy,
        } = req.body

        //Validate
        // if (!personalEmail || !personalEmail.includes('@') || !password || !phoneNumber) {
        //     console.log('failed')
        //     res.status(422).json({ message: 'Invalid Data' })
        //     return
        // }

        const existingEmail = await User.findOne({ personalEmail })

        const existingPhoneNumber = await User.findOne({ phoneNumber })

        if (existingEmail) {
            return res.status(401).json({
                message: 'Email already exists',
            })
        }

        if (existingPhoneNumber) {
            return res.status(401).json({
                message: 'Number already in use',
            })
        }

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

        <mj-text font-size='20px' align='center'>Welcome ${fullName} to Eslams</mj-text>



        <mj-text font-size='15px' align='center'>Your account has been activated!</mj-text>

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
            .catch((err) => console.log('not verified email'))

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log({ err })
                res.json({
                    status: 'fail',
                })
            } else {
                console.log('email sent', data)
                res.json({
                    status: 'success',
                })
            }
        })

        const storeUser = new User({
            email: personalEmail,
            password: await bcrypt.hash(password, 12),
            firstName,
            lastName,
            phoneNumber,
            birthDate,
            Gender,
            GuardianName,
            GuardianPhoneNumber,
            GuardianEmail,
            GuardianRelationship,
            institutionName,
            institutionType,
            institutionYearOfStudy,
        })

        const verifyStored = await storeUser

        if (!verifyStored) {
            return res.status(500).json({ message: 'Server Error' })
        }
    } catch (err) {
        console.log({ err })
    }
}

export default signupHandler
