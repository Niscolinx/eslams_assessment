import React from 'react'


const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <div>
                {/* <Nav session={session} /> */}

                <main className='mx-auto max-w-[1500px] overflow-hidden'>
                    {children}
                </main>
                {/* <Footer hideFooter={hideFooter} /> */}
            </div>
        </>
    )
}

export default Layout
