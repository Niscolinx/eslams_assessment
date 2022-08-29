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
import { createContext, useState, useContext, useEffect } from 'react'

type contextTypes = {
    searchValue: string
    toggleModal: boolean
    setToggleModal: (prev: any) => void
    setSearchValue: (searchValue: string) => void
}

export const EventContext = createContext<contextTypes>({
    searchValue: '',
    toggleModal: false,
    setToggleModal: (toggleModal) => {},
    setSearchValue: (searchValue: string) => {},
})

const SearchBox = () => {
    const { searchValue, setSearchValue, setToggleModal } =
        useContext(EventContext)

    const callModalContext = () => {
        setToggleModal((prev: boolean) => {
            return !prev
        })
    }

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
                onClick={callModalContext}
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
    const [toggleModal, setToggleModal] = useState(false)
    const [selectedAction, setSelectedAction] =
        useState<HTMLSelectElement | null>(null)

    const user = ''

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    
    useEffect(() => {
        const dialog = document.querySelector('#filterDialog') as any
        console.log({dialog})
        if (toggleModal) {
            dialog.showModal()
        } else {
            dialog.close()
        }
    }, [toggleModal])

    return (
        <EventContext.Provider
            value={{
                searchValue,
                setSearchValue,
                setToggleModal,
                toggleModal: false,
            }}
        >
            <div className='marketplace'>
                <dialog
                    className={` ${toggleModal ? 'filterDialog' : '!hidden'}`}
                    id='filterDialog'
                >
                    <form
                        id='register'
                        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid m-2 gap-6 md:(w-2/5 mx-auto)'
                        onSubmit={handleSubmit}
                    >
                        <div className='mb-2'>
                            <div className='grid'>
                                <h3 className='font-bold text-lg text-black border-b border-b-gray-400 mb-4'>
                                    Personal
                                </h3>

                                <div>
                                    <label
                                        className='block text-gray-700 text-sm mb-1'
                                        htmlFor='username'
                                    >
                                        Username
                                    </label>
                                    <input
                                        className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white`}
                                        id='username'
                                        name='username'
                                        
                                        type='text'
                                        minLength={4}
                                        value={user}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    className='block text-gray-700 text-sm mb-1'
                                    htmlFor='phoneNumber'
                                >
                                    Phone No
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white `}
                                    id='phoneNumber'
                                    type='number'
                                    name='phoneNumber'
                                    disabled
                                    value={user}
                                />
                            </div>
                            <div>
                                <label
                                    className='block text-gray-700 text-sm mb-1'
                                    htmlFor='username'
                                >
                                    Email
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white `}
                                    id='email'
                                    type='email'
                                    name='email'
                                    disabled
                                    value={user}
                                />
                            </div>
                        </div>

                        <div className='grid'>
                            <h3 className='font-bold text-lg text-black border-b border-b-gray-400 mb-4'>
                                Wallet Address
                            </h3>

                            <div>
                                <label
                                    className='block text-gray-700 text-sm mb-1'
                                    htmlFor='usdtAddress'
                                >
                                    USDT TRC20
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white`}
                                    id='usdtAddress'
                                    disabled
                                    name='usdtAddress'
                                    type='text'
                                    minLength={15}
                                    value={user}
                                />
                            </div>
                        </div>
                        <div className='grid'>
                            <h3 className='font-bold text-lg text-black border-b border-b-gray-400 mb-4'>
                                Details
                            </h3>

                            <div className='grid text-black'>
                                <div className='flex justify-between'>
                                    <p>Verified</p>
                                    <p>{user.toString()}</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-around'>
                            <button
                                className='bg-orange-300 text-[#1a1a2d] font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline  justify-self-center'
                                type='button'
                                onClick={() => setToggleModal(false)}
                            >
                                Close
                            </button>
                            {/* <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline  justify-self-center'
                            type='submit'
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button> */}
                        </div>
                    </form>
                </dialog>
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
