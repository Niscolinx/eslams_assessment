import React, { useState } from 'react'
import Image from 'next/image'
import { BsFillPencilFill } from 'react-icons/bs'

const LIST = ['General', 'Events']

function profile() {
    const [renderToDisplay, setRenderToDisplay] = useState<
        Element | undefined
    >()

    const handleNav = (route: React.ChangeEvent<HTMLInputElement>) => {
        const el = route.currentTarget.value

        switch (el) {
            case 'General':
                ;<div>General</div>

            case 'Events':
                ;<div>Hello world</div>

            default:
                ;<div>General</div>
        }
    }

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
                            <p className='details__email'>
                                Munisco12@gmail.com
                            </p>
                            <p className='details__joined'>
                                Joined February 2022
                            </p>
                        </div>
                    </div>

                    <div className='profile__secondary'>
                        <ul className='profile__secondary--list'>
                            <li className='invisible'>&nbsp;</li>

                            {LIST.map((item) => (
                                <div key={item} className='grid gap-1'>
                                    <input
                                        type='radio'
                                        defaultChecked={
                                            item === 'General' ? true : false
                                        }
                                        value={item}
                                        name='list'
                                        id={item}
                                        onChange={handleNav}
                                    />
                                    <label
                                        htmlFor={item}
                                        className='list__item'
                                    >
                                        {item}
                                    </label>
                                </div>
                            ))}

                            <li className='invisible'>&nbsp;</li>
                        </ul>

                        <div className='profile__secondary--details'>
                            <div className='details__box'>
                                {renderToDisplay}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile
