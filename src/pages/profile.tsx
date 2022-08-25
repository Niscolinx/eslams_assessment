import React from 'react'
import Image from 'next/image'

function profile() {
    return (
        <div className='profile'>
            <div className='profile__box'>
                <div className='profile__primary'>
                    <div className='profile__primary--picture'>
                        <div className='picture__cover'>
                          <Image src='/img/event.png' 
                          width='100%'
                          height='100%'/>
                        </div>
                        <div className='picture__avatar'>personal picture</div>
                    </div>

                    <div className='profile__primary--details'>Form</div>
                </div>

                <div className='profile__secondary'>The Events</div>
            </div>
        </div>
    )
}

export default profile
