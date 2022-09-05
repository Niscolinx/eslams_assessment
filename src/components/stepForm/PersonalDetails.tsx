import React, { useContext, useEffect, useMemo } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { FormControl, FormLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import MuiPhoneNumber from 'material-ui-phone-number'
import { AuthContext } from '../../pages/api/auth/authContext'

export default function PersonalDetails() {
    const [eyeIcon, setEyeIcon] = useState(false)

    const { setInput, handleInput, validationError } =
        useContext(AuthContext)


    const toggleEyeIcon = () => {
        setEyeIcon((prev) => !prev)
        
    }

    const handleDateChange = (e: Date | null) => {
        setInput({
            target: {
                name: 'birthDate',
                value:e,
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
                        variant='standard'
                        value={handleInput.firstName}
                        error={
                            validationError && validationError['firstName']
                                ? true
                                : false
                        }
                        helperText={
                            validationError && validationError['firstName']
                                ? validationError['firstName']
                                : false
                        }
                       
                        onChange={setInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='lastName'
                        name='lastName'
                        label='Last name'
                        value={handleInput.lastName}
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
                        value={handleInput.personalEmail}
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
                            type={eyeIcon ? 'text' : 'password'}
                            variant='standard'
                            fullWidth
                            value={handleInput.password}
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
                        value={handleInput.phoneNumber}
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
                            value={handleInput.birthDate}
                            
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
                            value={handleInput.gender}
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
                            {validationError && validationError['gender']
                                ? <span className='text-xs text-red-600'>{validationError['gender']}</span>
                                : null}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
