import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CtxOrReq } from 'next-auth/client/_utils'
import { getCsrfToken, getProviders, signIn } from 'next-auth/react'
import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import HeroImg2 from '../../../public/hero-player.png'
import Tilt from 'react-parallax-tilt'
import LoginContainer from '../../components/Login/LoginContainer'

const Login = () => {
    useEffect(() => {
        axios
            .get('/api/connectDB')
            .then((res) => {
                console.log('connected')
            })
            .catch((err) => {
                console.log('not connected')
            })
    }, [])

    // useEffect(() => {
    //     const image = document.querySelector(
    //         '.main-1__image'
    //     ) as HTMLImageElement
    //     const container = document.querySelector(
    //         '.register__main'
    //     ) as HTMLDivElement

    //     console.log({ image, container })

    //     container.addEventListener('mousemove', (e) => {
    //         const X = e.clientX - e.screenX
    //         const Y = e.clientY - e.screenY

    //         console.log({ X, Y })

    //         //image.style.transform = `translate(${X}px, ${Y}px)`
    //     })
    // }, [])

    return (
        <div className='register relative grid h-screen overflow-hidden max-w-[1450px] mx-auto'>
            <header className='register__header'>
                <div className='flex'>
                    <p className=' text-3xl md:text-[46px] font-medium text-[#E8E7E7] register__header--logo'>
                        eslams
                    </p>
                </div>

               
            </header>

            <div className='register__main'>
                <div className='grid absolute top-50 left-0 bg-[#1776d1] opacity-40 z-2 w-[200px] h-[150px]'></div>

                <div className=''>
                    <div className='register__overlay z-3 md:(max-w-[433px])'></div>
                    <div className='main-1 relative'>
                        <Tilt
                            gyroscope
                            className=' z-20 w-[70vw] absolute'
                            tiltReverse
                            trackOnWindow
                        >
                            <div className='flex main-1__container z-5 mt-[9.5rem] relative'>
                                <Image
                                    src='/hero-player.png'
                                    width='433px'
                                    height='461px'
                                    objectFit='contain'
                                    className='main-1__image'
                                />
                            </div>
                            <div className='grid gap-2 main-1__points w-max content-center'>
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
                                Shoot for the{' '}
                                <span className='ml-10'>stars</span>
                            </h1>

                            <div className='main-1__overLay'></div>
                        </Tilt>
                    </div>
                </div>
                <div className='mx-auto w-full md:(grid) relative mt-30 register__form z-30 md: mx-0 ml-auto'>
                    <LoginContainer />
                </div>
                <div className='main-signup'></div>
            </div>
            {/* <div className='register__tag self-end'>
                <h3 className='text-2xl'>
                    online competition platform for every student,
                    <span className='register__tag--rubik'>everywhere</span>
                </h3>
            </div> */}
        </div>
    )
}

export default Login
