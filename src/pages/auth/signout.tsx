import React from 'react'
import { signOut } from 'next-auth/react'

function signout() {
    const clearLocalStorage = () => {
        localStorage.clear()

        signOut()
    }

    return (
        <div className='grid h-screen overflow-hidden absolute left-0 top-0 bottom-0 right-0 w-full bg-[#1e1e35]'>
            <div className='grid content-center justify-center'>
                <div className='border border-gray-500 py-10 px-5 grid justify-items-center gap-3 rounded-lg'>
                    <h1 className='text-2xl'>Sign Out</h1>
                    <p className='text-xl'>
                        Are you sure you want to sign out?
                    </p>
                    <button
                        onClick={clearLocalStorage}
                        className={`bg-orange-300 text-[#1a1a2d] rounded px-2 text-lg`}
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default signout
