import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'


import { FormControl, FormLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from 'react'

export default function GuardianOrParent() {
    const [gender, setGender] = useState('male')

    const [value, setValue] = useState<Date | null>(new Date())

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
                        variant='outlined'
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
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='email'
                        name='email'
                        label='Email Address'
                        fullWidth
                        autoComplete='email address'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id='password'
                        name='password'
                        label='Password'
                        fullWidth
                        autoComplete='password'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='mobileNumber'
                        name='mobileNumber'
                        label='mobile Number'
                        fullWidth
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='mobileNumber'
                        name='mobileNumber'
                        label='mobile Number'
                        fullWidth
                        variant='outlined'
                    />
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
