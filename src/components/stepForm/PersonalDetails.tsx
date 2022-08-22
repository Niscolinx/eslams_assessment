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


export default function AddressForm() {
     const [value, setValue] = React.useState<Date | null>(
        new Date()
     )

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
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label='Date of Birth'
                            value={value}
                            minDate={new Date('2017-01-01')}
                            onChange={(newValue) => {
                                setValue(newValue)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>

                {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color='secondary'
                                name='saveAddress'
                                value='yes'
                            />
                        }
                        label='Use this address for payment details'
                    />
                </Grid> */}
            </Grid>
        </React.Fragment>
    )
}
