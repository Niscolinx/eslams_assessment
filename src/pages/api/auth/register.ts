import { IUser } from './../../../models/User';
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import { transporter } from '../../../utils/emailTransport'
import mjml2html from 'mjml'
import Otp from '../../../models/Otp'
import * as jose from 'jose'

async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        //console.log('req body', req.body)
        const {
            firstName,
            lastName,
            personalEmail,
            password,
            phoneNumber,
            birthDate,
            gender,
            guardianName,
            guardianPhoneNumber,
            guardianEmail,
            guardianRelationship,
            institutionName,
            institutionType,
            institutionYearOfStudy,
            otp,
        } = req.body

        const existingEmail = await User.findOne({ email: personalEmail })


        //const existingPhoneNumber = await User.findOne({ phoneNumber })

        if (existingEmail) {
            return res.status(401).json({
                message: 'Email already exists',
            })
        }

        // if (existingPhoneNumber) {
        //     return res.status(401).json({
        //         message: 'Number already in use',
        //     })
        // }

        const checkForOtp = await Otp.find({
            creatorEmail: personalEmail,
        })

        if (!checkForOtp) {
            return res.status(401).json({
                message: 'Otp not found',
            })
        }


        if (checkForOtp[checkForOtp.length - 1].code !== Number(otp)) {
            return res.status(401).json({
                message: 'Invalid Otp',
            })
        }


        const newUser: IUser | null = new User({
            email: personalEmail,
            password: await bcrypt.hash(password, 12),
            firstName,
            lastName,
            phoneNumber,
            birthDate,
            gender,
            guardianName,
            guardianPhoneNumber,
            guardianEmail,
            guardianRelationship,
            institutionName,
            institutionType,
            institutionYearOfStudy,
        })

        
        if (!newUser) {
            return res.status(500).json({ message: 'Server Error' })
        }

        const user = await newUser.save()

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

        <mj-button font-size='20px' color='black' background-color='white' padding-top='30px'>
            <a href='https://eslams-assessment.vercel.app'>Go to Dashboard</a>
        </mj-button>


      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`,
            {}
        )

        const mail = {
            from: 'admin@eslams.com',
            to: personalEmail,
            subject: `Welcome to Eslams`,
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

        const token = await new jose.SignJWT({
            email: user.email,
            userId: user!._id.toString(),
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('30d')
            .sign(new TextEncoder().encode(process.env.JWT_SECRET!))

     
       
        return res.status(200).json({ user, token })
        //setCookie('userSession', token, { req, res, maxAge: 60 * 60 * 24 })
    } catch (err) {
        console.log({ err })
    }
}

export default signupHandler
