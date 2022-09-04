import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from '../pages/dashboard'

interface EventProps {
    id: number
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

export const EVENTDATA = [
    {
        heading: 'USA Basketball Showcase sdfsdfsdfsdf',
        price: 12000,
        details: [
            { age: 25 },
            { competitionType: 'Round Robin Triple Split' },
            { location: 'USA' },
            {
                registrationRequirements: ['18 and Above'],
            },
        ],
        date: {
            from: new Date('2022-09-10'),
        },
        which: 1,
    },
    {
        heading: '2022 FIBA AmeriCup for Men',
        price: 1500,
        details: [
            { age: 21 },
            { competitionType: 'Single Elimination' },
            { location: 'Canada' },
            {
                registrationRequirements: [
                    '18 and Above',
                    'Individual Registration',
                    'Group Registration',
                ],
            },
        ],
        date: {
            from: new Date('2022-09-10'),
            to: new Date('2022-09-10'),
        },
        which: 2,
    },
    {
        heading: 'FIBA 3x3 U23 World Cup (women)',
        price: 59000,
        details: [
            { age: 15 },
            { competitionType: 'Semi-round Robins' },
            { location: 'USA' },
            {
                registrationRequirements: [
                    '18 and Above',
                    'Individual Registration',
                ],
            },
        ],
        date: {
            from: new Date('2022-09-10'),
            to: new Date('2022-09-10'),
        },
        which: 3,
    },
    {
        heading: '2022 USA Basketball (boys)',
        price: 99094,
        details: [
            { age: 23 },
            { competitionType: 'Multilevel' },
            { location: 'Mexico' },
            {
                registrationRequirements: ['Group Registration'],
            },
        ],
        date: {
            from: new Date('2022-09-10'),
            to: new Date('2022-09-10'),
        },
        which: 1,
    },
    {
        heading: '2022 USA Basketball Academy',
        price: 11200,
        details: [
            { age: 32 },
            { competitionType: 'Multilevel' },
            { location: 'Canada' },
            {
                registrationRequirements: ['Individual Registration'],
            },
        ],
        date: {
            from: new Date('2022-09-10'),
        },
        which: 2,
    },
    {
        heading: '2022 USA Basketball (girls)',
        price: 85070,
        details: [
            { age: 18 },
            { competitionType: 'Single Elimination' },
            { location: 'Mexico' },
            {
                registrationRequirements: [
                    '18 and Above',
                    'Group Registration',
                ],
            },
        ],
        date: {
            from: new Date('2022-09-10'),
            to: new Date('2022-09-04'),
        },
        which: 3,
    },
]

const Event = ({
    id,
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
                            const [key, value] = Object.entries(item)[1]

                            return (
                                <ul key={i} className='event__details--list '>
                                    <div
                                        className={
                                            key !== 'registrationRequirements'
                                                ? 'flex gap-1 justify-items-end'
                                                : ''
                                        }
                                    >
                                        <span
                                            className={
                                                key ===
                                                'registrationRequirements'
                                                    ? 'font-medium capitalize'
                                                    : 'capitalize'
                                            }
                                        >
                                            {key}
                                        </span>
                                        :
                                        <span className='font-medium'>
                                            {key ===
                                                'registrationRequirements' &&
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
                        <p className='event__price-value'>${price}</p>
                    </div>
                    <button
                        className='btn btn--white'
                        onClick={(e: any) => registerEvent(id)}
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

    useEffect(() => {
        axios('/api/events')
            .then(({ data }) => {
                console.log({ data })
                console.log({ EVENTDATA })

                const transFormedData = data.map(
                    (item: EventProps, index: number) => {
                        return {
                            ...item,
                            which: (index % 3) + 1,
                            date: {
                                from: new Date(item.date.from).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                }),
                                to: item.date.to && new Date(item.date.to).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                }),
                            },
                            details: {
                                ...item.details,
                                
                            }
                        }
                    }
                )

                console.log({ transFormedData })
                setEventData(transFormedData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setUpdateEvent(new Set<EventProps>([]))

        if (showFilteredData) {
            if (showFilteredData.age.length > 0) {
                Object.values(showFilteredData.Age).map((eachGroup) => {
                    const [min, max] = eachGroup.split('-')
                    const minAge = parseInt(min)
                    const maxAge = parseInt(max)

                    return eventData.map((eachEvent) => {
                        let eventAge = Number(eachEvent.details[0].Age)
                        if (eventAge >= minAge && eventAge <= maxAge) {
                            setUpdateEvent((prev: any) => {
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
                                setUpdateEvent((prev: any) => {
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
                            setUpdateEvent((prev: any) => {
                                return prev.add(eachEvent)
                            })
                        }
                    })
                })
            }

            if (showFilteredData.registrationRequirements.length > 0) {
                Object.values(
                    showFilteredData.registrationRequirements
                ).map((eachGroup) => {
                    eventData.map((eachEvent) => {
                        let eventRegistrationRequirements =
                            eachEvent.details[3].registrationRequirements
                        if (eventRegistrationRequirements.includes(eachGroup)) {
                            setUpdateEvent((prev: any) => {
                                return prev.add(eachEvent)
                            })
                        }
                    })
                })
            }

            if (showFilteredData.priceRange) {
                const values = showFilteredData.priceRange
                const left = values[0]
                const right = values[1]
                eventData.map((eachEvent) => {
                    let eventPrice = eachEvent.price
                    if (
                        eventPrice >= Number(left) &&
                        eventPrice <= Number(right)
                    ) {
                        setUpdateEvent((prev: any) => {
                            return prev.add(eachEvent)
                        })
                    }
                })
            }
        }
    }, [showFilteredData])

    const showEvents = () => {
        const filteredEvents = Array.from(updateEvent)

        const eventArrToRender =
            filteredEvents.length > 0 ? filteredEvents : eventData
        let matchedEvents = 0

        let data = eventArrToRender.map((item) => {
            //  console.log({item})
            const arr = item.heading
                .toLowerCase()
                .includes(searchValue.toLowerCase()) && (
                <Event {...item} key={item.id} />
            )
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
        <div className='p-8 events'>
            <div className='events__heading'>
                <span></span>{' '}
                <h1 className='events__heading--text'>Upcoming Events</h1>{' '}
                <span></span>
            </div>

            <div className='events__container overflow-hidden'>
                {showEvents() || <p>No events found</p>}
            </div>
        </div>
    )
}

export default Events
