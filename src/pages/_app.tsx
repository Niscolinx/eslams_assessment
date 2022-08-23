import 'windi.css'
import 'animate.css/animate.min.css'

import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import '../sass/main.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter()

    return (
        <>
            <SessionProvider session={session}>
                <ThemeProvider attribute='class' defaultTheme='light'>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </SessionProvider>
        </>
    )
}

export default MyApp
