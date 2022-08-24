import React from 'react'
import Image from 'next/image'

interface EventProps {
    heading: string
    details: string[]
    price: number
    date: {
        from: string
        to?: string
    }
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
                heading='USA BASKETBALL SHOWCASE PRESENTED BY COINBASE'
                price={1200}
                details={[
                    'Basketball, Water and Training Supplies',
                    'Certfied Atletic trainers',
                    'Availability of Shuttles',
                    'NCAA Certified Checklist',
                    'Waivers of Liability',
                ]}
            />
            <Event
                heading='NBA All Stars'
                price={1500}
                details={[
                    'Basketball, Water and Training Supplies',
                    'Certfied Atletic trainers',
                    'Availability of Shuttles',
                    'NCAA Certified Checklist',
                    'Waivers of Liability',
                ]}
            />
            <Event
                heading='2022 FIBA AmeriCup for Men'
                price={750}
                details={[
                    'Basketball, Water and Training Supplies',
                    'Certfied Atletic trainers',
                    'Availability of Shuttles',
                    'NCAA Certified Checklist',
                    'Waivers of Liability',
                ]}
                
            />
            <Event
                heading='NBA All Stars'
                price={1500}
                details={[
                    'Basketball, Water and Training Supplies',
                    'Certfied Atletic trainers',
                    'Availability of Shuttles',
                    'NCAA Certified Checklist',
                    'Waivers of Liability',
                ]}
            />
            <Event
                heading='2022 USA Basketball Coach Academy'
                price={1500}
                details={[
                    'Basketball, Water and Training Supplies',
                    'Certfied Atletic trainers',
                    'Availability of Shuttles',
                    'NCAA Certified Checklist',
                    'Waivers of Liability',
                ]}
                date={
                    {from}
                }
            />
            <Event
                heading='Lakers Event'
                price={1500}
                details={[
                    'Basketball, Water and Training Supplies',
                    'Certfied Atletic trainers',
                    'Availability of Shuttles',
                    'NCAA Certified Checklist',
                    'Waivers of Liability',
                ]}
            />
        </div>
    )
}

export default Events
