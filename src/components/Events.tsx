import React from 'react'
import Image from 'next/image'

interface EventProps {
    imgSrc: string
    title: string
    description: string
    amount: number
    date: string
}

const Event = ({imgSrc, title,description,amount, date}: EventProps) => {
    return <div className='event'>
            <figure>
                <Image src={imgSrc} width='100px' height='100px'/>
            </figure>
            <caption>{title}</caption>
            <p>{description}</p>
            <p>{amount}</p>
            <p>{date}</p>
    </div>
}


function Events() {
  return (
    <div className='events'>
        
        <Event imgSrc='/img/basket1.png' title='Discover the best' description='how are you doing' amount={200} date={new Date().toLocaleString()}/>
       
    </div>
  )
}

export default Events