import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'

import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material'
import { useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'

export default function Education() {
    const [phoneNumber, setPhoneNumber] = useState<
        HTMLInputElement | undefined
    >()
    const [institution, setInstitution] = useState('')

    return (
        <React.Fragment>
            {/* <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id='select-label'>Institution</InputLabel>
                        <Select
                            labelId='select-label'
                            id='select'
                            value={institution}
                            label='Institution'
                            onChange={(e) => setInstitution(e.target.value)}
                        >
                            <MenuItem value={20}>Father</MenuItem>
                            <MenuItem value={30}>Mother</MenuItem>
                            <MenuItem value={10}>Guardian</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='institutionName'
                        name='institutionName'
                        label='Name of Institution'
                        fullWidth
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='grade'
                        name='grade'
                        label='Grade/Year of Study'
                        fullWidth
                        variant='outlined'
                    />
                </Grid>

                
            </Grid>
        </React.Fragment>
    )
}
