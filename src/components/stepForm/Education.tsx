import React, { useContext, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'

import {
    FormControl,
 
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'
import { AuthContext } from '../../pages/api/auth/authContext'

export default function Education() {
        const { setInput, handleInput, validationError } =
            useContext(AuthContext)

    const [isFocused, setIsFocused] = useState(false)
    const [labelClasses, setLabelClasses] = useState('-ml-5.5 mt-2.5 lg:-ml-4')

    useEffect(() => {
        if (isFocused) {
            setLabelClasses('-ml-5.5 mt-3 lg:-ml-4')
        } else {
            setLabelClasses(labelClasses)
        }
    }, [isFocused, labelClasses])


    return (
        <React.Fragment>
            <Typography
                variant='h6'
                gutterBottom
                align='center'
                className='heading__1 md:hidden'
            >
                Education
            </Typography>
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
                            onFocus={() => setIsFocused((prev) => !prev)}
                            onBlur={() => setLabelClasses(labelClasses)}
                            labelId='select-label'
                            id='select'
                            variant='standard'
                            label='Institution Type'
                            name='institutionType'
                            value={handleInput.institutionType}
                            error={
                                validationError &&
                                validationError['institutionType']
                                    ? true
                                    : false
                            }
                            onChange={setInput}
                        >
                            <MenuItem value={'school'}>School</MenuItem>
                            <MenuItem value={'college'}>College</MenuItem>
                        </Select>
                        {validationError &&
                        validationError['institutionType'] ? (
                            <span className='text-xs text-red-600'>
                                {validationError['institutionType']}
                            </span>
                        ) : null}
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='grade'
                        name='institutionYearOfStudy'
                        label='Grade/Year of Study'
                        fullWidth
                        type={'number'}
                        variant='standard'
                        value={handleInput.institutionYearOfStudy}
                        error={
                            validationError &&
                            validationError['institutionYearOfStudy']
                                ? true
                                : false
                        }
                        helperText={
                            validationError &&
                            validationError['institutionYearOfStudy']
                                ? validationError['institutionYearOfStudy']
                                : false
                        }
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
                        value={handleInput.institutionName}
                        error={
                            validationError &&
                            validationError['institutionName']
                                ? true
                                : false
                        }
                        helperText={
                            validationError &&
                            validationError['institutionName']
                                ? validationError['institutionName']
                                : false
                        }
                        onChange={setInput}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
