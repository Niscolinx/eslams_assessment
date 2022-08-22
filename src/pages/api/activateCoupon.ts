import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import GeneratedCode from '../../models/generatedCode'
import User, { IUser } from '../../models/User'

export default async function activateCoupon(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { coupon, user, toCheck } = req.body

    try {
        await dbConnect()

        const code = await GeneratedCode.findOne({
            code: coupon,
        })

        if (!code) {
            return res.status(401).json({
                message: 'Code not found',
                status: 'Invalid',
            })
        }

        if (code.isUsed) {
            return res.status(401).json({
                message: 'Code already used',
                status: 'Used',
            })
        }

        if (!toCheck) {
            const getUser: IUser | null = await User.findOne({
                email: user.email,
            })

            console.log('not checking>>>>>>>>>')
            console.log({ getUser })

            if (getUser) {
                console.log('getUser', getUser)
            } else {
                console.log('user not found')
            }

            if (!getUser) {
                return res.status(400).json('user not found')
            }

            if (getUser.isVerified) {
                return res.status(401).json('User already verified')
            }
            code.isUsed = true

            await code.save()

            getUser.isVerified = true
            getUser.portfolio += 1

            await getUser.save()

            const upliner = await User.findOne({ username: getUser.upliner })

            if (upliner){
                upliner.referralBonus += 2.5

                await upliner.save()
            } 

            return res.status(200).json('Successfully activated')
        } else {
            console.log('checking>>>>>>>>>>>>>')
            return res.status(200).json('valid coupon')
        }
    } catch (err) {
        console.log({ err })
        res.status(400).json('error')
    }
}
