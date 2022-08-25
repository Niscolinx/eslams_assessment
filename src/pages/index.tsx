import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { GetSessionParams, getSession } from 'next-auth/react'

import Image from 'next/image'

import { BiNotepad } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { VscSettings } from 'react-icons/vsc'

import Events from '../components/Events'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const SearchBox = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className='hidden md:flex relative items-center '>
                <FiSearch className='absolute left-2'/>
                <input
                    type='text'
                    placeholder='Search'
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

const Index = () => {
    return (
        <div className='marketplace'>
            <div className='marketplace__container'>
                <div className='grid relative z-3'>
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
                                        <span className='text-white text-[12px]'>
                                            3
                                        </span>
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

                    <main className='main'>
                        <div className='banner'>
                            <div className='banner__text'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Natus, modi deserunt.
                                Accusantium doloremque corrupti saepe fuga,
                                exercitationem natus labore possimus alias iusto
                                laudantium deserunt ducimus veritatis sint
                                incidunt a maiores.
                                <button className='banner__text--btn'>
                                    Access Our Community
                                    <span>
                                        <HiOutlineArrowNarrowRight />
                                    </span>
                                </button>
                            </div>
                            <Image
                                src='/banner.png'
                                width='300px'
                                height='300px'
                            />
                        </div>
                        <Events />
                    </main>

                    <footer className='footer'></footer>
                </div>
            </div>
        </div>
    )
}

export default Index

// export async function getServerSideProps(
//     context: GetSessionParams | undefined
// ) {
//     const session = await getSession(context)

//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/auth/login',
//                 permanent: false,
//             },
//         }
//     }

//     return {
//         props: { session },
//     }
// }
