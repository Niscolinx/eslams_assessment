import 'windi.css'
import 'animate.css/animate.min.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import Layout from '../components/Layout'
import '../sass/main.scss'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {

    return (
        <>
                <ThemeProvider attribute='class' defaultTheme='light'>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
        </>
    )
}

export default MyApp
