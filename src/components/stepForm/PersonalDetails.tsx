import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { FormControl, FormLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import MuiPhoneNumber from 'material-ui-phone-number'
import { AuthContext } from '../../pages/api/auth/authContext'

export default function PersonalDetails() {
    const [eyeIcon, setEyeIcon] = useState(false)

    const { setInput, handleInput, validationError } =
        useContext(AuthContext)

    const [dateValue, setDateValue] = useState<Date | null>(null)

    console.log({ validationError })
    console.log({handleInput})

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

    const handleDateChange = (e: Date | null) => {
        setDateValue(e)
        setInput({
            target: {
                name: 'birthDate',
                e,
            },
        })
    }



    return (
        <React.Fragment>
            {/* <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                   
                        id='firstName'
                        name='firstName'
                        type='text'
                        label='First name'
                        fullWidth
                        error={
                            validationError && validationError['firstName']
                                ? true
                                : false
                        }
                        autoComplete='given-name'
                        variant='standard'
                        helperText={
                            validationError && validationError['firstName']
                                ? validationError['firstName']
                                : false
                        }
                        onError={(e) => {
                            console.log(e)
                        }}
                        onChange={setInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='lastName'
                        name='lastName'
                        label='Last name'
                        fullWidth
                        error={
                            validationError && validationError['lastName']
                                ? true
                                : false
                        }
                        helperText={
                            validationError && validationError['lastName']
                                ? validationError['lastName']
                                : false
                        }
                        variant='standard'
                        onChange={setInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='email'
                        name='personalEmail'
                        type='email'
                        label='Email Address'
                        fullWidth
                        error={
                            validationError && validationError['personalEmail']
                                ? true
                                : false
                        }
                        helperText={
                            validationError && validationError['personalEmail']
                                ? validationError['personalEmail']
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
                            fullWidth
                            error={
                                validationError && validationError['password']
                                    ? true
                                    : false
                            }
                            helperText={
                                validationError && validationError['password']
                                    ? validationError['password']
                                    : false
                            }
                            variant='standard'
                            onChange={setInput}
                        />
                        {
                            <span className='cursor-pointer absolute grid self-start justify-self-center right-5 bottom-2'>
                                {eyeIcon ? (
                                    <AiOutlineEyeInvisible
                                        onClick={toggleEyeIcon}
                                    />
                                ) : (
                                    <AiOutlineEye onClick={toggleEyeIcon} />
                                )}
                            </span>
                        }
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPhoneNumber
                        id='phone-number'
                        autoFocus={true}
                        name='phoneNumber'
                        // helperText='Enter phone number'
                        // InputLabelProps={{ shrink: true, focused: true }}
                        placeholder='Phone Number'
                        defaultCountry={'us'}
                        variant='standard'
                        label='Phone Number'
                        fullWidth
                        error={
                            validationError && validationError['phoneNumber']
                                ? true
                                : false
                        }
                        helperText={
                            validationError && validationError['phoneNumber']
                                ? validationError['phoneNumber']
                                : false
                        }
                        onChange={(value) =>
                            setInput({
                                target: {
                                    name: 'phoneNumber',
                                    value,
                                },
                            })
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label='Date of Birth'
                            value={dateValue}
                            onChange={handleDateChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name='birthDate'
                                    fullWidth
                                    variant='standard'
                                    error={
                                        validationError &&
                                        validationError['birthDate']
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        validationError &&
                                        validationError['birthDate']
                                            ? validationError['birthDate']
                                            : false
                                    }
                                    required
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <FormLabel id='demo-controlled-radio-buttons-group'>
                            Gender
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby='demo-controlled-radio-buttons-group'
                            name='gender'
                            onChange={setInput}
                            defaultChecked={true}
                        >
                            <FormControlLabel
                                value='male'
                                control={<Radio />}
                                label='Male'
                            />
                            <FormControlLabel
                                value='female'
                                control={<Radio />}
                                label='Female'
                            />
                            <FormControlLabel
                                value='prefer not to say'
                                control={<Radio />}
                                label='Prefer not to say'
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
