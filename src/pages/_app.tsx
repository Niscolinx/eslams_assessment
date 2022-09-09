import 'windi.css'
import 'animate.css/animate.min.css'

import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/app/store'

import Layout from '../components/Layout'
import '../sass/main.scss'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {

    return (
        <>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    )
}

export default MyApp
