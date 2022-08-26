import { IUser } from '../../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'

async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        console.log('req body', req.body)
        const {firstName, lastName,  } = req.body
        //Validate
        if (!email || !email.includes('@') || !password || !phoneNumber) {
            console.log('failed')
            res.status(422).json({ message: 'Invalid Data' })
            return
        }

        const existingUserEmail = await User.findOne({ email })
        const existingUsername = await User.findOne({
            username,
        })
        const existingPhoneNumber = await User.findOne({ phoneNumber })


        if (existingUserEmail) {
            return res.status(401).json({
                message: 'Email already exists',
            })
        }

        if (existingUsername) {
            return res.status(401).json({
                message: 'Username already taken',
            })
        }

        if (existingPhoneNumber) {
            return res.status(401).json({
                message: 'Number already in use',
            })
        }
        if (referral) {
            const firstUpliner = await User.findOne({ username: referral })

            if (!firstUpliner) {
                return res.status(401).json({
                    message: 'Referral not found',
                })
            } else {
                firstUpliner.referrals.push({
                    username,
                    level: 1,
                })

                await firstUpliner.save()

                if (firstUpliner.upliner) {
                    const secondUpliner = await User.findOne({
                        username: firstUpliner.upliner,
                    })

                    if (secondUpliner) {
                        secondUpliner.referrals.push({
                            username,
                            level: 2,
                        })

                        await secondUpliner.save()

                        if (secondUpliner.upliner) {
                            const thirdUpliner = await User.findOne({
                                username: secondUpliner.upliner,
                            })

                            if (thirdUpliner) {
                                thirdUpliner.referrals.push({
                                    username,
                                    level: 3,
                                })

                                await thirdUpliner.save()
                            }
                        }
                    }
                }
            }
        }

        const storeUser = new User({
            email,
            password: await bcrypt.hash(password, 12),
            username: username.split(' ').join(''),
            phoneNumber,
            upliner: referral,
            referralLink: `https://www.1960token.com/auth/register?reg=${username.split(' ').join('')}`,
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
