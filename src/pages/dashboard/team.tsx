import { GetSessionParams, useSession, getSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/app/hooks'
import { getUser, selectUser } from '../../store/features/user/UserSlice'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function team() {
    const { data: session } = useSession()
    const { theme } = useTheme()

    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

    const [referrals, setReferrals] = useState<TeamRow[]>()
    const [referralTotalNumberAndIncome, setReferralTotalNumberAndIncome] =
        useState<TeamTotalNumberAndIncome>({ teamIncome: 0, teamNumber: 0 })
    const [neuToUse, setNeuToUse] = useState<{}>()

    type TeamRow = {
        totalMember: number
        totalAmount: number
        level: number
    }

    type TeamTotalNumberAndIncome = {
        teamNumber: number
        teamIncome: number
    }

    useEffect(() => {
        if (session) {
            dispatch(getUser(session))
        }
    }, [session])

    useEffect(() => {
        const teamRow1: TeamRow = {
            totalMember: 0,
            totalAmount: 0,
            level: 1,
        }
        const teamRow2: TeamRow = {
            totalMember: 0,
            totalAmount: 0,
            level: 2,
        }
        const teamRow3: TeamRow = {
            totalMember: 0,
            totalAmount: 0,
            level: 3,
        }

        let teamNumber = 0
        let teamIncome = 0
        if (user.referrals.length > 0) {
            user.referrals.forEach((val) => {
                if (val.level === 1) {
                    teamRow1.totalMember += 1
                    teamRow1.totalAmount += 3

                    teamNumber += 1
                    teamIncome += 3
                }
                if (val.level === 2) {
                    teamRow2.totalMember += 1
                    teamRow2.totalAmount += 1.5

                    teamNumber += 1
                    teamIncome += 1.5
                }
                if (val.level === 3) {
                    teamRow3.totalMember += 1
                    teamRow3.totalAmount += 1

                    teamNumber += 1
                    teamIncome += 1
                }
            })
        }

        setReferrals([teamRow1, teamRow2, teamRow3])
        setReferralTotalNumberAndIncome({
            teamIncome,
            teamNumber,
        })
    }, [user])

    useEffect(() => {
        if (theme === 'dark') {
            setNeuToUse({
                background: `linear-gradient(145deg, #1c1c30, #171729)`,
                boxShadow: `7px 7px 14px #161625,
                 -7px -7px 14px #1e1e35`,
                borderRadius: '50px',
            })
        } else {
            setNeuToUse({
                background: `linear-gradient(145deg, #dadadf, #b8b8bb)`,
                boxShadow: `7px 7px 14px #a5a5a8,
             -7px -7px 14px #f3f3f8`,
                borderRadius: '50px',
                color: '#1a1a2d',
            })
        }
    }, [theme])

    return (
        <div className='h-[80vh]'>
            <div className='grid px-2 mt-8 h-full content-start relative md:mx-40'>
                <div className='grid'>
                    <p
                        className='justify-self-center font-semibold py-2 px-4 uppercase mb-4'
                        style={neuToUse}
                    >
                        Total Referral:{' '}
                        <span>{referralTotalNumberAndIncome?.teamNumber}</span>
                    </p>
                    <table>
                        <tbody>
                            {referrals &&
                                referrals.map((val, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className={`text-center font-bold ${
                                                i === 1
                                                    ? 'border-b border-t border-gray-700 light:border-gray-400'
                                                    : ''
                                            }`}
                                        >
                                            <td className='py-2 px-4'>
                                                LV{val.level}
                                            </td>
                                            <td className='py-2 px-4'>
                                                {val.totalMember}
                                            </td>
                                            {/* <td className='py-2 px-4'>
                                                ${val.totalAmount}
                                            </td> */}
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
                <div className='grid mt-10 justify-center bg-blue-400 py-4 px-6 text-[#1a1a2d] absolute bottom-0 right-0 left-0 gap-3'>
                    <h3 className='text-lg font-bold text-center'>
                        Refer your friends and get $2.5 bonus for each!!
                    </h3>
                    <p className='bg-white text-center p-4 text-sm rounded font-semibold'>
                        {user.referralLink}
                    </p>
                    <CopyToClipboard
                        text={user.referralLink}
                    >
                        
                            <button className='bg-orange-300 rounded-lg py-2 px-3 font-semibold justify-self-center place-self-end'>
                                Copy Link
                            </button>
                        
                    </CopyToClipboard>{' '}
                </div>
            </div>
        </div>
    )
}

export default team

export async function getServerSideProps(
    context: GetSessionParams | undefined
) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    return {
        props: { session },
    }
}
