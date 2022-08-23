import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { GetSessionParams, getSession } from 'next-auth/react'

import Image from 'next/image'

import {BiNotepad} from 'react-icons/bi'

const Index = () => {
   

    return (
        <div className='marketplace'>

            <div className='marketplace__container'>
                <header className='marketplace__header'>
                    <Image src='/logo.jpeg' layout='fill'/>

                </header>


               

                <footer className='marketplace__footer'></footer>
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
