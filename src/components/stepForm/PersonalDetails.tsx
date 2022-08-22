import * as React from 'react'
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

export default function PersonalDetails() {
    const [gender, setGender] = useState('male')

    const [value, setValue] = useState<Date | null>(null)

    const handleChange = (newValue: Date | null) => {
        setValue(newValue)
    }

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
                        autoComplete='email address'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        fullWidth
                        autoComplete='password'
                        variant='standard'
                        
                    />
                    <AiOutlineEyeInvisible/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='mobileNumber'
                        name='mobileNumber'
                        label='mobile Number'
                        fullWidth
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                        
                            label='Date of Birth'
                            value={value}
                            minDate={new Date('2017-01-01')}
                            onChange={(newValue) => {
                                setValue(newValue)
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant='standard' required />
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
