import React, { useContext, useEffect } from 'react'
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
        const { setInput, handleInput, validationError } =
            useContext(AuthContext)

    const [isFocused, setIsFocused] = useState(false)
    const [labelClasses, setLabelClasses] = useState('-ml-5.5 mt-3 lg:-ml-4')

    useEffect(() => {
        console.log('isFocused', isFocused, labelClasses)
        if (isFocused) {
            setLabelClasses('-ml-5.5 mt-3 lg:-ml-4')
        } else {
            setLabelClasses(labelClasses)
        }
    }, [isFocused, labelClasses])


    return (
        <React.Fragment>
            {/* <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel
                            id='select-label'
                            className={`${labelClasses}`}
                        >
                            Institution Type
                        </InputLabel>
                        <Select
                            onFocus={(prev) => setIsFocused((prev) => !prev)}
                            onBlur={() => setLabelClasses(labelClasses)}
                            labelId='select-label'
                            id='select'
                            variant='standard'
                            label='Institution Type'
                            onChange={setInput}
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
                        onChange={setInput}
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
                        onChange={setInput}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
