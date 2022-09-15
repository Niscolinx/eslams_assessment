import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from '../pages/dashboard'

interface EventProps {
    _id: string
    heading: string
    details: {
        [key: string]: any
    }[]
    price: number
    which: number
    date: {
        from: any
        to?: any
    }
}

const Event = ({
    _id,
    heading,
    details,
    price,
    date: { from, to },
    which,
}: EventProps) => {
    const { registerEvent } = useContext(EventContext)

    return (
        <div className='event w-[300px]'>
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
                <div className='event__details '>
                    {details.length > 0 &&
                        details.map((item, i) => {
                            let [key, value] = Object.entries(item)[1]

                            key = key.split(/(?=[A-Z])/).join(' ')

                            return (
                                <ul key={i} className='event__details--list '>
                                    <div
                                        className={
                                            key !== 'registration Requirements'
                                                ? 'flex gap-1 justify-items-end'
                                                : ''
                                        }
                                    >
                                        <span
                                            className={
                                                key ===
                                                'registration Requirements'
                                                    ? 'font-medium capitalize'
                                                    : 'capitalize'
                                            }
                                        >
                                            {key}
                                        </span>
                                        :
                                        <span className='font-medium'>
                                            {key ===
                                                'registration Requirements' &&
                                            Array.isArray(value) ? (
                                                <span className='font-medium'>
                                                    {value.map((item) => (
                                                        <li
                                                            key={item}
                                                            className={`event__details--list-${which}`}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </span>
                                            ) : (
                                                value
                                            )}
                                        </span>
                                    </div>
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
                        <p className='event__price-value'>{price}</p>
                    </div>
                    <button
                        className='btn btn--white'
                        onClick={(e: any) => registerEvent(_id)}
                    >
                        Register now!
                    </button>
                </div>
            </div>
        </div>
    )
}

function Events() {
    const { searchValue, showFilteredData } = useContext(EventContext)
    const [updateEvent, setUpdateEvent] = useState(new Set<EventProps>([]))
    const [eventData, setEventData] = useState<EventProps[]>([])
    const [loading, setLoading] = useState(true)
    const [deboncedValue, setDeboncedValue] = useState('')

    useEffect(() => {
        axios('/api/events')
            .then(({ data }) => {
                const transFormedData = data.map(
                    (item: EventProps, index: number) => {
                        return {
                            ...item,
                            which: (index % 3) + 1,
                            date: {
                                from: new Date(
                                    item.date.from
                                ).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                }),
                                to:
                                    item.date.to &&
                                    new Date(item.date.to).toLocaleDateString(
                                        'en-GB',
                                        {
                                            day: 'numeric',
                                            month: 'short',
                                        }
                                    ),
                            },
                            price: item.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }),
                        }
                    }
                )
                setLoading(false)

                setEventData(transFormedData)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setUpdateEvent(new Set<EventProps>([]))

        if (showFilteredData) {
            if (showFilteredData.age.length > 0) {
                Object.values(showFilteredData.age).map((eachGroup) => {
                    const [min, max] = eachGroup.split('-')
                    const minAge = parseInt(min)
                    const maxAge = parseInt(max)

                    return eventData.map((eachEvent) => {
                        let eventAge = eachEvent.details[0].age
                        if (eventAge >= minAge && eventAge <= maxAge) {
                            setUpdateEvent((prev: Set<EventProps>) => {
                                return prev.add(eachEvent)
                            })
                        }
                    })
                })
            }

            if (showFilteredData.competitionType.length > 0) {
                Object.values(showFilteredData.competitionType).map(
                    (eachGroup) => {
                        eventData.map((eachEvent) => {
                            let eventCompetitionType =
                                eachEvent.details[1].competitionType
                            if (eventCompetitionType === eachGroup) {
                                setUpdateEvent((prev: Set<EventProps>) => {
                                    return prev.add(eachEvent)
                                })
                            }
                        })
                    }
                )
            }

            if (showFilteredData.location.length > 0) {
                Object.values(showFilteredData.location).map((eachGroup) => {
                    eventData.map((eachEvent) => {
                        let eventLocation = eachEvent.details[2].location
                        if (eventLocation === eachGroup) {
                            setUpdateEvent((prev: Set<EventProps>) => {
                                return prev.add(eachEvent)
                            })
                        }
                    })
                })
            }

            if (showFilteredData.registrationRequirements.length > 0) {
                Object.values(showFilteredData.registrationRequirements).map(
                    (eachGroup) => {
                        eventData.map((eachEvent) => {
                            let eventRegistrationRequirements =
                                eachEvent.details[3].registrationRequirements
                            if (
                                eventRegistrationRequirements.includes(
                                    eachGroup
                                )
                            ) {
                                setUpdateEvent((prev: Set<EventProps>) => {
                                    return prev.add(eachEvent)
                                })
                            }
                        })
                    }
                )
            }

            if (showFilteredData.priceRange) {
                const values = showFilteredData.priceRange
                const left = values[0]
                const right = values[1]
                eventData.map((eachEvent) => {
                    let eventPrice = Number(
                        eachEvent.price.toString().replace(/[$,]/g, '')
                    )

                    if (
                        eventPrice >= Number(left) &&
                        eventPrice <= Number(right)
                    ) {
                        setUpdateEvent((prev: Set<EventProps>) => {
                            return prev.add(eachEvent)
                        })
                    }
                })
            }
        }
    }, [showFilteredData])


    useEffect(() => {
        const debounced = setTimeout(() => {
            setDeboncedValue(searchValue)
        }, 500)

        return () => {
            clearTimeout(debounced)
        }
    }, [searchValue])

    console.log("render")


    const showEvents = () => {
        const filteredEvents = Array.from(updateEvent)

        const eventArrToRender =
            filteredEvents.length > 0 ? filteredEvents : eventData
        let matchedEvents = 0

        let data = eventArrToRender.map((item) => {
            const searchQuery = item.heading
                .toLowerCase()
                .includes(deboncedValue.toLowerCase())

            const arr = searchQuery && <Event {...item} key={item._id} />
            if (arr) {
                matchedEvents++
                return arr
            }
        })

        if (matchedEvents < 1) {
            return null
        }
        return data
    }

    return (
        <div className='events'>
            <div className='events__heading'>
                <h1 className='events__heading--text'>Upcoming Events</h1>
            </div>

            <div className='events__container overflow-hidden'>
                {loading ? (
                    <CircularProgress
                        className='flex justify-self-center'
                        size={15}
                        style={{ color: 'black' }}
                    />
                ) : (
                    showEvents() || <p>No events found</p>
                )}
            </div>
        </div>
    )
}

export default Events
