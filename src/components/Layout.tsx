import React, { useEffect, useState, useMemo } from 'react'
import Footer from './Footer'
import Nav from './nav'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
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

      

        if (router.asPath.includes('login')) {
            setHideFooter(true)
        } else {
            setHideFooter(false)
        }
    }, [router])

    
    

    const navContext = useMemo(() => {
        return {
            isVerified,
            setIsVerified,
        }
    }, [isVerified, setIsVerified])

    return (
        <>
           
            <div
            >
                <NavContext.Provider value={navContext}>
                    {/* <Nav session={session} /> */}

                    <main className='mx-auto max-w-[1500px] overflow-hidden'>{children}</main>
                    {/* <Footer hideFooter={hideFooter} /> */}
                </NavContext.Provider>
            </div>
        </>
    )
}

export default Layout
