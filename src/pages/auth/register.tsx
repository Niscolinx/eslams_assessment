import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import HeroImg2 from '../../../public/hero-player.png'
import Checkout, { ValidationError } from '../../components/stepForm/RegisterForm'
import Tilt from 'react-parallax-tilt'
import dayjs from 'dayjs'
import router from 'next/router'

const Register = () => {
    const [loginInput, setLoginInput] = useState<{
        email: string
        password: string
    }>({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)

    const [validationErrors, setValidationErrors] =
        useState<ValidationError | null>()

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

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValidationErrors(null)

        setLoginInput((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const formValidate = () => {
        const errors = {} as ValidationError
        const isValidMail = (e: string, cb: (checkValid: boolean) => void) => {
            const emailRegex = new RegExp(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )

            const isValid = emailRegex.test(e)

            return cb(isValid)
        }

        for (const key in loginInput) {
            //Validation for the first step

            if (key === 'email') {
                isValidMail(loginInput[key], (cb) => {
                    if (!cb) {
                        errors[key] = 'Invalid email'

                        setValidationErrors(errors)
                    }
                })
            }

            if (key === 'password') {
                if (loginInput[key].length < 6) {
                    errors[key as keyof typeof loginInput] =
                        'Password must be at least 6 characters long'

                    setValidationErrors(errors)
                }
            }

            if (
                loginInput[key as keyof typeof loginInput] === '' ||
                loginInput[key as keyof typeof loginInput] === null
            ) {
                errors[key as keyof typeof loginInput] =
                    'This field is required'

                setValidationErrors(errors)
            }
        }

        if (Object.keys(errors).length > 0) {
            return false
        }

        return true
    }


    const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit')
        const isValid = formValidate()

        setLoading(true)

        if (!isValid) {
            setLoading(false)
            return
        }


        setLoading(true)
        axios
            .post('/api/auth/login', loginInput)
            .then(({ data }) => {
                console.log({ data })
                setLoading(false)
                router.push('/')
            })
            .catch(({ response: { data } }) => {
                console.log({ data })
             
               
                setLoading(false)
            })
        
    }

    return (
        <div className='register relative'>
            <header className='register__header'>
                <div className='flex'>
                    <p className=' text-3xl md:text-[46px] font-medium text-[#E8E7E7] register__header--logo'>
                        eslams
                    </p>
                </div>

                <form
                    className='register__header--form hidden'
                    onSubmit={loginSubmitHandler}
                >
                    <div className='header__form--item'>
                        <label
                            htmlFor='email'
                            className='text-[#E8E7E7] text-sm'
                        >
                            Email
                        </label>

                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={loginInput['email']}
                            onChange={inputHandler}
                            className={` rounded-lg px-2 py-1 bg-[#E8E7E7] border outline-none ${
                                validationErrors && validationErrors['email']
                                    ? 'border-width-[2px] border-red-500  animate-shakeX transition-all animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-duration-[1s]'
                                    : ''
                            }`}
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
                            type='password'
                            name='password'
                            id='password'
                            value={loginInput['password']}
                            onChange={inputHandler}
                            className={` rounded-lg px-2 py-1 bg-[#E8E7E7] border outline-none ${
                                validationErrors && validationErrors['password']
                                    ? 'border-width-[2px] border-red-500  animate-shakeX transition-all animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-duration-[1s]'
                                    : ''
                            }`}
                        />

                        <Link href='/'>
                            <a className='text-[#E8E7E7]  text-sm'>
                                Forgot Password?
                            </a>
                        </Link>
                    </div>

                    <button
                        className='bg-black text-[#E8E7E7] py-1 px-6 justify-self-center self-center rounded-lg'
                        type='submit'
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
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
