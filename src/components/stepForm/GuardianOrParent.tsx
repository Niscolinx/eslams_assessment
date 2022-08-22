import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'


import { FormControl, FormLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'

export default function GuardianOrParent() {
    const [phoneNumber, setPhoneNumber] = useState<HTMLInputElement | undefined>()


 

    console.log({phoneNumber})

    return (
        <React.Fragment>
            {/* <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='email'
                        name='email'
                        label='Email Address'
                        fullWidth
                        autoComplete='Email address'
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
                    <MuiPhoneNumber
                        defaultCountry={'us'}
                        variant='outlined'
                        value={phoneNumber}
                        onChange={(e:any) => setPhoneNumber(e)}
                    />
                    ,
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

               
            </Grid>
        </React.Fragment>
    )
}
