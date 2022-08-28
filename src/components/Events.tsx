import React from 'react'
import Image from 'next/image'

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

const EVENTDATA = [
    {
        heading: 'USA BASKETBALL SHOWCASE PRESENTED BY COINBASE',
        price: 1200,
        details: [
            'Basketball, Water and Training Supplies',
            'Certfied Atletic trainers',
            'Availability of Shuttles',
            'NCAA Certified Checklist',
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
            'Basketball, Water and Training Supplies',
            'Certfied Atletic trainers',
            'Availability of Shuttles',
            'NCAA Certified Checklist',
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
            'Basketball, Water and Training Supplies',
            'Certfied Atletic trainers',
            'Availability of Shuttles',
            'NCAA Certified Checklist',
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
            'Basketball, Water and Training Supplies',
            'Certfied Atletic trainers',
            'Availability of Shuttles',
            'NCAA Certified Checklist',
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
            'Basketball, Water and Training Supplies',
            'Certfied Atletic trainers',
            'Availability of Shuttles',
            'NCAA Certified Checklist',
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
            'Basketball, Water and Training Supplies',
            'Certfied Atletic trainers',
            'Availability of Shuttles',
            'NCAA Certified Checklist',
        ],
        date: {
             from: '3rd Sep', to: '4th Sep' 
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
        <div className='event'>
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
                        details.map((item) => (
                            <ul key={item}>
                                <li>{item}</li>
                            </ul>
                        ))}
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
    return (
        <div className='p-8 events'>
            <div className='events__heading'>
                <span></span>{' '}
                <h1 className='events__heading--text'>Upcoming Events</h1>{' '}
                <span></span>
            </div>
            <div className='events__container'>
               
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

export default Events
