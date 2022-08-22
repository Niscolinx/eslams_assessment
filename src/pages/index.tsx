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
import { GetSessionParams, getSession } from 'next-auth/react'

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

    

    

    return (
        <>
           
        </>
    )
}

export default Index

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

