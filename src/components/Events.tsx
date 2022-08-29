import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { EventContext } from '../pages/dashboard'

interface EventProps {
    heading: string
    details: {
        [key: string]: string | string[]
    }[]
    price: number
    which: number
    date: {
        from: string
        to?: string
    }
}

const EVENTDATA: EventProps[] = [
    {
        heading: 'USA BASKETBALL SHOWCASE',
        price: 12000,
        details: [
            { Age: '25' },
            { 'Competition Type': 'round robin triple split' },
            { location: 'USA' },
            {
                'Registration Requirements': [
                    '18 and Above',
                ],
            },
        ],
        date: {
            from: '10th Sep',
        },
        which: 1,
    },
    {
        heading: '2022 FIBA AmeriCup for Men',
        price: 1500,
        details: [
            { Age: '21' },
            { 'Competition Type': 'single elimination' },
            { location: 'Canada' },
            {
                'Registration Requirements': [
                    '18 and Above',
                    'Individual Registration',
                    'Group Registration',
                ],
            },
        ],
        date: {
            from: '5th Oct',
            to: '9th Oct',
        },
        which: 2,
    },
    {
        heading: 'FIBA 3x3 U23 World Cup (women)',
        price: 59000,
        details: [
            { Age: '15' },
            { 'Competition Type': 'semi-round robins' },
            { location: 'USA' },
            {
                'Registration Requirements': [
                    '18 and Above',
                    'Individual Registration',
                ],
            },
        ],
        date: {
            from: '2nd Sep',
            to: '11th Sep',
        },
        which: 3,
    },
    {
        heading: '2022 USA Basketball (boys)',
        price: 99094,
        details: [
            { Age: '23' },
            { 'Competition Type': 'multilevel' },
            { location: 'Mexico' },
            {
                'Registration Requirements': [
                    'Group Registration',
                ],
            },
        ],
        date: {
            from: '4th Sep',
            to: '5th Sep',
        },
        which: 1,
    },
    {
        heading: '2022 USA Basketball Academy',
        price: 11200,
        details: [
            { Age: '32' },
            { 'Competition Type': 'multilevel' },
            { location: 'Canada' },
            {
                'Registration Requirements': [
                    'Individual Registration',
                ],
            },
        ],
        date: {
            from: '9th Sep',
        },
        which: 2,
    },
    {
        heading: '2022 USA Basketball (girls)',
        price: 85070,
        details: [
            { Age: '18' },
            { 'Competition Type': 'single elimination' },
            { location: 'Mexico' },
            {
                'Registration Requirements': [
                    '18 and Above',
                    'Group Registration',
                ],
            },
        ],
        date: {
            from: '3rd Sep',
            to: '4th Sep',
        },
        which: 3,
    },
]

const Event = ({
    heading,
    details,
    price,
    date: { from, to },
    which,
}: EventProps) => {
    return (
        <div className='event md:w-[250px] lg:w-[350px]'>
            <div className='event__side event__side--front'>
                <div className={`event__picture event__picture--${which}`}>
                    <div className='event__picture--date'>
                        <span>
                            {from.split(' ')[0]} <sup>{from.split(' ')[1]}</sup>
                        </span>
                        {to ? <span>&rarr;</span> : ''}
                        <span>
                            {to?.split(' ')[0]} <sup>{to?.split(' ')[1]}</sup>
                        </span>
                    </div>
                </div>
                <h4 className='event__heading'>
                    <span
                        className={`event__heading-span event__heading-span--${which}`}
                    >
                        {heading}
                    </span>
                </h4>
                <div className='event__details '>
                    {details.length > 0 &&
                        details.map((item, i) => {
                            const [key, value] = Object.entries(item)[0]

                            return (
                                <ul key={i} className='event__details--list '>
                                    <div
                                        className={
                                            key !== 'Registration Requirements'
                                                ? 'flex gap-1 justify-items-end'
                                                : ''
                                        }
                                    >
                                        <span
                                            className={
                                                key ===
                                                'Registration Requirements'
                                                    ? 'font-medium'
                                                    : ''
                                            }
                                        >
                                            {key}
                                        </span>
                                        :
                                        <span className='font-medium'>
                                            {key ===
                                                'Registration Requirements' &&
                                            Array.isArray(value) ? (
                                                <span className='font-medium'>
                                                    {value.map((item) => (
                                                        <li
                                                            key={item}
                                                            className={`event__details--list-${which}`}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </span>
                                            ) : (
                                                value
                                            )}
                                        </span>
                                    </div>
                                </ul>
                            )
                        })}
                    <ul></ul>
                </div>
            </div>
            <div
                className={`event__side event__side--back event__side--back-${which}`}
            >
                <div className='event__cta'>
                    <div className='event__price-box'>
                        <p className='event__price-only'>Only</p>
                        <p className='event__price-value'>${price}</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                        Register now!
                    </a>
                </div>
            </div>
        </div>
    )
}

function Events() {

    const {
        searchValue,
        showFilteredData
    } = useContext(EventContext)

    useEffect(() => {
       
        console.log({showFilteredData})

        


    }, [showFilteredData])

    return (
        <div className='p-8 events'>
            <div className='events__heading'>
                <span></span>{' '}
                <h1 className='events__heading--text'>Upcoming Events</h1>{' '}
                <span></span>
            </div>
            <div className='events__container'>
                {EVENTDATA.map((item) => {
                    console.log(item.details)
                    return item.heading.toLowerCase().includes(searchValue) ? (
                        <Event key={item.heading} {...item} />
                    ) : null
                })}
            </div>
        </div>
    )
}

export default Events
