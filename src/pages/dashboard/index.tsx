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
import { createContext, useState, useContext, useEffect } from 'react'

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
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

type contextTypes = {
    searchValue: string
    handleClickOpen: () => void
    setSearchValue: (searchValue: string) => void
}

export const EventContext = createContext<contextTypes>({
    searchValue: '',
    handleClickOpen: () => {},
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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
]

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
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
                <div className='flex header__avatar'>
                    <Image
                        src='/img/avatar.jpeg'
                        width='100%'
                        height='100%'
                        objectFit='cover'
                    />
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
    const [age, setAge] = useState<number | string>('')

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

    const theme = useTheme()
    const [personName, setPersonName] = useState<string[]>([])

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        )
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //     const dialog = document.querySelector('#filterDialog') as any
    //     if (toggleModal) {
    //         dialog.showModal()
    //     } else {
    //         dialog.close()
    //     }
    // }, [toggleModal])

    return (
        <EventContext.Provider
            value={{
                searchValue,
                setSearchValue,
                handleClickOpen,
            }}
        >
            <div className='marketplace'>
                {/* <dialog
                    className={` ${toggleModal ? 'filterDialog' : '!hidden'}`}
                    id='filterDialog'
                > */}

                <Dialog
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                    className='filterDialog'
                >
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
                                <InputLabel id='demo-multiple-location-label'>
                                    <div className='flex'>Location</div>
                                </InputLabel>
                                <Select
                                    labelId='demo-multiple-location-label'
                                    id='demo-multiple-location'
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput
                                            id='select-multiple-location'
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
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(
                                                name,
                                                personName,
                                                theme
                                            )}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id='demo-multiple-location-label'>
                                    <div className='flex'>Location</div>
                                </InputLabel>
                                <Select
                                    labelId='demo-multiple-location-label'
                                    id='demo-multiple-location'
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput
                                            id='select-multiple-location'
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
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(
                                                name,
                                                personName,
                                                theme
                                            )}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id='demo-multiple-location-label'>
                                    <div className='flex'>Location</div>
                                </InputLabel>
                                <Select
                                    labelId='demo-multiple-location-label'
                                    id='demo-multiple-location'
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput
                                            id='select-multiple-location'
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
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(
                                                name,
                                                personName,
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
                                    value={personName}
                                    onChange={handleChange}
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
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(
                                                name,
                                                personName,
                                                theme
                                            )}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>

                <div className='flex justify-around'>
                    {/* <button
                            className='bg-orange-300 text-[#1a1a2d] font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline  justify-self-center'
                            type='button'
                        >
                            Close
                        </button> */}
                    {/* <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline  justify-self-center'
                            type='submit'
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button> */}
                </div>
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

// export async function getServerSideProps(
//     context: GetSessionParams | undefined
// ) {
//     const session = await getSession(context)

//     axios.get('/api/auth/checkAuth', {
//         headers: {
//             'Content-Type': 'application/json',
//            // Authorization: 'Bearer ' + token,
//         },
//     })

//     // if (!session) {
//     //     return {
//     //         redirect: {
//     //             destination: '/auth/register',
//     //             permanent: false,
//     //         },
//     //     }
//     // }

//     return {
//         props: { session },
//     }
// }
