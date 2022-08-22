import React, { useEffect, useState, useMemo } from 'react'
import Footer from './Footer'
import Nav from './nav'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LiveTicker from '../widgets/LiveTicker'
import { NavContext } from './Context'

const Layout: React.FC<{}> = ({ children }) => {
    const { data: session } = useSession()
    const router = useRouter()
    const [addMargin, setAddMargin] = useState('')
    const [addPadding, setAddPadding] = useState('')
    const [visibility, setVisibility] = useState('hidden')
    const [hideFooter, setHideFooter] = useState(false)
    const [isVerified, setIsVerified] = useState(false)

    useEffect(() => {
        router.asPath === '/' ? setVisibility('flex') : setVisibility('hidden')

        if (router.asPath.includes('earn') || router.asPath.includes('adminDashboard')) {
            setAddMargin('mb-0')
            setAddPadding('')
        } else {
            setAddMargin('mb-25')
            setAddPadding('py-2')
        }

        if (router.asPath.includes('adminDashboard')) {
            setHideFooter(true)
        } else {
            setHideFooter(false)
        }
    }, [router])

    useEffect(() => {
        var ads = document.getElementsByClassName('adsbygoogle').length
        for (var i = 0; i < ads; i++) {
            console.log({ ads })
            try {
               // (adsbygoogle = window.adsbygoogle || []).push({})
            } catch (e) {
                console.log({e})
            }
        }
    }, [])
    

    const navContext = useMemo(() => {
        return {
            isVerified,
            setIsVerified,
        }
    }, [isVerified, setIsVerified])

    return (
        <>
            <div className={visibility}>
                <LiveTicker />
            </div>
            <div
                className={`${addPadding} bg-[#1a1a2d] text-[#ccccd0] mx-auto relative light:(bg-[#ccccd0] text-[#1a1a2d])`}
            >
                <NavContext.Provider value={navContext}>
                    <Nav session={session} />

                    <main className={`${addMargin} overflow-x-hidden`}>
                        {children}
                    </main>
                    <Footer hideFooter={hideFooter} />
                </NavContext.Provider>
            </div>
        </>
    )
}

export default Layout
