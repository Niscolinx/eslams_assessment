import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CtxOrReq } from 'next-auth/client/_utils'
import { getCsrfToken, getProviders, signIn } from 'next-auth/react'
import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import HeroImg2 from '../../../public/hero-player.png'
import Checkout from '../../components/stepForm/Checkout'



const Register = () => {
    type message = { value: string; type?: string; style?: string }

    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorFields, setErrorFields] = useState<string[]>([])
    const [error, setError] = useState(false)
    const [message, setMessage] = useState<message>({
        value: 'invalid Entries',
        type: 'error',
        style: 'text-red-500',
    })
    const [messageDisplay, setMessageDisplay] = useState('hidden')

    

    useEffect(() => {

        const image = document.querySelector('.main-1__image') as HTMLImageElement
        const container = document.querySelector('.register__main') as HTMLDivElement


    

        console.log({image, container})

        container.addEventListener('mousemove', (e) => {


            const X = e.clientX - e.screenX
            const Y = e.clientY - e.screenY


            //console.log({X, Y})

           // image.style.transform = `translate(${X}px, ${Y}px)`
        })


        // return () => {
        //     container.removeEventListener('mousemove', () => {
        //         console.log('removed')
        //     })
        // }


        //image.style.transform = `translateX(-30rem)`

    }, [])
    

    return (
        <div className='register relative'>
            <header className='register__header'>
                <div className='flex'>
                    <p className=' text-3xl md:text-[46px] font-medium text-[#E8E7E7] register__header--logo'>
                        eslams
                    </p>
                </div>

                <form className=' register__header--form'>
                    <div className='header__form--item'>
                        <label
                            htmlFor='email'
                            className='text-[#E8E7E7] text-sm'
                        >
                            Email
                        </label>

                        <input
                            type='text'
                            name='email'
                            id='email'
                            className='border-none outline-none rounded-lg px-2 py-1 bg-[#E8E7E7]'
                        />
                    </div>
                    <div className='header__form--item'>
                        <label
                            htmlFor='email'
                            className='text-[#E8E7E7] text-sm'
                        >
                            Password
                        </label>

                        <input
                            type='text'
                            name='email'
                            id='email'
                            className='border-none outline-none rounded-lg px-2 py-1 bg-[#E8E7E7]'
                        />

                        <Link href='/'>
                            <a className='text-[#E8E7E7]  text-sm'>
                                Forgot Password?
                            </a>
                        </Link>
                    </div>

                    <button className='bg-black text-[#E8E7E7] py-1 px-6 justify-self-center self-center'>
                        Login
                    </button>
                </form>
            </header>

            <div className='register__main'>
                <div className='grid absolute top-50 left-0 bg-[#1776d1] opacity-40 z-2 w-[200px] h-[150px]'></div>

                <div className='register__overlay z-3 md:(max-w-[433px])'></div>
                <div className='main-1 relative'>
                    <div className='flex main-1__container relative z-5 mt-[9.5rem]'>
                        <Image
                            src='/hero-player.png'
                            width='433px'
                            height='461px'
                            objectFit='contain'
                            className='main-1__image'
                        />
                    </div>
                    <div className='grid gap-2 main-1__points'>
                        <p className='main-1__points--item'>
                            Learn Through Practice
                        </p>
                        <p className='main-1__points--item'>
                            Compete and Win Rewards
                        </p>
                        <p className='main-1__points--item'>
                            Find and Register for Competitions
                        </p>
                    </div>

                    <h1 className='heroText absolute top-[8rem] left-[3.5rem] absolute uppercase z-4'>
                        Shoot for the <span className='ml-10'>stars</span>
                    </h1>

                    <div className='main-1__overLay'></div>
                </div>

                <div className='mx-auto w-full md:(grid) relative mt-30 register__form z-4'>
                    <Checkout />
                </div>
                <div className='main-signup'></div>
            </div>
            <div className='register__tag'>
                <h3 className='text-2xl'>
                    online competition platform for every student,
                    <span className='register__tag--rubik'>everywhere</span>
                </h3>
            </div>
        </div>
    )
}

export default Register

