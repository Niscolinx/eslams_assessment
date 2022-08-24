import React from 'react'
import Image from 'next/image'

interface EventProps {
    heading: string
    details: string[]
    amount: number
    date: string
}

const Event = ({ heading, details, amount, date }: EventProps) => {
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
                    {details.length > 0 && details.map(item => (
                        <ul>
                            <li>{item}</li>
                        </ul>
                    ))}
                    <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                    </ul>
                </div>
            </div>
            <div className='event__side event__side--back event__side--back-1'>
                <div className='event__cta'>
                    <div className='event__price-box'>
                        <p className='event__price-only'>Only</p>
                        <p className='event__price-value'>$297</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                        Book now!
                    </a>
                </div>
            </div>
        </div>
    )
}

function Events() {
    return (
        <div className='events'>
            <Event />
        </div>
    )
}

export default Events
