import  React, {useContext} from 'react'
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
import { AuthContext } from '../../pages/api/auth/authContext'

export default function Education() {
    
    const {
        institutionName,
        setInstitutionName,
        institutionType,
        setInstitutionType,
        institutionYearOfStudy,
        setInstitutionYearOfStudy
    } = useContext(AuthContext)


    return (
        <React.Fragment>
            {/* <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id='select-label' className='-ml-3.5'>
                            Institution Type
                        </InputLabel>
                        <Select
                            labelId='select-label'
                            id='select'
                            value={institutionType}
                            variant='standard'
                            label='Institution Type'
                            onChange={(e) => setInstitutionType(e.target.value)}
                        >
                            <MenuItem value={'school'}>School</MenuItem>
                            <MenuItem value={'college'}>College</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='grade'
                        name='grade'
                        label='Grade/Year of Study'
                        fullWidth
                        type={'number'}
                        variant='standard'
                        value={institutionYearOfStudy}
                        onChange={(e) => setInstitutionYearOfStudy(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id='institutionName'
                        name='institutionName'
                        label='Name of Institution'
                        fullWidth
                        variant='standard'
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
