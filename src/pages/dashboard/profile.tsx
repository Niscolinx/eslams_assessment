import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { BsFillPencilFill, BsFillFilePersonFill } from 'react-icons/bs'
import { IoMdSchool } from 'react-icons/io'
import { MdFamilyRestroom } from 'react-icons/md'

import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material'
import { IUser } from '../../models/User'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MuiPhoneNumber from 'material-ui-phone-number'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import dayjs from 'dayjs'

const routes = ['General', 'Events']

const GeneralDetails = ({ userData }: { userData: IUser }) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        guardianEmail,
        guardianName,
        guardianPhoneNumber,
        guardianRelationship,
        birthDate,
        institutionName,
        institutionType,
        institutionYearOfStudy,
    } = userData

    return (
        <div className='generalDetails'>
            <div className='content-1'>
                <h3 className='content-1__heading'>
                    <BsFillFilePersonFill className='content-1__heading--icon' />
                    Personal Details
                </h3>
                <div className='content-1__box'>
                    <p className='content-1__name'>
                        <span>Name:</span> {firstName} {lastName}
                    </p>
                    <p className='content-1__name'>
                        <span>Email: </span> {email}
                    </p>
                    <p className='content-1__name'>
                        <span>Phone Number:</span> {phoneNumber}
                    </p>
                    <p className='content-1__name'>
                        <span>Date of Birth:</span>{' '}
                        {new Date(birthDate).toLocaleDateString('en-GB')}
                    </p>
                </div>
            </div>
            <div className='content-1'>
                <h3 className='content-1__heading'>
                    <MdFamilyRestroom className='content-1__heading--icon' />
                    Guardian/Parent Details
                </h3>
                <div className='content-1__box'>
                    <p className='content-1__name'>
                        <span>Guardian/Parent Name:</span> {guardianName}
                    </p>
                    <p className='content-1__name'>
                        <span>Guardian/Parent Phone:</span>{' '}
                        {guardianPhoneNumber}
                    </p>
                    <p className='content-1__name'>
                        <span>Guardian/Parent Email:</span> {guardianEmail}
                    </p>
                    <p className='content-1__name'>
                        <span>Guardian/Parent Relationship:</span>{' '}
                        {guardianRelationship}
                    </p>
                </div>
            </div>
            <div className='content-1'>
                <h3 className='content-1__heading'>
                    <IoMdSchool className='content-1__heading--icon' />
                    Education{' '}
                </h3>
                <div className='content-1__box'>
                    <p className='content-1__name'>
                        <span>Institution Name:</span> {institutionName}
                    </p>
                    <p className='content-1__name'>
                        <span>Institution Type:</span> {institutionType}
                    </p>
                    <p className='content-1__name'>
                        <span>Year of Study:</span> {institutionYearOfStudy}
                    </p>
                </div>
            </div>
        </div>
    )
}

interface EventProps {
    heading: string
    price: number
    which: number
    date: {
        from: string
        to?: string
    }
}

const Event = ({ heading, price, date: { from, to }, which }: EventProps) => {
    return (
        <div className='registeredEvent'>
            <div className='registeredEvent__side registeredEvent__side--front'>
                <div
                    className={`registeredEvent__picture registeredEvent__picture--${which}`}
                >
                    <div className='registeredEvent__picture--date'>
                        <span>
                            {from.split(' ')[0]} <sup>{from.split(' ')[1]}</sup>
                        </span>
                        {to ? <span>&rarr;</span> : ''}
                        <span>
                            {to?.split(' ')[0]} <sup>{to?.split(' ')[1]}</sup>
                        </span>
                    </div>
                </div>
                <h4 className='registeredEvent__heading'>
                    <span
                        className={`registeredEvent__heading-span registeredEvent__heading-span--${which}`}
                    >
                        {heading}
                    </span>
                </h4>
            </div>
        </div>
    )
}

const RegisteredEvents = ({
    loading,
    eventData,
}: {
    loading: boolean
    eventData: EventProps[]
}) => {
    return (
        <div className=' registeredEvents'>
            <div className='registeredEvents__heading'>
                <h3 className='registeredEvents__heading--text'>
                    Registered Events
                </h3>{' '}
            </div>
            <div className='registeredEvents__container'>
                {loading ? (
                    <CircularProgress
                        className='flex justify-self-center'
                        size={15}
                        style={{ color: 'black' }}
                    />
                ) : eventData.length > 0 ? (
                    eventData.map((event, index) => (
                        <Event key={index} {...event} />
                    ))
                ) : (
                    <p className='text-center'>No registered Event yet</p>
                )}
            </div>
        </div>
    )
}

function profile() {
    const [userData, setUserData] = useState<IUser | null>(null)
    const [route, routeToDisplay] = useState<JSX.Element | null>(null)
    const [eventData, setEventData] = useState<EventProps[]>([])
    const [loading, setLoading] = useState(true)
    const [isUpdateUser, setIsUpdateUser] = useState(false)
    const [eyeIcon, setEyeIcon] = useState(false)
    const [validationError, setValidationError] =
        useState<ValidationError | null>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [labelClasses, setLabelClasses] = useState('-ml-5.5 mt-2.5 lg:-ml-4')
    const [open, setOpen] = useState(false)
    const [isToast, setIsToast] = useState<string | null>(null)

    type ValidationError = { [key: string]: string }

    type handleInputProps = {
        firstName: string
        lastName: string
        personalEmail: string
        password: string
        phoneNumber: string
        gender: string
        guardianEmail: string
        guardianPhoneNumber: string
        guardianName: string
        guardianRelationship: string
        institutionName: string
        institutionType: string
        institutionYearOfStudy: string
        birthDate: Date | null
    }

    const [handleInput, setHandleInput] = useState<handleInputProps>({
        firstName: '',
        lastName: '',
        personalEmail: '',
        phoneNumber: '',
        password: '',
        birthDate: null,
        gender: '',
        guardianEmail: '',
        guardianPhoneNumber: '',
        guardianName: '',
        guardianRelationship: '',
        institutionName: '',
        institutionType: '',
        institutionYearOfStudy: '',
    })

    useEffect(() => {
        axios('/api/getUserData')
            .then(({ data }) => {
                const { user, userEvents } = data
                const transFormedData = userEvents.map(
                    (item: EventProps, index: number) => {
                        return {
                            ...item,
                            which: (index % 3) + 1,
                            date: {
                                from: new Date(
                                    item.date.from
                                ).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                }),
                                to:
                                    item.date.to &&
                                    new Date(item.date.to).toLocaleDateString(
                                        'en-GB',
                                        {
                                            day: 'numeric',
                                            month: 'short',
                                        }
                                    ),
                            },
                        }
                    }
                )
                setLoading(false)
                setEventData(transFormedData)
                setUserData(user)
                routeToDisplay(<GeneralDetails userData={user} />)
                setHandleInput({
                    ...user,
                    password: '',
                    personalEmail: user.email,
                })
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (isFocused) {
            setLabelClasses('-ml-5.5 mt-3 lg:-ml-4')
        } else {
            setLabelClasses(labelClasses)
        }
    }, [isFocused, labelClasses])

    const handleNav = (route: React.ChangeEvent<HTMLInputElement>) => {
        const el = route.currentTarget.value

        switch (el) {
            case 'General':
                return routeToDisplay(<GeneralDetails userData={userData!} />)

            case 'Events':
                return routeToDisplay(
                    <RegisteredEvents
                        loading={loading}
                        eventData={eventData!}
                    />
                )

            default:
                return routeToDisplay(<GeneralDetails userData={userData!} />)
        }
    }

    const setInput = (e: any) => {
        setIsToast(null)
        const { name, value } = e.target

        setValidationError(null)

        setHandleInput((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    const formValidate = () => {
        const errors = {} as ValidationError
        const isValidMail = (e: string, cb: (checkValid: boolean) => void) => {
            const emailRegex = new RegExp(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )

            const isValid = emailRegex.test(e)

            return cb(isValid)
        }

        for (const key in handleInput) {
            if (key === 'personalEmail' || key === 'guardianEmail') {
                isValidMail(handleInput[key], (cb) => {
                    if (!cb) {
                        errors[key] = 'Invalid email'

                        setValidationError(errors)
                    }
                })
            }

            if (
                key === 'lastName' ||
                key === 'firstName' ||
                key === 'guardianName'
            ) {
                if (handleInput[key].length < 3) {
                    errors[key as keyof handleInputProps] =
                        'This field must be at least 3 characters long'

                    setValidationError(errors)
                }
            }

            if (key === 'password' && handleInput[key] !== '') {
                if (handleInput[key].length < 6) {
                    errors[key as keyof handleInputProps] =
                        'Password must be at least 6 characters long'

                    setValidationError(errors)
                }
            }

            if (key === 'phoneNumber' || key === 'guardianPhoneNumber') {
                if (handleInput[key].length < 10) {
                    errors[key as keyof handleInputProps] =
                        'Phone number not valid'

                    setValidationError(errors)
                }
            }
            if (key === 'birthDate') {
                if (!dayjs(handleInput[key]).isValid()) {
                    errors[key as keyof handleInputProps] = 'Invalid Date'

                    setValidationError(errors)
                }
            }

            if (
                (key !== 'password' &&
                    handleInput[key as keyof handleInputProps] === '') ||
                handleInput[key as keyof handleInputProps] === null
            ) {
                errors[key as keyof handleInputProps] = 'This field is required'

                setValidationError(errors)
            }
        }

        if (Object.keys(errors).length > 0) {
            return false
        }

        return true
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        const isValid = formValidate()

        if (!isValid) {
            return
        }
        setIsUpdateUser(true)

        axios
            .post('/api/updateProfile', handleInput)
            .then(({ data }) => {
                console.log(data)
                setUserData(data)

                setIsUpdateUser(false)
                setIsToast('Updated Successfully')
            })
            .catch((err) => {
                console.log(err)
                setIsUpdateUser(false)
            })
    }

    const toggleEyeIcon = () => {
        setEyeIcon((prev) => !prev)
    }

    const handleDateChange = (e: Date | null) => {
        setInput({
            target: {
                name: 'birthDate',
                value: e,
            },
        })
    }

    const changePhoneNumber = (value: any) => {
        setInput({
            target: {
                name: 'phoneNumber',
                value,
            },
        })
    }

    const changeGuardianPhoneNumber = (value: any) => {
        setInput({
            target: {
                name: 'guardianPhoneNumber',
                value,
            },
        })
    }

    const handleClose = (
        event: React.SyntheticEvent<unknown>,
        reason?: string
    ) => {
        setIsToast(null)
        if (reason !== 'backdropClick') {
            setOpen(false)
        }
    }

    const { email, firstName, lastName, createdAt } = userData || {}

    return (
        <div className='profile'>
            <div className='profile__box'>
                <Dialog
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                    className='dialogClass'
                >
                    <button
                        className='flex cursor-pointer mr-auto'
                        onClick={handleClose}
                    >
                        <GrFormClose className='text-3xl ' />
                    </button>
                    {isToast && (
                        <p className='text-green-500 text-center font-semibold'>
                            {isToast}
                        </p>
                    )}
                    <DialogTitle className='text-center'>
                        Edit Profile
                    </DialogTitle>
                    <DialogContent>
                        <Box
                            component='form'
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '2rem',
                            }}
                        >
                            <div className='grid border border-gray-300 rounded-lg w-full p-5 shadow-inner'>
                                <h2 className='font-bold text-xl'>
                                    Personal Details
                                </h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id='firstName'
                                            name='firstName'
                                            type='text'
                                            label='First name'
                                            fullWidth
                                            variant='standard'
                                            value={handleInput.firstName}
                                            error={
                                                validationError &&
                                                validationError['firstName']
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError['firstName']
                                                    ? validationError[
                                                          'firstName'
                                                      ]
                                                    : false
                                            }
                                            onChange={setInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id='lastName'
                                            name='lastName'
                                            label='Last name'
                                            value={handleInput.lastName}
                                            fullWidth
                                            error={
                                                validationError &&
                                                validationError['lastName']
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError['lastName']
                                                    ? validationError[
                                                          'lastName'
                                                      ]
                                                    : false
                                            }
                                            variant='standard'
                                            onChange={setInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id='email'
                                            name='personalEmail'
                                            type='email'
                                            label='Email Address'
                                            value={handleInput.personalEmail}
                                            fullWidth
                                            error={
                                                validationError &&
                                                validationError['personalEmail']
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError['personalEmail']
                                                    ? validationError[
                                                          'personalEmail'
                                                      ]
                                                    : false
                                            }
                                            variant='standard'
                                            onChange={setInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <div className='flex items-center relative'>
                                            <TextField
                                                id='password'
                                                name='password'
                                                label='Password'
                                                type={
                                                    eyeIcon
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                variant='standard'
                                                fullWidth
                                                value={handleInput.password}
                                                error={
                                                    validationError &&
                                                    validationError['password']
                                                        ? true
                                                        : false
                                                }
                                                helperText={
                                                    validationError &&
                                                    validationError['password']
                                                        ? validationError[
                                                              'password'
                                                          ]
                                                        : false
                                                }
                                                onChange={setInput}
                                            />
                                            {
                                                <span className='cursor-pointer absolute grid self-start justify-self-center right-5 bottom-2'>
                                                    {eyeIcon ? (
                                                        <AiOutlineEyeInvisible
                                                            onClick={
                                                                toggleEyeIcon
                                                            }
                                                        />
                                                    ) : (
                                                        <AiOutlineEye
                                                            onClick={
                                                                toggleEyeIcon
                                                            }
                                                        />
                                                    )}
                                                </span>
                                            }
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <MuiPhoneNumber
                                            id='phoneNumber'
                                            name='phoneNumber'
                                            value={handleInput.phoneNumber}
                                            placeholder='Phone Number'
                                            defaultCountry={'us'}
                                            variant='standard'
                                            label='Phone Number'
                                            fullWidth
                                            error={
                                                validationError &&
                                                validationError['phoneNumber']
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError['phoneNumber']
                                                    ? validationError[
                                                          'phoneNumber'
                                                      ]
                                                    : false
                                            }
                                            onChange={changePhoneNumber}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker
                                                label='Date of Birth'
                                                value={handleInput.birthDate}
                                                onChange={handleDateChange}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        name='birthDate'
                                                        fullWidth
                                                        variant='standard'
                                                        error={
                                                            validationError &&
                                                            validationError[
                                                                'birthDate'
                                                            ]
                                                                ? true
                                                                : false
                                                        }
                                                        helperText={
                                                            validationError &&
                                                            validationError[
                                                                'birthDate'
                                                            ]
                                                                ? validationError[
                                                                      'birthDate'
                                                                  ]
                                                                : false
                                                        }
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className='grid border border-gray-300 rounded-lg w-full p-5 shadow-inner'>
                                <h2 className='font-bold text-xl'>
                                    Guardian/Parent Details
                                </h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id='guardianName'
                                            name='guardianName'
                                            label='Guardian Name'
                                            fullWidth
                                            variant='standard'
                                            value={handleInput.guardianName}
                                            error={
                                                validationError &&
                                                validationError['guardianName']
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError['guardianName']
                                                    ? validationError[
                                                          'guardianName'
                                                      ]
                                                    : false
                                            }
                                            onChange={setInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id='guardianEmail'
                                            name='guardianEmail'
                                            label='Guardian Email'
                                            fullWidth
                                            autoComplete='Email address'
                                            variant='standard'
                                            value={handleInput.guardianEmail}
                                            error={
                                                validationError &&
                                                validationError['guardianEmail']
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError['guardianEmail']
                                                    ? validationError[
                                                          'guardianEmail'
                                                      ]
                                                    : false
                                            }
                                            onChange={setInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <MuiPhoneNumber
                                            id='guardianPhoneNumber'
                                            name='guardianPhoneNumber'
                                            placeholder='guardian/Parent Number'
                                            defaultCountry={'us'}
                                            variant='standard'
                                            label='Guardian Number'
                                            fullWidth
                                            value={
                                                handleInput.guardianPhoneNumber
                                            }
                                            error={
                                                validationError &&
                                                validationError[
                                                    'guardianPhoneNumber'
                                                ]
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError[
                                                    'guardianPhoneNumber'
                                                ]
                                                    ? validationError[
                                                          'guardianPhoneNumber'
                                                      ]
                                                    : false
                                            }
                                            onChange={changeGuardianPhoneNumber}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel
                                                id='select-label'
                                                className={`${labelClasses}`}
                                            >
                                                Relationship
                                            </InputLabel>
                                            <Select
                                                labelId='select-label'
                                                id='select'
                                                onFocus={(prev) =>
                                                    setIsFocused(
                                                        (prev) => !prev
                                                    )
                                                }
                                                onBlur={() =>
                                                    setLabelClasses(
                                                        labelClasses
                                                    )
                                                }
                                                variant='standard'
                                                label='Relationship'
                                                name='guardianRelationship'
                                                value={
                                                    handleInput.guardianRelationship
                                                }
                                                error={
                                                    validationError &&
                                                    validationError[
                                                        'guardianRelationship'
                                                    ]
                                                        ? true
                                                        : false
                                                }
                                                onChange={setInput}
                                            >
                                                <MenuItem value='father'>
                                                    Father
                                                </MenuItem>
                                                <MenuItem value='mother'>
                                                    Mother
                                                </MenuItem>
                                                <MenuItem value='guardian'>
                                                    Guardian
                                                </MenuItem>
                                            </Select>
                                            {validationError &&
                                            validationError[
                                                'guardianRelationship'
                                            ] ? (
                                                <span className='text-xs text-red-600'>
                                                    {
                                                        validationError[
                                                            'guardianRelationship'
                                                        ]
                                                    }
                                                </span>
                                            ) : null}
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='grid border border-gray-300 rounded-lg w-full p-5 shadow-inner'>
                                <h2 className='font-bold text-xl'>Education</h2>
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
                                                onFocus={() =>
                                                    setIsFocused(
                                                        (prev) => !prev
                                                    )
                                                }
                                                onBlur={() =>
                                                    setLabelClasses(
                                                        labelClasses
                                                    )
                                                }
                                                labelId='select-label'
                                                id='select'
                                                variant='standard'
                                                label='Institution Type'
                                                name='institutionType'
                                                value={
                                                    handleInput.institutionType
                                                }
                                                error={
                                                    validationError &&
                                                    validationError[
                                                        'institutionType'
                                                    ]
                                                        ? true
                                                        : false
                                                }
                                                onChange={setInput}
                                            >
                                                <MenuItem value={'school'}>
                                                    School
                                                </MenuItem>
                                                <MenuItem value={'college'}>
                                                    College
                                                </MenuItem>
                                            </Select>
                                            {validationError &&
                                            validationError[
                                                'institutionType'
                                            ] ? (
                                                <span className='text-xs text-red-600'>
                                                    {
                                                        validationError[
                                                            'institutionType'
                                                        ]
                                                    }
                                                </span>
                                            ) : null}
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id='grade'
                                            name='institutionYearOfStudy'
                                            label='Grade/Year of Study'
                                            fullWidth
                                            type={'number'}
                                            variant='standard'
                                            value={
                                                handleInput.institutionYearOfStudy
                                            }
                                            error={
                                                validationError &&
                                                validationError[
                                                    'institutionYearOfStudy'
                                                ]
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError[
                                                    'institutionYearOfStudy'
                                                ]
                                                    ? validationError[
                                                          'institutionYearOfStudy'
                                                      ]
                                                    : false
                                            }
                                            onChange={setInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            id='institutionName'
                                            name='institutionName'
                                            label='Name of Institution'
                                            fullWidth
                                            variant='standard'
                                            value={handleInput.institutionName}
                                            error={
                                                validationError &&
                                                validationError[
                                                    'institutionName'
                                                ]
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                validationError &&
                                                validationError[
                                                    'institutionName'
                                                ]
                                                    ? validationError[
                                                          'institutionName'
                                                      ]
                                                    : false
                                            }
                                            onChange={setInput}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={(e) => handleSubmit(e)}>
                            {isUpdateUser ? (
                                <CircularProgress
                                    className='flex justify-self-center'
                                    size={15}
                                    style={{ color: 'black' }}
                                />
                            ) : (
                                'Save'
                            )}
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className='profile__content'>
                    <div className='profile__primary'>
                        <div className='profile__primary--picture'>
                            <div className='picture__cover'>
                                <img
                                    src='/img/event1.jpg'
                                    width='100%'
                                    height='100%'
                                    className='picture__cover--img'
                                    alt='cover'
                                />
                            </div>
                            <div className='picture__avatar'>
                                <img
                                    src='/img/avatar.jpeg
                                '
                                    width='100%'
                                    height='100%'
                                    className='picture__avatar--img'
                                    alt='cover'
                                />
                            </div>
                        </div>
                        <div
                            className='profile__primary--edit'
                            onClick={() => setOpen(true)}
                        >
                            <BsFillPencilFill className='' />
                            <button className='edit__btn'>Edit profile</button>
                        </div>
                        <div className='profile__primary--details'>
                            <h3 className='details__name'>
                                {firstName} {lastName}
                            </h3>
                            <p className='details__email'>{email}</p>
                            <p className='details__joined'>
                                Joined{' '}
                                {createdAt &&
                                    new Date(createdAt).toLocaleDateString(
                                        'en-GB',
                                        {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        }
                                    )}
                            </p>
                        </div>
                    </div>

                    <div className='profile__secondary'>
                        <ul className='profile__secondary--route'>
                            <li className='invisible'>&nbsp;</li>

                            {routes.map((item) => (
                                <div key={item} className='grid gap-1'>
                                    <input
                                        type='radio'
                                        defaultChecked={
                                            item === 'General' ? true : false
                                        }
                                        value={item}
                                        name='route'
                                        id={item}
                                        onChange={handleNav}
                                    />
                                    <label
                                        htmlFor={item}
                                        className='route__item'
                                    >
                                        {item}
                                    </label>
                                </div>
                            ))}

                            <li className='invisible'>&nbsp;</li>
                        </ul>

                        <div className='profile__secondary--details'>
                            <div className='details__box'>
                                {userData && route}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile
