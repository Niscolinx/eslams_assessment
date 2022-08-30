import Image from 'next/image'

import { BiNotepad } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { VscSettings } from 'react-icons/vsc'

import Events from '../../components/Events'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

//Footer
import Link from 'next/link'
import { BsYoutube } from 'react-icons/bs'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    useRef,
} from 'react'

import { Theme, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'

import Chip from '@mui/material/Chip'
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Button,
} from '@mui/material'
import Slider, {
    SliderThumb,
    SliderValueLabelProps,
} from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

type contextTypes = {
    searchValue: string
    handleClickOpen: () => void
    setSearchValue: (searchValue: string) => void
    registerEvent: ( id:number) => void
    showFilteredData: {
        [key: string]: string | string[]
    }
}

export const EventContext = createContext<contextTypes>({
    searchValue: '',
    registerEvent: ( id: number) => {},
    handleClickOpen: () => {},
    showFilteredData: {},
    setSearchValue: (searchValue: string) => {},
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const AGERANGE = ['0-10', '11-20', '21-30', '31-40']

const LOCATIONS = ['USA', 'Canada', 'Mexico']

const COMPETITIONTYPE = [
    'Multilevel',
    'Single Elimination',
    'Semi-round Robins',
    'Round Robin Tripple Split',
]

const REGISTRATIONREQUIREMENTS = [
    'Individual Registration',
    'Group Registration',
    '18 and Above',
]

function getStyles(name: string, filterName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            filterName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

const SearchBox = () => {
    const { searchValue, setSearchValue, handleClickOpen } =
        useContext(EventContext)

    return (
        <div className='flex items-center gap-2'>
            <div className='hidden md:flex relative items-center '>
                <FiSearch className='absolute left-2' />
                <input
                    type='text'
                    placeholder='Search'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className='rounded-3xl py-2 px-3 pl-10 w-80 outline-none border-none'
                />
            </div>
            <div
                className='flex bg-[#d9d6d6] items-center gap-2 py-2 px-3 rounded-3xl cursor-pointer'
                onClick={handleClickOpen}
            >
                <VscSettings />
                <span className=' tracking-wide text-sm'>Filters</span>
            </div>
        </div>
    )
}

const Header = () => (
    <header className='p-8 header'>
        <figure className='header__logo w-12 h-12'>
            <Image
                src='/logo.jpeg'
                layout='responsive'
                objectFit={'contain'}
                width='100%'
                height='100%'
            />
        </figure>

        <SearchBox />
        <div className='flex'>
            <div className='flex items-center gap-3'>
                <div className='bg-[#d9d6d6] rounded-full w-[40px] h-[40px] flex items-center justify-center relative'>
                    <div className='absolute -top-2 -right-2 bg-[#CA494E] p-[1px] rounded-full w-[20px] h-[20px] grid place-content-center'>
                        <span className='text-white text-[12px]'>3</span>
                    </div>
                    <BiNotepad className='text-2xl' />
                </div>
                <div className='flex header__avatar cursor-pointer'>
                    <Link href='/dashboard/profile'>
                    <Image
                        src='/img/avatar.jpeg'
                        width='100%'
                        height='100%'
                        objectFit='cover'
                    />
                    </Link>
                </div>
            </div>
        </div>
    </header>
)

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__blob'></div>
            <div className='footer__content'>
                <ul className='footer__links'>
                    <li className='footer__links--item '>
                        <Link href='/'>
                            <a>
                                <BsYoutube />
                            </a>
                        </Link>
                    </li>
                    <li className='footer__links--item'>
                        <Link href='/'>
                            <a>
                                <AiFillFacebook />
                            </a>
                        </Link>
                    </li>

                    <li className='footer__links--item'>
                        <Link href='/'>
                            <a>
                                <AiFillInstagram />
                            </a>
                        </Link>
                    </li>
                    <li className='footer__links--item'>
                        <Link href='/'>
                            <a>
                                <FaTwitterSquare />
                            </a>
                        </Link>
                    </li>
                </ul>

                <div className='footer__contracts'>
                    <Link href='/'>Terms of services</Link>
                    <Link href='/'>Privacy Policy</Link>
                </div>
                <div className='footer__copyright'>
                    <p>Copyright 2022 @ eSlams. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

const Index = () => {
    const [searchValue, setSearchValue] = useState('')
    const [open, setOpen] = useState(false)
    const theme = useTheme()

    const [age, setAge] = useState<string[]>([])
    const [location, setLocation] = useState<string[]>([])
    const [competitionType, setCompetitionType] = useState<string[]>([])
    const [registrationRequirement, setRegistrationRequirement] = useState<
        string[]
    >([])
    const [registerEvent, setRegisterEvent] = useState<any>()

    const [showFilteredData, setShowFilteredData] = useState<any>({
        location: ['USA'],
        priceRange: [20, 5323],
        Age: ['0-10', '11-20', '21-30', '31-40'],
        'Competition Type': ['Multilevel', 'Single Elimination'],
        'Registration Requirements': ['Individual Registration'],
    })

    const PriceSlider = styled(Slider)({
        color: '#D0E069',
        height: 5,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 20,
            width: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 50,
            color: 'black',
            height: 50,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#D0E069',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
        },
    })

    const ref = useRef<number | number[]>()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (
        event: React.SyntheticEvent<unknown>,
        reason?: string
    ) => {
        if (reason !== 'backdropClick') {
            setOpen(false)
        }
    }

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        const {
            target: { value, name },
        } = event

        if (name === 'age') {
            setAge(typeof value === 'string' ? value.split(',') : value)
        }
        if (name === 'location') {
            setLocation(typeof value === 'string' ? value.split(',') : value)
        }
        if (name === 'competition-type') {
            setCompetitionType(
                typeof value === 'string' ? value.split(',') : value
            )
        }
        if (name === 'registration-requirements') {
            setRegistrationRequirement(
                typeof value === 'string' ? value.split(',') : value
            )
        }
    }

    const priceValue = (value: number | number[]) => {
        return (ref.current = value)
    }

    const handleReset = () => {
        setAge([])
        setLocation([])
        setCompetitionType([])
        setRegistrationRequirement([])
    }

    const handleFilter = (e: any) => {
        const filtered = {
            location,
            priceRange: ref.current,
            Age: age,
            'Competition Type': competitionType,
            'Registration Requirements': registrationRequirement,
        }

        setShowFilteredData(filtered)

        handleClose(e)
    }

    return (
        <EventContext.Provider
            value={{
                searchValue,
                setSearchValue,
                handleClickOpen,
                showFilteredData,
                registerEvent,
            }}
        >
            <div className='marketplace'>
                <Dialog
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                    className='filterDialog'
                >
                    <button
                        className='flex cursor-pointer mr-auto'
                        onClick={handleClose}
                    >
                        <GrFormClose className='text-3xl ' />
                    </button>
                    <DialogTitle className='text-center'>Filters</DialogTitle>
                    <DialogContent>
                        <Box
                            component='form'
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                width: 300,
                            }}
                        >
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id='location-label'>
                                    <div className='flex'>Location</div>
                                </InputLabel>
                                <Select
                                    labelId='location-label'
                                    id='location'
                                    multiple
                                    value={location}
                                    name='location'
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput
                                            id='select-locations'
                                            label='location'
                                        />
                                    }
                                    renderValue={(selected) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 0.5,
                                            }}
                                        >
                                            {selected.map((value) => (
                                                <Chip
                                                    key={value}
                                                    label={value}
                                                />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {LOCATIONS.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(
                                                name,
                                                location,
                                                theme
                                            )}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id='age-label'>
                                    <div className='flex'>Age</div>
                                </InputLabel>
                                <Select
                                    labelId='age-label'
                                    id='multiple-age'
                                    multiple
                                    value={age}
                                    name='age'
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput
                                            id='select-age'
                                            label='Age'
                                        />
                                    }
                                    renderValue={(selected) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 0.5,
                                            }}
                                        >
                                            {selected.map((value) => (
                                                <Chip
                                                    key={value}
                                                    label={value}
                                                />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {AGERANGE.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, age, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id='competition-type-label'>
                                    <div className='flex'>Competition Type</div>
                                </InputLabel>
                                <Select
                                    labelId='competition-type-label'
                                    id='competition-type'
                                    name='competition-type'
                                    multiple
                                    value={competitionType}
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput
                                            id='select-multiple-competition-type'
                                            label='Competition Type'
                                        />
                                    }
                                    renderValue={(selected) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 0.5,
                                            }}
                                        >
                                            {selected.map((value) => (
                                                <Chip
                                                    key={value}
                                                    label={value}
                                                />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {COMPETITIONTYPE.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(
                                                name,
                                                competitionType,
                                                theme
                                            )}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id='registration-requirements-label'>
                                    <div className='flex'>
                                        Registration Requirements
                                    </div>
                                </InputLabel>
                                <Select
                                    labelId='registration-requirements-label'
                                    id='registration-requirements'
                                    multiple
                                    value={registrationRequirement}
                                    onChange={handleChange}
                                    name='registration-requirements'
                                    input={
                                        <OutlinedInput
                                            id='select-registration-requirements'
                                            label='Registration Requirements'
                                        />
                                    }
                                    renderValue={(selected) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 0.5,
                                            }}
                                        >
                                            {selected.map((value) => (
                                                <Chip
                                                    key={value}
                                                    label={value}
                                                />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {REGISTRATIONREQUIREMENTS.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(
                                                name,
                                                registrationRequirement,
                                                theme
                                            )}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Typography gutterBottom className='mt-5'>
                                Price Range
                            </Typography>
                            <PriceSlider
                                valueLabelDisplay='auto'
                                //onChange={(_,value) => setPriceRange( value)}
                                onChangeCommitted={(_, value) =>
                                    priceValue(value)
                                }
                                defaultValue={[10, 100000]}
                                min={10}
                                max={100000}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleReset}>Reset</Button>
                        <Button onClick={handleFilter}>Ok</Button>
                    </DialogActions>
                </Dialog>

                <div className='flex justify-around'></div>
                {/* </dialog> */}
                <div className='marketplace__container'>
                    <div className='grid relative z-3'>
                        <Header />
                        <main className='main'>
                            <div className='banner'>
                                <div className='banner__blob'></div>
                                <div className='banner__backgroundImage'></div>
                                <div className='banner__content'>
                                    <div className='banner__details'>
                                        <h3 className='banner__details--heading'>
                                            You are invited to our Community!
                                        </h3>
                                        <p className='banner__details--text'>
                                            Please follow guildlines about
                                            interactions and events
                                        </p>
                                        <button className='banner__details--btn'>
                                            Access Community
                                            <HiOutlineArrowNarrowRight className='banner__details--btn-icon' />
                                        </button>
                                    </div>
                                    <div className='banner__svg'>
                                        <Image
                                            src='/banner.svg'
                                            width='500px'
                                            height='200px'
                                            objectFit='cover'
                                            objectPosition='top'
                                        />
                                    </div>
                                </div>
                            </div>
                            <Events />
                        </main>
                        <Footer />{' '}
                    </div>
                </div>
            </div>
        </EventContext.Provider>
    )
}

export default Index
