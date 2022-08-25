import React from 'react'

function profile() {
    return (
        <div className='profile'>
            <div className='profile__primary'>

              <div className="profile__primary--picture">
                <div className="picture__cover"></div>
                <div className="picture__avatar"></div>
              </div>
            </div>

            <div className='profile__secondary'>The Events</div>
        </div>
    )
}

export default profile
