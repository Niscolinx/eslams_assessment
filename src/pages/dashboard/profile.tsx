import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { BsFillPencilFill, BsFillFilePersonFill } from 'react-icons/bs'
import { IoMdSchool } from 'react-icons/io'
import { MdFamilyRestroom } from 'react-icons/md'

import { CircularProgress } from '@mui/material'
import { IUser } from '../../models/User'

const routes = ['General', 'Events']

const GeneralDetails = ({ userData }: { userData: IUser }) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        guardianEmail,
        guardianName,
        guardianPhoneNumber,
        guardianRelationship,
        birthDay,
        institutionName,
        institutionType,
        institutionYearOfStudy,
    } = userData

    return (
        <div className='generalDetails'>
            <div className='content-1'>
                <h3 className='content-1__heading'>
                    <BsFillFilePersonFill className='content-1__heading--icon' />
                    Personal Details
                </h3>
                <div className='content-1__box'>
                    <p className='content-1__name'>
                        <span>Name:</span> {firstName} {lastName}
                    </p>
                    <p className='content-1__name'>
                        <span>Email: </span> {email}
                    </p>
                    <p className='content-1__name'>
                        <span>Phone Number:</span> {phoneNumber}
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
                        <span>Guardian/Parent Name:</span> {guardianName}
                    </p>
                    <p className='content-1__name'>
                        <span>Guardian/Parent Phone:</span>{' '}
                        {guardianPhoneNumber}
                    </p>
                    <p className='content-1__name'>
                        <span>Guardian/Parent Email:</span> {guardianEmail}
                    </p>
                    <p className='content-1__name'>
                        <span>Guardian/Parent Relationship:</span>{' '}
                        {guardianRelationship}
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
                        <span>Institution Name:</span> {institutionName}
                    </p>
                    <p className='content-1__name'>
                        <span>Institution Type:</span> {institutionType}
                    </p>
                    <p className='content-1__name'>
                        <span>Year of Study:</span> {institutionYearOfStudy}
                    </p>
                </div>
            </div>
        </div>
    )
}

interface EventProps {
    heading: string
    price: number
    which: number
    date: {
        from: string
        to?: string
    }
}

const Event = ({ heading, price, date: { from, to }, which }: EventProps) => {
    return (
        <div className='registeredEvent'>
            <div className='registeredEvent__side registeredEvent__side--front'>
                <div
                    className={`registeredEvent__picture registeredEvent__picture--${which}`}
                >
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
            </div>
        </div>
    )
}

const RegisteredEvents = ({
    loading,
    eventData,
}: {
    loading: boolean
    eventData: EventProps[]
}) => {
    return (
        <div className=' registeredEvents'>
            <div className='registeredEvents__heading'>
                <h3 className='registeredEvents__heading--text'>
                    Registered Events
                </h3>{' '}
            </div>
            <div className='registeredEvents__container'>
                {loading ? (
                    <CircularProgress
                        className='flex justify-self-center'
                        size={15}
                        style={{ color: 'black' }}
                    />
                ) : eventData.length > 0 ? (
                    eventData.map((event, index) => (
                        <Event key={index} {...event} />
                    ))
                ) : (
                    <p className='text-center'>No registered Event yet</p>
                )}
            </div>
        </div>
    )
}

function profile() {
    const [userData, setUserData] = useState<IUser | null>(null)
    const [route, routeToDisplay] = useState<JSX.Element | null>(null)
    const [eventData, setEventData] = useState<EventProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('/api/getUserData')
            .then(({ data }) => {
                const { user, userEvents } = data
                const transFormedData = userEvents.map(
                    (item: EventProps, index: number) => {
                        return {
                            ...item,
                            which: (index % 3) + 1,
                            date: {
                                from: new Date(
                                    item.date.from
                                ).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                }),
                                to:
                                    item.date.to &&
                                    new Date(item.date.to).toLocaleDateString(
                                        'en-GB',
                                        {
                                            day: 'numeric',
                                            month: 'short',
                                        }
                                    ),
                            },
                        }
                    }
                )
                setLoading(false)

                setEventData(transFormedData)
                setUserData(user)
                routeToDisplay(<GeneralDetails userData={user} />)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    console.log(userData)
    const handleNav = (route: React.ChangeEvent<HTMLInputElement>) => {
        const el = route.currentTarget.value

        switch (el) {
            case 'General':
                return routeToDisplay(<GeneralDetails userData={userData!} />)

            case 'Events':
                return routeToDisplay(
                    <RegisteredEvents
                        loading={loading}
                        eventData={eventData!}
                    />
                )

            default:
                return routeToDisplay(<GeneralDetails userData={userData!} />)
        }
    }

    const { email, firstName, lastName, createdAt } = userData || {}

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
                                {firstName} {lastName}
                            </h3>
                            <p className='details__email'>{email}</p>
                            <p className='details__joined'>
                                Joined{' '}
                                {createdAt &&
                                    new Date(createdAt).toLocaleDateString(
                                        'en-GB',
                                        {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        }
                                    )}
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
                            <div className='details__box'>
                                {userData && route}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile
