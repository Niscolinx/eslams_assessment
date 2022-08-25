import React from 'react'
import Image from 'next/image'
import { BsFillPencilFill } from 'react-icons/bs'

function profile() {
    return (
        <div className='profile'>
            <div className='profile__box'>
                <div className='profile__content'>
                    <div className='profile__primary'>
                        <div className='profile__primary--picture'>
                            <div className='picture__cover'>
                                <img
                                    src='/img/event1.jpg'
                                    width='100%'
                                    height='100%'
                                    className='picture__cover--img'
                                    alt='cover'
                                    // layout='intrinsic'
                                />
                            </div>
                            <div className='picture__avatar'>
                                <img
                                    src='/img/avatar.jpeg
                                '
                                    width='100%'
                                    height='100%'
                                    className='picture__avatar--img'
                                    alt='cover'
                                />
                            </div>
                        </div>
                        <div className='profile__primary--edit'>
                            <BsFillPencilFill className='' />
                            <p className='edit__btn'>Edit profile</p>
                        </div>
                        <div className="profile__primary--details">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit soluta id molestiae maiores accusamus neque ducimus. Debitis dolores eaque odit et perferendis illo ab repellat amet, iste reiciendis delectus provident.
                        </div>
                    </div>

                    <div className='profile__secondary mt-20'>Form</div>

                    <div className='profile__tertiary'>The Events</div>
                </div>
            </div>
        </div>
    )
}

export default profile
