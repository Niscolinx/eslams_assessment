import { IUser } from '../../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import { transporter } from '../../../utils/emailTransport'


async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        //console.log('req body', req.body)
        console.log('register')
        const {firstName, lastName, personalEmail, password,phoneNumber, birthDate, Gender, GuardianName, GuardianPhoneNumber, GuardianEmail, GuardianRelationship, institutionName, institutionType, institutionYearOfStudy } = req.body

    
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
        

        const storeUser = new User({
            email,
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
            institutionYearOfStudy 
          
        })

        const verifyStored = await storeUser

        if (!verifyStored) {
            return res.status(500).json({ message: 'Server Error' })
        }

        const otp = ''
       
         const mail = {
             from: 'admin@1960token.com',
             to: 'munisco12@gmail.com',
             subject: `Account Verification`,
             html: `<h1>Your OTP</h1></br> <p>${otp}</p>`,
         }

         transporter.verify().then((data) => {
            console.log('verified email credentials', data)
         }).catch(err => console.log('not verified email'))

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


       
    } catch (err) {
        console.log({ err })
    }
}

export default signupHandler
