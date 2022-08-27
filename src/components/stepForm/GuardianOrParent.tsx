import  React, {useContext, useState} from 'react'
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
import MuiPhoneNumber from 'material-ui-phone-number'
import { AuthContext } from '../../pages/api/auth/authContext'

export default function GuardianOrParent() {
    const { setInput, handleInput, validationError } = useContext(AuthContext)

    const [adjustMargin, setAdjustMargin] = useState(false)

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
                        name='guardianName'
                        label='Name'
                        fullWidth
                        variant='standard'
                        value={handleInput.guardianName}
                        error={
                            validationError && validationError['guardianName']
                                ? true
                                : false
                        }
                        helperText={
                            validationError && validationError['guardianName']
                                ? validationError['guardianName']
                                : false
                        }
                        onChange={setInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='email'
                        name='guardianEmail'
                        label='Email Address'
                        fullWidth
                        autoComplete='Email address'
                        variant='standard'
                        value={handleInput.guardianEmail}
                        error={
                            validationError && validationError['guardianEmail']
                                ? true
                                : false
                        }
                        helperText={
                            validationError && validationError['guardianEmail']
                                ? validationError['guardianEmail']
                                : false
                        }
                        onChange={setInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPhoneNumber
                        id='phone-number'
                        autoFocus={true}
                        name='guardianPhoneNumber'
                        placeholder='Phone Number'
                        defaultCountry={'us'}
                        variant='standard'
                        label='Phone Number'
                        fullWidth
                        value={handleInput.guardianPhoneNumber}
                        error={
                            validationError &&
                            validationError['guardianPhoneNumber']
                                ? true
                                : false
                        }
                        helperText={
                            validationError &&
                            validationError['guardianPhoneNumber']
                                ? validationError['guardianPhoneNumber']
                                : false
                        }
                        onChange={(value) =>
                            setInput({
                                target: {
                                    name: 'guardianPhoneNumber',
                                    value,
                                },
                            })
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id='select-label' className='-ml-3.5'>
                            Relationship
                        </InputLabel>
                        <Select
                            labelId='select-label'
                            id='select'
                            onFocus={() =>
                                setAdjustMargin(true)
                            }
                            variant='standard'
                            label='Relationship'
                            name='guardianRelationship'
                            value={handleInput.guardianRelationship}
                            error={
                                validationError &&
                                validationError['guardianRelationship']
                                    ? true
                                    : false
                            }
                            onChange={setInput}
                        >
                            <MenuItem value='father'>Father</MenuItem>
                            <MenuItem value='mother'>Mother</MenuItem>
                            <MenuItem value='guardian'>Guardian</MenuItem>
                        </Select>
                        {validationError &&
                        validationError['guardianRelationship'] ? (
                            <span className='text-xs text-red-600'>
                                {validationError['guardianRelationship']}
                            </span>
                        ) : null}
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
