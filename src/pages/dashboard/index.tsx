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
import { createContext, useState, useContext } from 'react'


type contextTypes = {
    searchValue: string[]
    setSearchValue: (searchValue: string[]) => void
}

const EventContext = createContext<contextTypes>({
    searchValue: [''],
    setSearchValue: (searchValue: string[]) => { }
})

const SearchBox = () => {
    const { searchValue, setSearchValue } = useContext(EventContext)

    console.log({searchValue})


    return (
        <div className='flex items-center gap-2'>
            <div className='hidden md:flex relative items-center '>
                <FiSearch className='absolute left-2' />
                <input
                    type='text'
                    placeholder='Search'
                    value={searchValue}
                    onChange={(e) => setSearchValue(['sfd'])}
                    className='rounded-3xl py-2 px-3 pl-10 w-80 outline-none border-none'
                />
            </div>
            <div className='flex bg-[#d9d6d6] items-center gap-2 py-2 px-3 rounded-3xl'>
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

type HeaderProps = {
    isComingSoon: boolean
    isBlog: boolean
}

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
    const [searchValue, setSearchValue] = useState(['hello'])

    

    return (
        <EventContext.Provider
            value={{
                searchValue,
                setSearchValue,
            }}
        >
            <div className='marketplace'>
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
                            <Events heading={['']} />
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
