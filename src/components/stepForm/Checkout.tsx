import * as React from 'react'
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

import PersonalDetails from './PersonalDetails'
import GuardianOrParent from './GuardianOrParent'
import Education from './Education'

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='/'>
                Eslams
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

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
        fontFamily: [
            'Lato',
            'Montserrat',
            'sans-serif',
        ].join(','),
    },
})

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0)

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const nextButton = (
        <span className='flex items-center gap-3'>
            Next <HiOutlineArrowNarrowRight />
        </span>
    )

    return (
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
                                <Typography variant='h5' gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Your order number is #2001539. We have
                                    emailed your order confirmation, and will
                                    send you an update when your order has
                                    shipped.
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
                                            ? 'Place order'
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
    )
}
