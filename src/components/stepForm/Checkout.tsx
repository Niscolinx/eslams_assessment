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

export default function Checkout() {
    const [value, setValue] = React.useState<Date | null>(null)
    const [otp, setOtp] = useState<string>('')
    const [keepOtp, setKeepOtp] = useState<string[]>([])
    const [activeStep, setActiveStep] = useState(0)
    const [loading, setLoading] = useState(false)

    const [handleInput, setHandleInput] = useState<any>({
        firstName: '',
        lastName: '',
        personalEmail: '',
        phoneNumber: '',
        password: '',
        gender: '',
        guardianEmail: '',
        guardianPhoneNumber: '',
        guardianName: '',
        guardianRelationship: '',
        institutionName: '',
        institutionType: '',
        institutionYearOfStudy: '',
    })

    const [birthDate, setBirthDate] = useState<Date | null>(null)

    console.log(birthDate?.toLocaleString())

    const [error, setError] = useState(true)
    const [validationError, setValidationError] = useState<ValidationError>({
        key: ['hewll', 'ads'],
        message: {
            hewll: 'asdasd',
            ads: 'asdasd',
        },
    })

    type ValidationError = { key: string[]; message: { [key: string]: string } }

    const formValidate = () => {
        const isValidMail = (e: string): Boolean => {
            const emailRegex = new RegExp(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )

            const isValid = emailRegex.test(e)

            return isValid
        }
    }

    const setInput = (e: any) => {
        console.log(e)

        console.log({ e })
        const { name, value } = e.target

        console.log({ name, value })

        setHandleInput((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    console.log({ handleInput })

    const handleNext = () => {
        formValidate()

        //if(){}

        //setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const nextButton = (
        <span className='flex items-center gap-3'>
            Next <HiOutlineArrowNarrowRight />
        </span>
    )

    const inputHandler = (input: string) => {
        setOtp(input)
        setKeepOtp((singleOtp) => [input])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // const data = {
        //     gender,
        //     lastName,
        //     personalEmail,
        //     password,
        //     phoneNumber,
        //     birthDate,
        //     guardianEmail,
        //     guardianName,
        //     guardianPhoneNumber,
        //     guardianRelationship,
        //     institutionName,
        //     institutionType,
        //     institutionYearOfStudy,
        // }

        console.log('submit')

        setLoading(true)
        axios
            .post('/api/auth/register', {})
            .then((res) => {
                console.log(res)
                setLoading(false)
            })
            .catch((err) => {
                console.log({ err })
                setLoading(false)
            })
    }

    const navContext = useMemo(() => {
        return {
            handleInput,
            setHandleInput,
            setInput,
            setBirthDate,
            value,
            setValue,
            validationError,
        }
    }, [validationError])

    return (
        <AuthContext.Provider value={navContext}>
            <ThemeProvider theme={theme}>
                {/* <AppBar
                position='absolute'
                color='default'
                elevation={0}
                sx={{
                    position: 'relative'
                   
                }}
            >
                <Toolbar>
                    <Typography variant='h6' color='inherit' noWrap>
                    Company name
                    </Typography>
                </Toolbar> 
            </AppBar> */}

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
                                                onChange={inputHandler}
                                                numInputs={6}
                                                inputStyle='pinlogin-field'
                                                containerStyle='pinlogin'
                                                shouldAutoFocus
                                                isInputNum
                                            />

                                            <button
                                                className=' rounded-3xl outline-none  bg-[#1776d1] text-white text-lg py-2 mt-10 grid justify-self-center w-2/5'
                                                type='submit'
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
