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
                        <div className='profile__primary--details'>
                            <h3 className='details__name'>
                                Igboanugwo Collins
                            </h3>
                            <p className='details__email'>Munisco12@gmail.com</p>
                            <p className="details__joined">
                                Joined February 2022
                            </p>
                        </div>
                    </div>

                    <div className='profile__secondary'>

                        <ul className='profile__secondary--list'>
                            <li className='list__item'>
                                General
                            </li>
                            <li className='list__item'>
                                General
                            </li>
                            <li className='list__Item'>
                                Events
                            </li>
                        </ul>

                        <div className="profile__secondary--details">
                            <div className="details__box">

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia tempora architecto aut, odit facere minus dolores ullam error ipsa, unde magnam quo libero nam laudantium totam voluptatem velit! Saepe, hic?
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default profile
