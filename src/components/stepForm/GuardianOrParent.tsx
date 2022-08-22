import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'


import { FormControl, FormLabel, RadioGroup, Radio, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'

export default function GuardianOrParent() {
    const [phoneNumber, setPhoneNumber] = useState<HTMLInputElement | undefined>()
    const [relationship, setRelationship] = useState('')

 

    return (
        <React.Fragment>
            {/* <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='name'
                        name='name'
                        label='Name'
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
                        autoComplete='Email address'
                        variant='outlined'
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>
                            Relationship
                        </InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={relationship}
                            label='Relationship'
                            onChange={(e) => setRelationship(e.target.value)}
                        >
                            <MenuItem value={20}>Father</MenuItem>
                            <MenuItem value={30}>Mother</MenuItem>
                            <MenuItem value={10}>Guardian</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPhoneNumber
                        defaultCountry={'us'}
                        variant='outlined'
                        value={phoneNumber}
                        onChange={(e: any) => setPhoneNumber(e)}
                    />
                    
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
