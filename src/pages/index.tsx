import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { GiTeamDowngrade } from 'react-icons/gi'
import { RiCustomerService2Line } from 'react-icons/ri'
import { FaQuestionCircle } from 'react-icons/fa'
import { AiFillCodepenCircle, AiOutlineDeleteRow } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import Image from 'next/image'
import {
    BsPersonPlusFill,
    BsCheck,
    BsFacebook,
    BsTelegram,
    BsYoutube,
} from 'react-icons/bs'
import { FaDollarSign, FaPeopleArrows } from 'react-icons/fa'
import { FiAirplay } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import axios from 'axios'

import dbConnect from '../lib/dbConnect'
import Logo from '../../public/logo.svg'

const Index = () => {
    const { theme } = useTheme()
    const [neuToUse, setNeuToUse] = useState<{}>()
    const [stepsNeu, setStepsNeu] = useState<{}>()
    const [checking, setChecking] = useState<boolean>(false)
    const [coupon, setCoupon] = useState('')
    const [couponError, setCouponError] = useState<boolean>(false)
    const [couponMessage, setCouponMessage] = useState<string>('')
    const [isChecked, setIsChecked] = useState(false)

    

    useEffect(() => {
        if (theme === 'dark') {
            setNeuToUse({
                background: `linear-gradient(145deg, #1c1c30, #171729)`,
                boxShadow: `7px 7px 14px #161625,
                 -7px -7px 14px #1e1e35`,
                borderRadius: '50px',
            })

            setStepsNeu({})
        } else {
            setNeuToUse({
                background: `linear-gradient(145deg, #dadadf, #b8b8bb)`,
                boxShadow: `7px 7px 14px #a5a5a8,
             -7px -7px 14px #f3f3f8`,
                borderRadius: '50px',
                color: '#1a1a2d',
            })

            setStepsNeu({
                background: `linear-gradient(145deg, #dadadf, #b8b8bb)`,
                boxShadow: `7px 7px 14px #a5a5a8,
             -7px -7px 14px #f3f3f8`,
                borderRadius: '50px',
                color: '#1a1a2d',
            })
        }
    }, [theme])

    const handleCheckCode = (e: React.FormEvent) => {
        e.preventDefault()
        setChecking(true)
        setCouponMessage('')
        const getUser = localStorage.getItem('userSession')

        if (!coupon) {
            return
        }
        if (!getUser) {
            return
        }
        const user = JSON.parse(getUser)

        return axios
            .post('/api/activateCoupon', { coupon, user, toCheck: true })
            .then(({ data }) => {
                setChecking(false)
                setCouponError(false)
                setCouponMessage('Valid')
            })
            .catch(({ response }) => {
                console.log({ response })
                const {
                    data: { status },
                } = response

                console.log(response)
                setCouponMessage(status)
                setCouponError(true)
                setChecking(false)
            })
    }

    console.log({ isChecked })

    

    return (
        <>
            <div className='flex items-center text-[#cb8f10] font-bold relative mt-4'>
                <Logo className='text-blue-400 light:text-[#1a1a2d] w-21 h-21 absolute left-0' />
                <p className='text-xl ml-18'>1960TOKEN</p>
            </div>
            <div className='grid max-w-5xl mx-auto text-gray-400 px-4'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='w-full md:w-2/3 rounded-4xl overflow-hidden relative'>
                            {/* file sizes are too big, check for optimization <Carousel1/> */}
                            <Image
                                src='/slider1.png'
                                alt=''
                                width='1920px'
                                height='1080px'
                            />
                            <div className='grid absolute right-[30%] top-[28%] md:(top-[35%] text-3xl) px-3 gap-4'>
                                <p className='font-semibold text-white animateTop'>
                                    <span className='text-orange-300 font-bold'>
                                        Superior
                                    </span>{' '}
                                    Digital currency you can mine on your phone
                                </p>
                                <Link href='/api/auth/signin'>
                                    <button className='bg-orange-300 text-[#1a1a2d] rounded px-2 py-1 justify-self-center text-sm animateBottom md:text-lg'>
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full md:w-2/3 rounded-4xl overflow-hidden relative'>
                            <Image
                                src='/slider2.png'
                                alt=''
                                width='1920px'
                                height='1080px'
                            />
                            <div className='grid absolute left-0 top-0 bottom-0 right-0 px-3 gap-4'>
                                <div className='grid place-content-center gap-2'>
                                    <p className='font-semibold text-[#1a1a2d] text-2xl md:text-4xl'>
                                        Invite Your Friends
                                    </p>
                                    <Link href='/api/auth/signin'>
                                        <button className='bg-orange-300 text-[#1a1a2d] rounded px-2 py-1 justify-self-center text-sm md:text-lg'>
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full md:w-2/3 rounded-4xl overflow-hidden relative'>
                            <Image
                                src='/slider3.png'
                                alt=''
                                width='1920px'
                                height='1080px'
                            />
                            <div className='grid absolute left-0 top-0 bottom-0 right-0 px-3 gap-4'>
                                <div className='grid place-content-center gap-2'>
                                    <p className='font-semibold text-white md:text-4xl'>
                                        Start mining and affiliate with us
                                    </p>
                                    <Link href='/api/auth/signin'>
                                        <button className='bg-orange-300 text-[#1a1a2d] rounded px-2 py-1 justify-self-center text-sm md:text-lg'>
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='grid text-gray-400 border-b border-t border-gray-800 py-3 mt-5'>
                    <AnimationOnScroll
                        animateIn=' animate__rubberBand'
                        animateOnce={true}
                        initiallyVisible={true}
                    >
                        <h3 className='text-xl text-center font-semibold text-white pb-2 light:text-black md:text-center'>
                            BEST MARKETING PLATFORM{' '}
                        </h3>
                        <p className='md:text-center light:text-[#1a1a2d] text-center'>
                            As a reputable and outstanding organisation, we
                            guarantee that every active user on our platform
                            will be handsomely rewarded financially.
                        </p>
                    </AnimationOnScroll>
                    <div className='grid grid-cols-2 mt-4 md:grid-cols-4 gap-5'>
                        <Link href='/aboutUs'>
                            <div className='grid justify-center place-items-center cursor-pointer'>
                                <Logo className='text-blue-400 text-3xl light:text-[#1a1a2d] w-12 h-12' />
                                <button
                                    className='text-md p-1 '
                                    style={neuToUse}
                                >
                                    About Us
                                </button>
                            </div>
                        </Link>

                        <Link href='/Faq'>
                            <div className='grid justify-center place-items-center cursor-pointer'>
                                <FaQuestionCircle className='text-blue-400 text-3xl light:text-[#1a1a2d]' />
                                <button
                                    className='text-md p-1 light:text-[#1a1a2d]'
                                    //style={neuToUse}
                                >
                                    FAQ
                                </button>
                            </div>
                        </Link>
                        <Link href='/customerService'>
                            <div className='grid justify-center place-items-center cursor-pointer'>
                                <RiCustomerService2Line className='text-blue-400 text-3xl light:text-[#1a1a2d]' />
                                <button
                                    className='text-md p-1'
                                    style={neuToUse}
                                >
                                    Customer Service
                                </button>
                            </div>
                        </Link>
                        <div
                            className={`flex bg-[#1a1a2d] place-content-center transition-transform delay-75 ease-in ${
                                isChecked
                                    ? 'animateMoveInLeft'
                                    : 'animateMoveOutRight'
                            }`}
                        >
                            <div
                                className={`grid justify-center place-items-center cursor-pointer ${
                                    isChecked ? 'hidden' : 'visible'
                                }`}
                                onClick={() => setIsChecked(true)}
                            >
                                <AiFillCodepenCircle className='text-blue-400 text-3xl light:text-[#1a1a2d]' />
                                <button
                                    className='text-md p-1'
                                    style={neuToUse}
                                >
                                    Check Code
                                </button>
                            </div>
                            <form
                                className={`flex justify-center align-middle gap-2  place-self-center  ${
                                    isChecked ? 'visible check-code' : 'hidden'
                                }`}
                                onSubmit={handleCheckCode}
                            >
                                <div
                                    className='flex'
                                    onClick={() => setIsChecked(false)}
                                >
                                    <AiOutlineDeleteRow className='self-center text-xl font-bold cursor-pointer' />
                                </div>
                                <div className='flex relative items-center'>
                                    <input
                                        type='text'
                                        placeholder='Enter Coupon Code'
                                        value={coupon}
                                        maxLength={6}
                                        onChange={(e) => {
                                            setCouponMessage('')
                                            setCoupon(e.target.value)
                                        }}
                                        className='rounded-lg shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#d1d1db]'
                                    />
                                    <span
                                        className={`absolute right-0 px-2 flex items-center text-white ${
                                            couponError
                                                ? 'bg-red-500'
                                                : 'bg-green-700'
                                        }`}
                                    >
                                        {couponMessage}
                                    </span>
                                </div>
                                <button
                                    className='bg-orange-300 text-[#1a1a2d] rounded px-2 py-1 w-max'
                                    type='submit'
                                >
                                    {checking ? 'Checking...' : 'Check Code'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='grid justify-center gap-5 my-10 md:grid-cols-[repeat(auto-fit,minmax(20rem,100px))]'>
                    <AnimationOnScroll
                        animateIn='animate__fadeInLeft'
                        animateOnce={true}
                    >
                        <div
                            className='grid items-center bg-[#ccccd0] text-black py-2 px-4 rounded-lg w-full grid-cols-[min-content,1fr] '
                            style={stepsNeu}
                        >
                            <div className='flex'>
                                <BsPersonPlusFill className='flex mr-8 text-6xl' />
                            </div>
                            <div className='grid text-lg'>
                                <p className=' font-semibold '>
                                    Register Today
                                </p>
                                <p className='py-2 text-2xl font-extrabold'>
                                    $5
                                </p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn='animate__fadeInRight'
                        animateOnce={true}
                    >
                        <div
                            className='grid items-center text-[#1a1a2d] py-2 px-4 rounded-lg grid-cols-[min-content,1fr] bg-orange-300'
                            // style={stepsNeu}
                        >
                            <div className='flex'>
                                <BsCheck className='flex mr-8 text-6xl' />
                            </div>
                            <div className='grid text-lg'>
                                <p className=' font-semibold '>
                                    Registration Bonus
                                </p>
                                <p className='py-2 text-2xl font-extrabold'>
                                    $1
                                </p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn='animate__fadeInLeft'
                        animateOnce={true}
                    >
                        <div
                            className='grid items-center bg-[#ccccd0] text-black py-2 px-4 rounded-lg grid-cols-[min-content,1fr] '
                            style={stepsNeu}
                        >
                            <div className='flex'>
                                <FaDollarSign className='flex mr-8 text-6xl' />
                            </div>
                            <div className='grid text-lg'>
                                <p className=' font-semibold '>
                                    Referral Commission
                                </p>
                                <p className='py-2 text-2xl font-bold'>$2.5</p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>

                <div className='grid mt-10'>
                    <AnimationOnScroll animateIn='animate__pulse'>
                        <div className='grid px-4' style={neuToUse}>
                            <h3 className='text-center font-semibold text-2xl grad p-2 uppercase px-4'>
                                How 1960token works
                            </h3>
                            <p className='text-center'>
                                You are guaranteed to earn massively as an
                                active member of 1960TOKEN in various ways;
                            </p>
                        </div>
                    </AnimationOnScroll>

                    <div className='grid mt-10 gap-10 md:grid-cols-[repeat(auto-fit,minmax(15%,1fr))]'>
                        <div className='grid grid-cols-[max-content,1fr] md:(flex flex-col items-center grid-cols-none) gap-5'>
                            <AnimationOnScroll animateIn='animate__slideInLeft'>
                                <FaPeopleArrows className='text-blue-400 light:text-[#1a1a2d] text-6xl' />
                            </AnimationOnScroll>
                            <div className='grid md:justify-items-center'>
                                <AnimationOnScroll animateIn='animate__slideInRight'>
                                    <h3 className='text-2xl font-semibold text-white pb-2 light:text-black md:text-center'>
                                        Affiliate Referral
                                    </h3>
                                    <p className='md:text-center light:text-[#1a1a2d]'>
                                        You are handsomely rewarded for telling
                                        your friends and family about the
                                        services of 1960token. You earn $2.5 on
                                        each successful referral. This option
                                        enables increase in earning
                                    </p>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className='grid grid-cols-[max-content,1fr] md:(flex flex-col items-center grid-cols-none) gap-5'>
                            <AnimationOnScroll animateIn='animate__slideInLeft'>
                                <FiAirplay className='text-blue-400 light:text-[#1a1a2d] text-6xl' />
                            </AnimationOnScroll>
                            <div className='grid md:justify-items-center'>
                                <AnimationOnScroll animateIn='animate__slideInRight'>
                                    <h3 className='text-2xl font-semibold text-white pb-2 light:text-black md:text-center'>
                                        Entertainment
                                    </h3>
                                    <p className='md:text-center light:text-[#1a1a2d]'>
                                        You earn when you mine and watch videos
                                        on the website. You earn $1 on each Task
                                        you complete 24hrs/daily.
                                    </p>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className='grid grid-cols-[max-content,1fr] md:(flex flex-col items-center grid-cols-none) gap-5'>
                            <AnimationOnScroll animateIn='animate__slideInLeft'>
                                <GiTeamDowngrade className='text-blue-400 light:text-[#1a1a2d] text-6xl' />
                            </AnimationOnScroll>
                            <div className='grid md:justify-items-center'>
                                <AnimationOnScroll animateIn='animate__slideInRight'>
                                    <h3 className='text-2xl font-semibold text-white pb-2 light:text-black md:text-center'>
                                        Team Building
                                    </h3>
                                    <p className='md:text-center light:text-[#1a1a2d]'>
                                        Building a team of Networkers, while
                                        earning upto $20 minimum withdrawal
                                        threshold and above. This uses a matrix
                                        system of marketing and affiliation.
                                    </p>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative py-6 my-10'>
                <img
                    src='footer_crypto.jpeg'
                    alt=''
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        zIndex: 10,
                    }}
                    className='h-30'
                />
                <div className='absolute left-0 right-0 top-0 bottom-0 grid'>
                    <div
                        className='grid text-white justify-center justify-items-center items-center place-items-center py-2 px-4'
                        style={{
                            background:
                                'linear-gradient(to bottom, rgb(2 13 43 / 77%) 30%, #2c3981ab)',
                        }}
                    >
                        <div className='justify-items-center grid gap-2'>
                            <h1 className='font-bold'>
                                GET STARTED TODAY WITH
                            </h1>
                            <p className='font-bold'>1960TOKEN</p>
                        </div>
                        <p>Open an account today and start Mining!</p>
                        <Link href={'/auth/register'}>
                            <button className='bg-orange-300 text-[#1a1a2d] rounded px-2 py-1 justify-self-center text-sm uppercase'>
                                Register Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-around py-6 px-4 border-b'>
                <Link href={'https://www.facebook.com/1960token/'}>
                    <div>
                    
                    <BsFacebook className='cursor-pointer text-2xl text-blue-700' />
                    </div>
                </Link>
                <Link href={'https://t.me/Official1960Token'}>
                    <div>
                    <BsTelegram className='cursor-pointer text-2xl text-blue-400' />
                    </div>
                </Link>
                <Link
                    href={
                        'https://youtube.com/channel/UC7wWL-pB3MJ2DZzAUGNnMnw'
                    }
                >
                    <div>
                    <BsYoutube className='cursor-pointer text-2xl text-red-500' />
                    </div>
                </Link>
            </div>
            <div className='flex justify-around py-6 px-4 border-b border-b-gray-700 max-w-[40rem] mx-auto'>
                <Link href='/terms-and-conditions' className='cursor-pointer'>
                    Terms and Conditions
                </Link>
                <Link href='/privacy-policy' className='cursor-pointer'>
                    Privacy Policy
                </Link>
            </div>

            <div className='grid fixed right-0 bottom-20 m-2'>
                <a
                    href={`https://wa.me/+2347026936472`}
                    target='_blank'
                    className='grid justify-items-center'
                >
                    <RiWhatsappFill className='text-[#25D366] text-5xl' />
                    <span>Live Chat</span>
                </a>
            </div>
            <ins
                className='adsbygoogle'
                style={{display:'inlineBlock',width:'260px',height:'99px'}}
                data-ad-client='ca-pub-2898233620454044'
                data-ad-slot='7516150795'
            ></ins>
        </>
    )
}

export async function getServerSideProps() {
    try {
        await dbConnect()

        return {
            props: { isConnected: 'true' },
        }
    } catch (e) {
        return {
            props: { isConnected: 'false' },
        }
    }
}

export default Index
