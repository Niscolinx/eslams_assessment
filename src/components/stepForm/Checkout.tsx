import React, { useMemo, useState } from 'react'
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
import { CircularProgress } from '@mui/material'

import PersonalDetails from './PersonalDetails'
import GuardianOrParent from './GuardianOrParent'
import Education from './Education'

import { AuthContext } from '../../pages/api/auth/authContext'
import axios from 'axios'
import dayjs from 'dayjs'

const steps = ['Personal details', 'Guardian/Parent', 'Education']

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <PersonalDetails />
        case 1:
            return <GuardianOrParent />
        case 2:
            return <Education />
        default:
            throw new Error('Unknown step')
    }
}

const theme = createTheme({
    typography: {
        fontFamily: ['Lato', 'Montserrat', 'sans-serif'].join(','),
    },
})

export type ValidationError = { [key: string]: string }

export type handleInputProps = {
    firstName: string
    lastName: string
    personalEmail: string
    password: string
    phoneNumber: string
    gender: string
    guardianEmail: string
    guardianPhoneNumber: string
    guardianName: string
    guardianRelationship: string
    institutionName: string
    institutionType: string
    institutionYearOfStudy: string
    birthDate: Date | null
}
export default function Checkout() {
    const [otp, setOtp] = useState<string>('')
    const [keepOtp, setKeepOtp] = useState<string[]>([])
    const [activeStep, setActiveStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const [validationError, setValidationError] =
        useState<ValidationError | null>(null)
    const [handleInput, setHandleInput] = useState<handleInputProps>({
        firstName: '',
        lastName: '',
        personalEmail: '',
        phoneNumber: '',
        password: '',
        birthDate: null,
        gender: '',
        guardianEmail: '',
        guardianPhoneNumber: '',
        guardianName: '',
        guardianRelationship: '',
        institutionName: '',
        institutionType: '',
        institutionYearOfStudy: '',
    })
    const [isOtpLengthInValid, setIsOtpLengthInValid] = useState(false)

    const formValidate = () => {
        const errors = {} as ValidationError
        const isValidMail = (e: string, cb: (checkValid: boolean) => void) => {
            const emailRegex = new RegExp(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )

            const isValid = emailRegex.test(e)

            return cb(isValid)
        }

        let count = 0

        for (const key in handleInput) {
            count++

            //Validation for the first step

            if (activeStep === 0 && count < 8) {
                if (key === 'personalEmail') {
                    isValidMail(handleInput[key], (cb) => {
                        if (!cb) {
                            errors[key] = 'Invalid email'

                            setValidationError(errors)
                        }
                    })
                }

                if (key === 'lastName' || key === 'firstName') {
                    if (handleInput[key].length < 3) {
                        errors[key as keyof handleInputProps] =
                            'This field must be at least 3 characters long'

                        setValidationError(errors)
                    }
                }

                if (key === 'password') {
                    if (handleInput[key].length < 6) {
                        errors[key as keyof handleInputProps] =
                            'Password must be at least 6 characters long'

                        setValidationError(errors)
                    }
                }

                if (key === 'phoneNumber') {
                    if (handleInput[key].length < 10) {
                        errors[key as keyof handleInputProps] =
                            'Phone number not valid'

                        setValidationError(errors)
                    }
                }
                if (key === 'birthDate') {
                    if (!dayjs(handleInput[key]).isValid()) {
                        errors[key as keyof handleInputProps] = 'Invalid Date'

                        setValidationError(errors)
                    }
                }

                if (
                    handleInput[key as keyof handleInputProps] === '' ||
                    handleInput[key as keyof handleInputProps] === null
                ) {
                    errors[key as keyof handleInputProps] =
                        'This field is required'

                    setValidationError(errors)
                }
            } else if (activeStep === 1 && count > 7 && count < 12) {
                if (key === 'guardianEmail') {
                    isValidMail(handleInput[key], (cb) => {
                        if (!cb) {
                            errors[key] = 'Invalid email'

                            setValidationError(errors)
                        }
                    })
                }

                if (key === 'guardianName') {
                    if (handleInput[key].length < 3) {
                        errors[key as keyof handleInputProps] =
                            'This field must be at least 3 characters long'

                        setValidationError(errors)
                    }
                }

                if (key === 'guardianPhoneNumber') {
                    if (handleInput[key].length < 10) {
                        errors[key as keyof handleInputProps] =
                            'Phone number not valid'

                        setValidationError(errors)
                    }
                }

                if (
                    handleInput[key as keyof handleInputProps] === '' ||
                    handleInput[key as keyof handleInputProps] === null
                ) {
                    errors[key as keyof handleInputProps] =
                        'This field is required'

                    setValidationError(errors)
                }
            } else if (activeStep === 2 && count > 11) {
                if (
                    handleInput[key as keyof handleInputProps] === '' ||
                    handleInput[key as keyof handleInputProps] === null
                ) {
                    errors[key as keyof handleInputProps] =
                        'This field is required'

                    setValidationError(errors)
                }
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

    const handleNext = () => {
        const isValid = formValidate()

        //setActiveStep(activeStep + 1)

        if (!isValid) {
            return
        } else if (isValid) {
            setActiveStep(activeStep + 1)

            if (activeStep === 2) {
                setActiveStep(activeStep + 1)

                const { firstName, lastName, personalEmail } =
                    handleInput

                const sendOtp = async () => {
                    try {
                        console.log('sending otp...')
                        const { data } = await axios.post('/api/auth/sendOtp', {
                            firstName,
                            lastName,
                            personalEmail,
                        })
                        console.log(data)
                    } catch (err) {
                        return console.log({ err })
                    }
                }
                sendOtp()
                    
            }

            
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const nextButton = (
        <span className='flex items-center gap-3'>
            Next <HiOutlineArrowNarrowRight />
        </span>
    )

    const otpHandler = (input: string) => {
        console.log({input})
        setOtp(input)
        setKeepOtp((singleOtp) => [input])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('otp length', otp.length)

        if(otp.length < 6){
            console.log('Invalid otp')
            setIsOtpLengthInValid(true)
        }
        if(otp.length < 6){
            return
        }

        setIsOtpLengthInValid(false)

        console.log("otp is valid", isOtpLengthInValid)
       

        const data = handleInput

        const updatedData = {
            ...data,
            birthDate: data.birthDate!.toISOString(),
        }

        console.log('submit')

        setLoading(true)
        axios
            .post('/api/auth/register', updatedData)
            .then((res) => {
                console.log(res)
                setLoading(false)
            })
            .catch((err) => {
                console.log({ err })
                setLoading(false)
            })
    }

    const authContext = useMemo(() => {
        return {
            handleInput,
            setHandleInput,
            setInput,

            validationError,
        }
    }, [validationError, handleInput, setInput])

    console.log({isOtpLengthInValid})

    return (
        <AuthContext.Provider value={authContext}>
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
                            Get Started with eslams
                        </Typography>
                        <Typography component='p' align='center'>
                            Create an account and step into greatness
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    {/* <Typography variant='h5' gutterBottom>
                                    Type in the 6-digit code you received in
                                    your Email
                                </Typography> */}
                                    <Typography variant='subtitle1'>
                                        <form
                                            className='grid w-full place-content-stretch md:w-3/4 md:mx-auto'
                                            onSubmit={handleSubmit}
                                        >
                                            <h2 className='font-black text-center text-black mb-2 text-xl'>
                                                Type in the 6-digit code you
                                                received in your Email{' '}
                                            </h2>

                                            <OtpInput
                                                value={otp}
                                                onChange={otpHandler}
                                                numInputs={6}
                                                inputStyle='pinlogin-field'
                                                containerStyle='pinlogin'
                                                shouldAutoFocus
                                                isInputNum
                                            />

                                            <button
                                                className=' rounded-3xl outline-none  bg-[#1776d1] text-white text-lg py-2 mt-10 grid justify-self-center w-2/5 disabled:(bg-gray-500 opacity-40)'
                                                type='submit'
                                                disabled={isOtpLengthInValid}
                                            >
                                                {loading ? (
                                                    <CircularProgress
                                                        className='text-white flex justify-self-center'
                                                        size={20}
                                                    />
                                                ) : (
                                                    'Confirm'
                                                )}
                                            </button>
                                        </form>
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        {activeStep !== 0 && (
                                            <Button
                                                onClick={handleBack}
                                                sx={{ mt: 3, ml: 1 }}
                                            >
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant='contained'
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Next'
                                                : nextButton}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                    {/* <Copyright /> */}
                </Container>
            </ThemeProvider>
        </AuthContext.Provider>
    )
}
