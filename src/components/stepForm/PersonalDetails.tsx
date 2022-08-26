import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
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


    const {personalEmail, setPersonalEmail, lastName, setLastName, phoneNumber, setPhoneNumber, gender, setGender, birthDate, setBirthDate, password, setPassword, setInput, handleInput} = useContext(AuthContext)


    const toggleEyeIcon = () => {
        setEyeIcon((prev) => !prev)

        let password = document.querySelector('#password') as HTMLInputElement

        if (password) {
            console.log({ password })
            if (eyeIcon) {
                password.type = 'text'
            } else {
                password.type = 'password'
            }
        }
    }

    

    // if (key === 'email') {
    //     const checkEmail = isValidMail(value.toString())

    //     if (!checkEmail) {
           
    //     }
    // }


    return (
        <React.Fragment>
            {/* <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='firstName'
                        name='firstName'
                        label='First name'
                        fullWidth
                        autoComplete='given-name'
                        variant='standard'
                        value={handleInput['firstName']}
                        error
                        helperText='Please enter your first name'
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
                        autoComplete='family-name'
                        variant='standard'
                        value={handleInput.lastName}
                       // onChange={setInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='email'
                        name='email'
                        type='email'
                        label='Email Address'
                        fullWidth
                        variant='standard'
                        value={personalEmail}
                        onChange={(e) => setPersonalEmail(e.target.value)}
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
                            variant='standard'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
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
                        // helperText='Enter phone number'
                        // InputLabelProps={{ shrink: true, focused: true }}
                        placeholder='Phone Number'
                        defaultCountry={'us'}
                        variant='standard'
                        value={phoneNumber}
                        label='Phone Number'
                        fullWidth
                        onChange={(e: any) => setPhoneNumber(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label='Date of Birth'
                            value={birthDate}
                            //minDate={new Date('2017-01-01')}
                            onChange={(newDate) => {
                                setBirthDate(newDate)
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant='standard'
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
                            name='controlled-radio-buttons-group'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
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
