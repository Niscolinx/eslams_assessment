import 'windi.css'
import 'animate.css/animate.min.css'

import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import {useRouter} from 'next/router'

import Layout from '../components/Layout'
import '../styles/globals.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url:string) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        router.events.on('hashChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events])

    

    return (
        <>
            <Script
                strategy='afterInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id='gtag-init'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Script
                async
                strategy='afterInteractive'
                src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2898233620454044'
                crossOrigin='anonymous'
            />
            <SessionProvider session={session}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistedStore}>
                        <ThemeProvider attribute='class' defaultTheme='dark'>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </ThemeProvider>
                    </PersistGate>
                </Provider>
            </SessionProvider>{' '}
        </>
    )
}

export default MyApp
