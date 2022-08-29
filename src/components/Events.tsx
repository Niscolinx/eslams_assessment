import React, { useContext } from 'react'
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
        price: 1200,
        details: [
            { Age: '21' },
            { 'Competition Type': 'single elimination' },
            { location: 'USA' },
            {
                'Registration Requirements': [
                    '18 and Above',
                    'Individual Registration',
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
            { location: 'USA' },
            {
                'Registration Requirements': [
                    '18 and Above',
                    'Individual Registration',
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
        price: 1600,
        details: [
            { Age: '21' },
            { 'Competition Type': 'single elimination' },
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
        heading: '2022 USA Basketball Gold Camp (boys)',
        price: 999,
        details: [
            { Age: '21' },
            { 'Competition Type': 'single elimination' },
            { location: 'USA' },
            {
                'Registration Requirements': [
                    '18 and Above',
                    'Individual Registration',
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
        heading: '2022 USA Basketball Coach Academy',
        price: 1090,
        details: [
            { Age: '21' },
            { 'Competition Type': 'single elimination' },
            { location: 'USA' },
            {
                'Registration Requirements': [
                    '18 and Above',
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
        heading: '2022 USA Basketball Gold Camp (girls)',
        price: 1100,
        details: [
            { Age: '21' },
            { 'Competition Type': 'single elimination' },
            { location: 'USA' },
            {
                'Registration Requirements': [
                    '18 and Above',
                    'Individual Registration',
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
        <div className='event max-w-[300px] min-w-[150px]'>
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
                <div className='event__details'>
                    {details.length > 0 &&
                        details.map((item, i) => {
                            const [key, value] = Object.entries(item)[0]

                            console.log(Array.isArray(value))
                            return (
                                <ul key={i}>
                                    <li>
                                        <span>{key}</span>:{' '}
                                        <span>
                                            {key ===
                                                'Registration Requirements' &&
                                            Array.isArray(value) ? (
                                                <span>
                                                    {value.map((item) => (
                                                        <li key={item}>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </span>
                                            ) : (
                                                value
                                            )}
                                        </span>
                                    </li>
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
    const { searchValue } = useContext(EventContext)

    console.log({ searchValue })
    return (
        <div className='p-8 events'>
            <div className='events__heading'>
                <span></span>{' '}
                <h1 className='events__heading--text'>Upcoming Events</h1>{' '}
                <span></span>
            </div>
            <div className='events__container'>
                {EVENTDATA.map((item) => {
                    return item.heading.toLowerCase().includes(searchValue) ? (
                        <Event key={item.heading} {...item} />
                    ) : null
                })}
            </div>
        </div>
    )
}

export default Events
