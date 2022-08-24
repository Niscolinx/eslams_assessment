import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <title>eslams</title>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossOrigin='true'
            />
            <link
                href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap'
                rel='stylesheet'
            ></link>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
