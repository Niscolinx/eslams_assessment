import React from 'react'
import Image from 'next/image'

interface EventProps {
    heading: string
    details: string[]
    price: number
    date?: string
}

const Event = ({ heading, details, price, date }: EventProps) => {
    return (
        <div className='event'>
            <div className='event__side event__side--front'>
                <div className='event__picture event__picture--1'>&nbsp;</div>
                <h4 className='event__heading'>
                    <span className='event__heading-span event__heading-span--1'>
                        {heading}
                    </span>
                </h4>
                <div className='event__details'>
                    {details.length > 0 &&
                        details.map((item) => (
                            <ul>
                                <li>{item}</li>
                            </ul>
                        ))}
                    <ul>
                      
                    </ul>
                </div>
            </div>
            <div className='event__side event__side--back event__side--back-1'>
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
        <div className='events'>
            <Event
                heading='March Madness'
                price={1200}
                details={[
                    'Basketball, Water and Training Supplies',
                    '3 day tours',
                    'Difficulty: easy',
                    'Up to 30 people',
                    '2 tour guides',
                ]}
            />
            <Event
                heading='NBA All Stars'
                price={1500}
                details={[
                    'Sleep in cozy hotels',
                    '3 day tours',
                    'Difficulty: easy',
                    'Up to 30 people',
                    '2 tour guides',
                ]}
            />
            <Event
                heading='Nike Events'
                price={750}
                details={[
                    'Sleep in cozy hotels',
                    '3 day tours',
                    'Difficulty: easy',
                    'Up to 30 people',
                    '2 tour guides',
                ]}
            />
            <Event
                heading='NBA All Stars'
                price={1500}
                details={[
                    'Sleep in cozy hotels',
                    '3 day tours',
                    'Difficulty: easy',
                    'Up to 30 people',
                    '2 tour guides',
                ]}
            />
            <Event
                heading='NBA All Stars'
                price={1500}
                details={[
                    'Sleep in cozy hotels',
                    '3 day tours',
                    'Difficulty: easy',
                    'Up to 30 people',
                    '2 tour guides',
                ]}
            />
            <Event
                heading='NBA All Stars'
                price={1500}
                details={[
                    'Sleep in cozy hotels',
                    '3 day tours',
                    'Difficulty: easy',
                    'Up to 30 people',
                    '2 tour guides',
                ]}
            />
        </div>
    )
}

export default Events
