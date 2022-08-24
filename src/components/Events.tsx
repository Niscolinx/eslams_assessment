import React from 'react'
import Image from 'next/image'

interface EventProps {
    imgSrc: string
    title: string
    description: string
    amount: number
    date: string
}

const Event = ({ imgSrc, title, description, amount, date }: EventProps) => {
    return (
        <div className='event'>
            <div className='event__imgBox'>
                <figure>
                    <Image
                        src={imgSrc}
                        width='300px'
                        height='250px'
                        objectFit='cover'
                        className='event__img'
                    />
                </figure>
            </div>
            <div className='event__details'>
                <h3 className='event__details--title'>{title}</h3>
                <p className='event__details--description'>
                    {description} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit..
                </p>
                <p className='event__details--amount'>{amount}</p>
                <p className='event__details--date'>{date}</p>
            </div>
            <button className='event__button'>Register</button>
        </div>
    )
}

function Events() {
    return (
        <div className='events'>

            
            <Event
                imgSrc='/img/event1.jpg'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
            <Event
                imgSrc='/img/event2.jpg'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
            <Event
                imgSrc='/img/event3.jpg'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
            <Event
                imgSrc='/img/event1.jpg'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
            <Event
                imgSrc='/img/event2.jpg'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
           
        </div>
    )
}

export default Events
