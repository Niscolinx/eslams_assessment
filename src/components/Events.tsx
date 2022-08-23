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
        <Event />
       
    </div>
  )
}

export default Events