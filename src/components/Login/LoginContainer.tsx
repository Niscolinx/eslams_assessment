import React, { useContext, useMemo, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import OtpInput from 'react-otp-input'
import { CircularProgress, Grid, TextField } from '@mui/material'

import { AuthContext } from '../../pages/api/auth/authContext'
import axios from 'axios'
import dayjs from 'dayjs'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const theme = createTheme({
    typography: {
        fontFamily: ['Lato', 'Montserrat', 'sans-serif'].join(','),
    },
})

export type ValidationError = {
    email: string
    password: string
}

export type handleInputProps = {
    email: string

    password: string
}
export default function Checkout() {
    const [loading, setLoading] = useState(false)
    const [validationError, setValidationError] =
        useState<ValidationError | null>(null)
    const [handleInput, setHandleInput] = useState<handleInputProps>({
        email: '',
        password: '',
    })
    const [message, setMessage] = useState<{
        message: string
        type: string
    } | null>(null)

    const router = useRouter()

    const formValidate = () => {
        const errors = {} as ValidationError
        const isValidMail = (e: string, cb: (checkValid: boolean) => void) => {
            const emailRegex = new RegExp(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )

            const isValid = emailRegex.test(e)

            return cb(isValid)
        }

        for (const key in handleInput) {
            if (key === 'email') {
                isValidMail(handleInput[key], (cb) => {
                    if (!cb) {
                        errors[key] = 'Invalid email'

                        setValidationError(errors)
                    }
                })
            }

            if (key === 'password') {
                if (handleInput[key].length < 6) {
                    errors[key as keyof handleInputProps] =
                        'Password must be at least 6 characters long'

                    setValidationError(errors)
                }
            }

            if (
                handleInput[key as keyof handleInputProps] === '' ||
                handleInput[key as keyof handleInputProps] === null
            ) {
                errors[key as keyof handleInputProps] = 'This field is required'

                setValidationError(errors)
            }
        }

        if (Object.keys(errors).length > 0) {
            return false
        }

        return true
    }

    const setInput = (e: any) => {
        const { name, value } = e.target
        setValidationError(null)

        setHandleInput((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

   

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

         const isValid = formValidate()

         if (!isValid) {
             return
         } 
        
        setMessage(null)
        setLoading(true)

        const data = handleInput

        const updatedData = {
            ...data,
        }

        console.log('submit')

        setLoading(true)
        axios
            .post('/api/auth/login', updatedData)
            .then(({ data }) => {
                console.log({ data })
                setLoading(false)
                router.push('/')
            })
            .catch(({ response: { data } }) => {
                console.log({ data })
                const { message } = data
                setMessage({
                    message,
                    type: 'error',
                })
                setLoading(false)
            })
    }

    //From  here

    const [eyeIcon, setEyeIcon] = useState(false)

    const toggleEyeIcon = () => {
        setEyeIcon((prev) => !prev)

        let password = document.querySelector('#password') as HTMLInputElement

        if (password) {
            if (eyeIcon) {
                password.type = 'text'
            } else {
                password.type = 'password'
            }
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
                <CssBaseline />
                <Paper
                    variant='outlined'
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <div className='absolute -right-22  top-0'>
                        <img
                            src='/ball-icon.png'
                            width='170px'
                            height='170px'
                            className='animate-spin-slow'
                        />
                    </div>
                    <Typography
                        component='h2'
                        variant='h4'
                        align='center'
                        className='font-semibold'
                    >
                        Welcome Back
                    </Typography>

                    {/* <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper> */}
                    <div className='grid gap-4 mt-10'>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id='email'
                                name='email'
                                type='email'
                                fullWidth
                                label='Email Address'
                                value={handleInput.email}
                                error={
                                    validationError && validationError['email']
                                        ? true
                                        : false
                                }
                                helperText={
                                    validationError && validationError['email']
                                        ? validationError['email']
                                        : false
                                }
                                variant='standard'
                                onChange={setInput}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='flex items-center relative'>
                                <TextField
                                    required
                                    id='password'
                                    name='password'
                                    label='Password'
                                    type='password'
                                    variant='standard'
                                    fullWidth
                                    value={handleInput.password}
                                    error={
                                        validationError &&
                                        validationError['password']
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        validationError &&
                                        validationError['password']
                                            ? validationError['password']
                                            : false
                                    }
                                    onChange={setInput}
                                />
                                {
                                    <span className='cursor-pointer absolute grid self-start justify-self-center right-5 bottom-2'>
                                        {eyeIcon ? (
                                            <AiOutlineEyeInvisible
                                                onClick={toggleEyeIcon}
                                            />
                                        ) : (
                                            <AiOutlineEye
                                                onClick={toggleEyeIcon}
                                            />
                                        )}
                                    </span>
                                }
                            </div>
                        </Grid>
                        <Button
                            className='flex justify-self-center bg-[#1976d2] text-white my-3'
                            onClick={handleLogin}
                        >
                            {loading ? (
                                <CircularProgress
                                    className='text-white flex justify-self-center'
                                    size={20}
                                />
                            ) : (
                                'Login'
                            )}
                        </Button>
                    </div>
                </Paper>
                {/* <Copyright /> */}
            </Container>
        </ThemeProvider>
    )
}
