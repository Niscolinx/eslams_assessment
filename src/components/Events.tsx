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
                        height='180px'
                        objectFit='cover'
                        className='event__img'
                    />
                </figure>
            </div>
            <div className='event__details'>
                <h3 className='event__details--title'>{title}</h3>
                <p className='event__details--description'>
                    {description} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Expedita nihil neque, quos mollitia quasi
                    facere possimus dolores voluptatum hic illum nobis magnam
                    quisquam eos fuga ad nesciunt nostrum veniam accusamus.
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
                imgSrc='/img/basket1.png'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
            <Event
                imgSrc='/img/basket2.png'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
            <Event
                imgSrc='/img/basket3.png'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
            <Event
                imgSrc='/img/basket4.png'
                title='Discover the best'
                description='how are you doing'
                amount={200}
                date={new Date().toLocaleString()}
            />
           
        </div>
    )
}

export default Events
