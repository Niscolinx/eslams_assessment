import React, {useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { CircularProgress, Grid, TextField, Typography } from '@mui/material'

import axios from 'axios'
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
export default function LoginContainer() {
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
        setMessage(null)
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


        const updatedData = {
            ...handleInput,
        }


        setLoading(true)
        axios
            .post('/api/auth/login', updatedData)
            .then((data) => {
                setLoading(false)
               router.push('/')
            })
            .catch(({ response: { data } }) => {
                console.log({ data })
                setMessage({
                    message: data,
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
                    <div className='absolute -right-22 top-0'>
                        <img
                            src='/ball-icon.png'
                            className='animate-spin-slow w-40 h-40'
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

                    {message && message.type === 'error' && (
                        <p className='text-red-500 text-sm font-semibold text-center py-4'>
                            {message.message}
                        </p>
                    )}

                    
                    <div className='grid gap-4 mt-10'>
                        <form onSubmit={handleLogin}>
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
                                        validationError &&
                                        validationError['email']
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        validationError &&
                                        validationError['email']
                                            ? validationError['email']
                                            : false
                                    }
                                    variant='standard'
                                    onChange={setInput}
                                    className='login-input'
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
                                        className='login-input'
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
                            <button
                                className={`flex justify-self-center bg-[#1976d2] text-white my-3 rounded-lg py-1 px-5 border-none outline-none ${
                                    loading
                                        ? 'h-8 justify-center items-center w-25 '
                                        : ''
                                }`}
                                onClick={handleLogin}
                            >
                                {loading ? (
                                    <CircularProgress
                                        className=' flex justify-self-center'
                                        size={15}
                                        style={{ color: 'white' }}
                                    />
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </form>
                    </div>
                </Paper>
                <div className='grid justify-start'>
                    <a
                        href='/auth/register'
                        className='bg-white rounded-lg py-2 px-4 text-[#1976d2]'
                    >
                        Create Account
                    </a>
                </div>
            </Container>
        </ThemeProvider>
    )
}
