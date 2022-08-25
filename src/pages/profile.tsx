import React, { useState } from 'react'
import Image from 'next/image'
import { BsFillPencilFill } from 'react-icons/bs'
import {IoSchoolSharp} from 'react-icons/io'

const routes = ['General', 'Events']

const GeneralDetails = () => {
    return (
        <div className='generalDetails'>
            <div className='generalDetails__content'>
                <div className='content-1'>
                    <h3 className='content-1__heading'>Personal Details</h3>
                    <div className='content-1__box'>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                    </div>
                </div>
                <div className='content-1'>
                    <h3 className='content-1__heading'>
                        Guardian/Parent Details
                    </h3>
                    <div className='content-1__box'>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                    </div>
                </div>
                <div className='content-1'>
                    <h3 className='content-1__heading'>
                        <IoSchoolSharp/>
                        Education </h3>
                    <div className='content-1__box'>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        <p className='content-1__name'>
                            <span>Name:</span> Igboanugwo Collins
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const RegisteredEvents = () => {
    return <div className='profile__RegisteredEvents'>Registered Events</div>
}

function profile() {
    const [route, routeToDisplay] = useState(<GeneralDetails />)

    // const renderToDisplay = (route: any) => {
    //     console.log({route})
    //     return <route/>
    // }

    const handleNav = (route: React.ChangeEvent<HTMLInputElement>) => {
        const el = route.currentTarget.value

        console.log(el)

        switch (el) {
            case 'General':
                return routeToDisplay(<GeneralDetails />)

            case 'Events':
                return routeToDisplay(<RegisteredEvents />)

            default:
                return route
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
                        <ul className='profile__secondary--route'>
                            <li className='invisible'>&nbsp;</li>

                            {routes.map((item) => (
                                <div key={item} className='grid gap-1'>
                                    <input
                                        type='radio'
                                        defaultChecked={
                                            item === 'General' ? true : false
                                        }
                                        value={item}
                                        name='route'
                                        id={item}
                                        onChange={handleNav}
                                    />
                                    <label
                                        htmlFor={item}
                                        className='route__item'
                                    >
                                        {item}
                                    </label>
                                </div>
                            ))}

                            <li className='invisible'>&nbsp;</li>
                        </ul>

                        <div className='profile__secondary--details'>
                            <div className='details__box'>{route}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile
