import { IUser } from '../../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import { transporter } from '../../../utils/emailTransport'


async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        console.log('req body', req.body)
        const {firstName, lastName, email, password,phoneNumber, dateOfBirth, Gender, GuardianName, GuardianPhoneNumber, GuardianEmail, GuardianRelationship, institutionName, institutionType, institutionYearOfStudy, otp } = req.body
        //Validate
        if (!email || !email.includes('@') || !password || !phoneNumber) {
            console.log('failed')
            res.status(422).json({ message: 'Invalid Data' })
            return
        }

        const existingUserEmail = await User.findOne({ email })
        
        const existingPhoneNumber = await User.findOne({ phoneNumber })


        if (existingUserEmail) {
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
            dateOfBirth,
            Gender,
            GuardianName,
            GuardianPhoneNumber,
            GuardianEmail,
            GuardianRelationship,
            institutionName,
            institutionType,
            institutionYearOfStudy 
          
        })

        const verifyStored = await storeUser.save()

        if (!verifyStored) {
            return res.status(500).json({ message: 'Server Error' })
        }
       
         const mail = {
             from: 'admin@eslams.com',
             to: email,
             subject: `Account Verification`,
             html: `<h1>Your OTP</h1></br> <p>${otp}</p>`,
         }

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
