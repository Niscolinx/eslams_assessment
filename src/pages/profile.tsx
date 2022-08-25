import React from 'react'

function profile() {
    return (
        <div className='profile'>
            <div className='profile__primary'>

              <div className="profile__primary--picture">
                <div className="picture__cover">cover picture</div>
                <div className="picture__avatar">personal picture</div>
              </div>

              <div className="profile__primary--details">
                Form
              </div>
            </div>

            <div className='profile__secondary'>The Events</div>
        </div>
    )
}

export default profile
