import React from 'react'


interface EventProps {
    img: string
    title: string
    description: string
    amount: number
    date: string
}

const Event = ({img, title,description,amount, date}: EventProps) => {
    return <div className='event'>
        event
    </div>
}


function Events() {
  return (
    <div className='events'>
        
        <Event img='/img/basket1.png' title='Discover the best' description='how are you doing' amount={200} date={new Date().toLocaleString()}/>
       
    </div>
  )
}

export default Events