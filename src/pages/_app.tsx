import 'windi.css'
import 'animate.css/animate.min.css'

import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistedStore, store } from '../store/app/store'
import { PersistGate } from 'redux-persist/integration/react'
import { CookiesProvider } from 'react-cookie'

import Layout from '../components/Layout'
import '../sass/main.scss'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <CookiesProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </CookiesProvider>
                </PersistGate>
            </Provider>
        </>
    )
}

export default MyApp
