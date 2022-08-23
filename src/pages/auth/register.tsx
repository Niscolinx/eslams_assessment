import React, { useState } from 'react'
import axios from 'axios'
import { CtxOrReq } from 'next-auth/client/_utils'
import { getCsrfToken, getProviders, signIn } from 'next-auth/react'
import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import HeroImg2 from '../../../public/hero-player.png'
import Checkout from '../../components/stepForm/Checkout'

interface LoginProps {
    csrfToken: string
    providers: {
        [key: string]: {
            id: string
            name: string
        }
    }
}

const Register = ({ providers }: LoginProps) => {
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

    const isValidMail = (e: string): Boolean => {
        const emailRegex = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

        const isValid = emailRegex.test(e)

        return isValid
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        if (
            emailOrUsername.toLowerCase() === 'admin@1960token.com' ||
            emailOrUsername.toLowerCase() === 'admin'
        ) {
            // admin login
            //send an axios post request to the server
            return axios
                .post('/api/auth/login', {
                    admin: true,
                    emailOrUsername: emailOrUsername.toLowerCase(),
                    password,
                })
                .then((res) => {
                    console.log('res', res.data)
                    setLoading(false)

                    Router.push('/adminDashboard')
                })
                .catch((err) => {
                    setLoading(false)
                    console.log('err', err)
                    setError(true)
                    setMessage({
                        value: 'Login Failed',
                        type: 'error',
                        style: 'text-red-500',
                    })
                    setMessageDisplay('block')
                })
        }

        const formData = new FormData(e.currentTarget)

        let isError = false
        for (let [key, value] of formData.entries()) {
            if (!value) {
                isError = true
                setMessage({
                    value: "Value can't be empty",
                    type: 'error',
                    style: 'text-red-500',
                })
                setErrorFields((oldArr) => [...oldArr, key])
                setMessageDisplay('block')
                setLoading(false)
            } else if (!isError) {
                console.log('sign in.....', isError)
                signIn('credentials', {
                    redirect: false,
                    emailOrUsername: emailOrUsername.toLowerCase().trim(),
                    password: password,
                }).then((data: any) => {
                    console.log('data returned', data)
                    setLoading(false)

                    if (data.error) {
                        setError(true)
                        setLoading(false)
                        setMessage({
                            value: 'Invalid User',
                            type: 'error',
                            style: 'text-red-500',
                        })
                        setMessageDisplay('block')
                        return
                    }
                    Router.push('/dashboard')
                })
            }
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorFields([])
        setMessageDisplay('hidden')
        const { name, value } = e.target

        switch (name) {
            case 'emailOrUsername':
                setEmailOrUsername(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                ''
                break
        }
    }

    return (
        <div className='register relative'>
            <header className='absolute top-0 left-0 right-0 z-4 register__header py-3 px-2 flex justify-between'>
                <div className='flex'>
                    <p className='text-[46px] font-medium text-white'>eslams</p>
                </div>

                <div className='header__form'>
                    <form className='flex gap-5'>
                        <div className='grid'>
                            <label htmlFor='email' className='text-white'>
                                Email
                            </label>

                            <input type='text' name='email' id='email' />
                        </div>
                        <div className='grid'>
                            <label htmlFor='email' className='text-white'>
                                Password
                            </label>

                            <input type='text' name='email' id='email' />
                        </div>
                    </form>
                </div>
            </header>

            <div className='grid md:(grid-cols-16) relative'>
                <div className='register__overlay'></div>
                <div className='section-1 relative'>
                    <div className='flex section-1__container relative z-2 mt-[7rem]'>
                        <Image
                            src='/hero-player.png'
                            width='433px'
                            height='461px'
                        />
                    </div>
                    <div className='grid'>
                        <p>Learn Through Practice</p>
                        <p>Compete and Win Rewards</p>
                        <p>Find and Register for Competitions</p>
                    </div>

                    <h1 className='heroText text-[22px] md:text-[5rem] absolute top-[6rem] left-[2rem] absolute uppercase'>
                        Shoot for the <span className='ml-10'>stars</span>
                    </h1>

                    <div className='section-1__overLay'></div>
                </div>

                <div className='w-full md:(grid) relative mt-20 register__form z-4'>
                    <Checkout />
                </div>
                <div className='section-signup'></div>
            </div>
        </div>
    )
}

export default Register

export async function getServerSideProps(context: CtxOrReq | undefined) {
    const csrfToken = await getCsrfToken(context)
    const providers = await getProviders()

    return {
        props: {
            csrfToken,
            providers,
        },
    }
}
