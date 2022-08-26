import { IUser } from '../../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'

async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        console.log('req body', req.body)
        const {firstName, lastName, email, password,phoneNumber, dateOfBirth, Gender, GuardianName, GuardianPhoneNumber, GuardianEmail, GuardianRelationship, institutionName, institutionType, institutionYearOfStudy } = req.body
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

        if (verifyStored) {
            res.status(201).json({
                message: 'successful',
            })
        } else {
            res.status(404).json({
                message: 'failed',
            })
        }
    } catch (err) {
        console.log({ err })
    }
}

export default signupHandler
