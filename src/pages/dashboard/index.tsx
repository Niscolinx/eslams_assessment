import { getSession, GetSessionParams, useSession } from 'next-auth/react'
import Link from 'next/link'
import { IoIosPeople, IoIosCheckmarkCircle } from 'react-icons/io'
import { MdKeyboardBackspace } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'
import { BsFillGearFill } from 'react-icons/bs'
import { FaScroll } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import React, { useState, useEffect, useContext } from 'react'
import router from 'next/router'
import { useAppDispatch, useAppSelector } from '../../store/app/hooks'
import {
    getUser,
    selectUser,
    updatePortolio,
} from '../../store/features/user/UserSlice'
import { TbArrowsSort } from 'react-icons/tb'
import { clearMineTokens } from '../../store/features/mine/MinerSlice'
import { clearVideoTokens } from '../../store/features/video/VideoSlice'
import axios from 'axios'
import { NavContext } from '../../components/Context'
import Withdraw from '../../components/Withdraw'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export interface ReceiptData {
    _id: string
    amount: number
    createdAt: string
}

 type TOption = 'Mine/Video Income' | 'Referral Income'

const Home = () => {
    const { data: session } = useSession()
    const dispatch = useAppDispatch()
    const { isVerified, setIsVerified } = useContext(NavContext)

    const fetchedUser = useAppSelector(selectUser)
    const [displayButton, setDisplayButton] = useState('Transfer')
    const [display, toggleDisplay] = useState(false)
    const [coupon, setCoupon] = useState('')
    const [selectedOption, setSelectedOption] =
        useState<TOption>('Referral Income')
    const [loading, setLoading] = useState(false)
    const [activateLoading, setActivateLoading] = useState(false)
    const [totalMined, setTotalMined] = useState(
        fetchedUser.tokensMined + fetchedUser.videoMined
    )
    const [referralBonus, setReferralBonus] = useState(
        fetchedUser.referralBonus
    )

    const [showReceipt, setShowReceipt] = useState(false)
    const [withdrawalData, setWithdrawalData] = useState<ReceiptData | null>(
        null
    )
    const [couponError, setCouponError] = useState<boolean>(false)
    const [couponMessage, setCouponMessage] = useState<string>('')

    const { theme } = useTheme()
    const [neuToUse, setNeuToUse] = useState<{}>()

    useEffect(() => {
        if (session) {
            dispatch(getUser(session)).then((data) => {
                console.log({data})
                localStorage.setItem(
                    'userSession',
                    JSON.stringify(data.payload)
                )
            })
        }
    }, [session])


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

    const dropDown = () => {
        toggleDisplay(display ? false : true)
        setDisplayButton(display ? 'Transfer' : 'Close')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let toPortolio = 0
        if (selectedOption === 'Mine/Video Income') {
            toPortolio = totalMined
        } else {
            toPortolio = fetchedUser.referralBonus
        }

        if (toPortolio === 0) {
            return
        }

        console.log({selectedOption})

        setLoading(true)
        dispatch(clearMineTokens)
        dispatch(clearVideoTokens)
        dispatch(updatePortolio({ userSession: session!, data: toPortolio, selectedOption }))
            .then((data) => {
                console.log('update',{ data })

                setLoading(false)
                if (selectedOption === 'Mine/Video Income') {
                    setTotalMined(0)
                } else {
                    setReferralBonus(0)
                }
            })
            .catch(() => setLoading(false))
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as TOption
        setSelectedOption(value)
    }

    useEffect(() => {
        console.log("changed useEffect", fetchedUser.referralBonus, fetchedUser.tokensMined, fetchedUser.videoMined)
        setTotalMined(fetchedUser.tokensMined + fetchedUser.videoMined)
        setReferralBonus(fetchedUser.referralBonus)
    }, [fetchedUser])

    const handleActivate = (e: React.FormEvent) => {
        e.preventDefault()
        setActivateLoading(true)

        const getUser = localStorage.getItem('userSession')

        if (!getUser) {
            return
        }
        const user = JSON.parse(getUser)

        return axios
            .post('/api/activateCoupon', { coupon, user, toCheck: false })
            .then(({ data }) => {
                setActivateLoading(false)
                setIsVerified(true)

                console.log({ data })
            })
            .catch(({ response }) => {
                console.log({ response })
                const {
                    data: { status },
                } = response

                setIsVerified(false)
                setActivateLoading(false)

                setCouponMessage(status)
                setCouponError(true)
            })
    }

    const handleShowReceipt = () => {
        setShowReceipt(false)
    }

    const handleReceiptRedirect = () => {
        setShowReceipt(false)
        router.push('/dashboard/transactionHistory')
    }

   
    return (
        <div
            className={`h-[80vh] px-4 ${
                showReceipt ? 'overflow-hidden' : 'overflow-auto'
            }`}
        >
            <div
                className={`grid absolute top-0 bottom-0 left-0 right-0 w-screen h-screen z-99  ${
                    showReceipt ? 'visible slideInLeft' : 'invisible'
                }`}
                style={{
                    backdropFilter: 'blur(20px)',
                    background: 'linear-gradient(180deg, #1a1a2d, transparent)',
                }}
            >
                <div className='grid content-start gap-10 '>
                    <div className='flex m-2' onClick={handleShowReceipt}>
                        <MdKeyboardBackspace className='text-4xl' />
                    </div>
                    <div className='grid justify-items-center self-center px-10 gap-2'>
                        <IoIosCheckmarkCircle className='text-green-500 text-7xl' />
                        <p>
                            Thank you{' '}
                            <span className='font-bold capitalize'>
                                {fetchedUser.username}
                            </span>
                        </p>
                        <p className='text-center'>
                            Your payment request has been received and will be
                            processed shortly
                        </p>
                        <div className='grid my-5'>
                            <div className='grid grid-cols-2 gap-5 justify-between'>
                                <p className='capitalize text-right'>
                                    Trace Id
                                </p>{' '}
                                <p className='font-bold '>
                                    {withdrawalData?._id.slice(6, 14)}
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-5 justify-between'>
                                <p className='capitalize text-right'>
                                    Payout Method
                                </p>{' '}
                                <p className='font-bold '>USDT</p>
                            </div>
                            <div className='grid grid-cols-2 gap-5 justify-between'>
                                <p className='capitalize text-right'>Amount</p>{' '}
                                <p className='font-bold '>
                                    ${withdrawalData?.amount} USD
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-5 justify-between'>
                                <p className='capitalize text-right'>
                                    Requested Date
                                </p>{' '}
                                <p className='font-bold '>{`${
                                    withdrawalData?.createdAt
                                        ? new Date(
                                              withdrawalData.createdAt
                                          ).toLocaleDateString('en-GB')
                                        : ''
                                }`}</p>
                            </div>
                        </div>
                        <p className='text-center'>
                            You can review or cancel your withdrawal request by
                            contacting our Customer Service Representatives
                        </p>
                        <button
                            className='bg-orange-300 text-[#1a1a2d] rounded-lg py-2 px-4 cursor-pointer font-semibold mt-10'
                            onClick={handleReceiptRedirect}
                        >
                            Review Pending Payout Request{' '}
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid mt-10 gap-5'>
                <div
                    className=' justify-center grid w-max text-center py-2 px-10 rounded-lg place-self-center'
                    style={neuToUse}
                >
                    <p className='text-sm'>Portfolio</p>
                    <p className='font-bold text-3xl'>
                        ${fetchedUser.portfolio}
                    </p>
                </div>

                {isVerified ? (
                    <Withdraw
                        setShowReceipt={setShowReceipt}
                        setWithdrawalData={setWithdrawalData}
                    />
                ) : (
                    <form
                        className='flex justify-center align-middle gap-2'
                        onSubmit={handleActivate}
                    >
                        <div className='flex relative items-center'>
                            <input
                                type='text'
                                placeholder='Coupon code'
                                value={coupon}
                                maxLength={6}
                                onChange={(e) => setCoupon(e.target.value)}
                                className='rounded-lg shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#d1d1db]'
                            />
                            <span
                                className={`absolute right-0 px-2 flex items-center text-white ${
                                    couponError ? 'bg-red-500' : 'bg-green-700'
                                }`}
                            >
                                {couponMessage}
                            </span>
                        </div>
                        <button
                            className='bg-orange-300 text-[#1a1a2d] rounded px-2 py-1'
                            type='submit'
                        >
                            {activateLoading ? 'Loading...' : 'Activate'}
                        </button>
                    </form>
                )}

                <div className='grid mt-10 text-[#ccccd0] border-b border-gray-700 pb-3 md:mx-20 '>
                    <h3 className='border-b border-gray-700 pb-2 text-xl font-semibold light:text-[#1a1a2d]'>
                        Account
                    </h3>
                    <div className='grid mt-4 grid-cols-tc gap-3'>
                        <Link href='/dashboard/vendors'>
                            <div className='grid justify-center place-items-center'>
                                <ImProfile className='text-blue-400 text-3xl light:text-[#1a1a2d]' />
                                <button
                                    className='text-sm p-1'
                                    style={neuToUse}
                                >
                                    Vendors
                                </button>
                            </div>
                        </Link>
                        <Link href='/dashboard/team'>
                            <div className='grid justify-center place-items-center'>
                                <IoIosPeople className='text-blue-400 text-3xl light:text-[#1a1a2d]' />
                                <button
                                    className='text-sm p-1'
                                    style={neuToUse}
                                >
                                    My team
                                </button>
                            </div>
                        </Link>
                        <Link href='/dashboard/profile'>
                            <div className='grid justify-center place-items-center'>
                                <BsFillGearFill className='text-blue-400 text-3xl light:text-[#1a1a2d]' />
                                <button
                                    className='text-sm p-1'
                                    style={neuToUse}
                                >
                                    Settings
                                </button>
                            </div>
                        </Link>
                        <Link href='/dashboard/transactionHistory'>
                            <div className='grid justify-center place-items-center'>
                                <FaScroll className='text-blue-400 text-3xl light:text-[#1a1a2d]' />
                                <button
                                    className='text-sm p-1'
                                    style={neuToUse}
                                >
                                    Transaction History
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='py-5 px-2 grid md:mx-20'>
                <div className='flex justify-around bg-orange-300 rounded-t-lg py-5 px-4 dark:text-[#1a1a2d]'>
                    <div className='grid justify-items-center'>
                        <p className='font-semibold'>Referral Income</p>
                        <p className='font-bold'>${referralBonus}</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <p className='font-semibold'>Mine/Video Income</p>
                        <p className='font-bold'>${totalMined}</p>
                    </div>
                </div>
                <div
                    className='grid animate-rotate-out transition-all delay-100'
                    style={
                        !display
                            ? {
                                  opacity: '0',
                                  height: '0',
                                  visibility: 'hidden',
                              }
                            : {
                                  opacity: '1',
                                  height: '100%',
                                  visibility: 'visible',
                              }
                    }
                >
                    <form
                        className='px-8 py-12 grid md:mx-20'
                        onSubmit={handleSubmit}
                    >
                        <div className=' grid justify-items-center gap-4 dark:text-[#1a1a2d]'>
                            <select
                                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white `}
                                onChange={handleChange}
                            >
                                <option value='Referral Income'>
                                    Referral Income
                                </option>
                                <option value='Mine/Video Income'>
                                    Mine/Video Income
                                </option>
                            </select>
                            <TbArrowsSort className='text-2xl text-gray-200' />
                            <p
                                className='text-2xl py-4 px-6 border border-[#1a1a2d] font-bold rounded-lg text-gray-300'
                                style={neuToUse}
                            >
                                Portfolio
                            </p>
                        </div>
                        <button
                            className='bg-green-600 font-semibold py-1 px-4 justify-self-center rounded-lg mt-8 text-white'
                            type='submit'
                        >
                            {loading ? 'Loading...' : 'Transfer'}
                        </button>
                    </form>
                </div>
                <button
                    className='text-center bg-blue-400 py-2 px-5 rounded-b-lg dark:text-[#1a1a2d]'
                    onClick={dropDown}
                >
                    {displayButton}
                </button>
            </div>
            <AnimationOnScroll
                animateIn=' animate__rubberBand'
                initiallyVisible={true}
                animateOnce={true}
            >
                <div className='grid md:mx-20'>
                    <h3 className='text-xl text-center font-semibold text-white pb-2 light:text-black md:text-center'>
                        KEEP YOUR ACCOUNT SAFE{' '}
                    </h3>
                    <p className='md:text-center light:text-[#1a1a2d] text-center'>
                        1960TOKEN will never ask you for your password or
                        Authentication code by Phone, by Email, by Skype,or
                        Social networks ( Facebook, Twitter, Instagram etc.) Be
                        sure that you only enter your login details on genuine
                        1960TOKEN sites like{' '}
                        <a href='https://www.1960token.com'>
                            <span className='text-orange-300 font-semibold'>
                                https://www.1960token.com
                            </span>{' '}
                        </a>{' '}
                        . If you see anything suspicious, please contact
                        1960Token Support.
                    </p>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Home

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
