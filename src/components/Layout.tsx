import React from 'react'


const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <div>

                <main className='mx-auto max-w-[1500px] overflow-hidden'>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
