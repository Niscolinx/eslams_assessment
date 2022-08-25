import React, { useState } from 'react'
import Image from 'next/image'
import { BsFillPencilFill, BsFillFilePersonFill } from 'react-icons/bs'
import {IoMdSchool} from 'react-icons/io'
import {MdFamilyRestroom} from 'react-icons/md'

const routes = ['General', 'Events']

const GeneralDetails = () => {
    return (
        <div className='generalDetails'>
            <div className='generalDetails__content'>
                <div className='content-1'>
                    <h3 className='content-1__heading'>
                        <BsFillFilePersonFill className='content-1__heading--icon' />
                        Personal Details
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
                        <MdFamilyRestroom className='content-1__heading--icon' />
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
                        <IoMdSchool className='content-1__heading--icon' />
                        Education{' '}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

interface EventProps {
    heading: string
    details: string[]
    price: number
    which: number
    date: {
        from: string
        to?: string
    }
}

const Event = ({
    heading,
    details,
    price,
    date: { from, to },
    which,
}: EventProps) => {
    return (
        <div className='registeredEvent'>
            <div className='registeredEvent__side registeredEvent__side--front'>
                <div className={`registeredEvent__picture registeredEvent__picture--${which}`}>
                    <div className='registeredEvent__picture--date'>
                        <span>
                            {from.split(' ')[0]} <sup>{from.split(' ')[1]}</sup>
                        </span>
                        {to ? <span>&rarr;</span> : ''}
                        <span>
                            {to?.split(' ')[0]} <sup>{to?.split(' ')[1]}</sup>
                        </span>
                    </div>
                </div>
                <h4 className='registeredEvent__heading'>
                    <span
                        className={`registeredEvent__heading-span registeredEvent__heading-span--${which}`}
                    >
                        {heading}
                    </span>
                </h4>
                <div className='registeredEvent__details'>
                    {details.length > 0 &&
                        details.map((item) => (
                            <ul>
                                <li>{item}</li>
                            </ul>
                        ))}
                    <ul></ul>
                </div>
            </div>
            
        </div>
    )
}



const RegisteredEvents = () => {
     return (
         <div className=' registeredEvents -mt-10'>
             <div className='registeredEvents__heading'>
                 <h1 className='registeredEvents__heading--text'>Registred Events</h1>{' '}
                 <span></span>
             </div>
             <div className='registeredEvents__container'>
                 <Event
                     heading='USA BASKETBALL SHOWCASE PRESENTED BY COINBASE'
                     price={1200}
                     details={[
                         'Basketball, Water and Training Supplies',
                         'Certfied Atletic trainers',
                         'Availability of Shuttles',
                         'NCAA Certified Checklist',
                     ]}
                     date={{
                         from: '10th Sep',
                     }}
                     which={1}
                 />
                 <Event
                     heading='2022 FIBA AmeriCup for Men'
                     price={1500}
                     details={[
                         'Basketball, Water and Training Supplies',
                         'Certfied Atletic trainers',
                         'Availability of Shuttles',
                         'NCAA Certified Checklist',
                     ]}
                     date={{
                         from: '5th Oct',
                         to: '9th Oct',
                     }}
                     which={2}
                 />
                 <Event
                     heading='FIBA 3x3 U23 World Cup (women)'
                     price={750}
                     details={[
                         'Basketball, Water and Training Supplies',
                         'Certfied Atletic trainers',
                         'Availability of Shuttles',
                         'NCAA Certified Checklist',
                     ]}
                     date={{ from: '2nd Sep', to: '11th Sep' }}
                     which={3}
                 />
                 <Event
                     heading='2022 USA Basketball Gold Camp (boys)'
                     price={1500}
                     details={[
                         'Basketball, Water and Training Supplies',
                         'Certfied Atletic trainers',
                         'Availability of Shuttles',
                         'NCAA Certified Checklist',
                     ]}
                     date={{
                         from: '4th Sep',
                         to: '5th Sep',
                     }}
                     which={1}
                 />
                 <Event
                     heading='2022 USA Basketball Coach Academy'
                     price={1500}
                     details={[
                         'Basketball, Water and Training Supplies',
                         'Certfied Atletic trainers',
                         'Availability of Shuttles',
                         'NCAA Certified Checklist',
                     ]}
                     date={{ from: '10th Sep' }}
                     which={2}
                 />
                 <Event
                     heading='2022 USA Basketball Gold Camp (girls)'
                     price={1500}
                     details={[
                         'Basketball, Water and Training Supplies',
                         'Certfied Atletic trainers',
                         'Availability of Shuttles',
                         'NCAA Certified Checklist',
                     ]}
                     date={{ from: '3rd Sep', to: '4th Sep' }}
                     which={3}
                 />
             </div>
         </div>
     )
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
