import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { GetSessionParams, getSession } from 'next-auth/react'

import Image from 'next/image'

import { BiNotepad } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { VscSettings } from 'react-icons/vsc'

const SearchBox = () => {
    return (
        <div className='flex items-center'>
            <FiSearch />
            <input type='text' placeholder='Search' />
            <div className='flex'>
                <VscSettings />
                Filters
            </div>
        </div>
    )
}

const Index = () => {
    return (
        <div className='marketplace'>
            <div className='marketplace__container'>
                <div className='grid p-8 relative z-3'>
                    <header className='header'>
                        <Image
                            src='/logo.jpeg'
                            width={'75px'}
                            height={'75px'}
                            objectFit={'contain'}
                        />

                        <SearchBox />
                        <div className='flex'>
                            <div className='flex items-center'>
                                <BiNotepad className='bg-gray-400'/>
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

                    <main className='main'></main>

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
