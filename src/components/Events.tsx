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
            <figure>
                <Image
                    src={imgSrc}
                    width='100px'
                    height='100px'
                    objectFit='cover'
                    className='event__img'
                />
            </figure>
            <div className='event__details'>
                <caption>{title}</caption>
                <p>{description}</p>
                <p>{amount}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

function Events() {
    return (
        <div className='events'>
            <section className='section-tours' id='section-tours'>
                <div className='u-center-text'>
                    <h2 className='heading-secondary u-margin-bottom-big'>
                        Most popular tours
                    </h2>
                </div>
                <div className='row'>
                    <div className='col-1-of-3'>
                        <div className='card'>
                            <div className='card__side card__side--front'>
                                <div className='card__picture card__picture--1'>
                                    &nbsp;
                                </div>
                                <h4 className='card__heading'>
                                    <span className='card__heading--span card__heading--span-1'>
                                        The sea explorer
                                    </span>
                                </h4>
                                <h4 className='card__details'>
                                    <ul>
                                        <li>3 days Tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </h4>
                            </div>
                            <div className='card__side card__side--back card__side--back-1'>
                                <div className='card__cta'>
                                    <div className='card__price--box'>
                                        <p className='card__price--only'>
                                            Only
                                        </p>
                                        <p className='card__price--value'>
                                            $205
                                        </p>
                                    </div>
                                    <a href='#popup' className='btn btn--white'>
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-1-of-3'>
                        <div className='card'>
                            <div className='card__side card__side--front'>
                                <div className='card__picture card__picture--2'>
                                    &nbsp;
                                </div>
                                <h4 className='card__heading'>
                                    <span className='card__heading--span card__heading--span-2'>
                                        The forest hiker
                                    </span>
                                </h4>
                                <h4 className='card__details'>
                                    <ul>
                                        <li>6 days Tours</li>
                                        <li>Up to 40 people</li>
                                        <li>4 tour guides</li>
                                        <li>Sleep in provided places</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </h4>
                            </div>
                            <div className='card__side card__side--back card__side--back-2'>
                                <div className='card__cta'>
                                    <div className='card__price--box'>
                                        <p className='card__price--only'>
                                            Only
                                        </p>
                                        <p className='card__price--value'>
                                            $416
                                        </p>
                                    </div>
                                    <a href='#popup' className='btn btn--white'>
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1-of-3'>
                        <div className='card'>
                            <div className='card__side card__side--front'>
                                <div className='card__picture card__picture--3'>
                                    &nbsp;
                                </div>
                                <h4 className='card__heading'>
                                    <span className='card__heading--span card__heading--span-3'>
                                        The snow adventure
                                    </span>
                                </h4>
                                <h4 className='card__details'>
                                    <ul>
                                        <li>8 days Tours</li>
                                        <li>Up to 50 people</li>
                                        <li>5 tour guides</li>
                                        <li>Sleep in provided places</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </h4>
                            </div>
                            <div className='card__side card__side--back card__side--back-3'>
                                <div className='card__cta'>
                                    <div className='card__price--box'>
                                        <p className='card__price--only'>
                                            Only
                                        </p>
                                        <p className='card__price--value'>
                                            $673
                                        </p>
                                    </div>
                                    <a href='#popup' className='btn btn--white'>
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='u-center-text u-margin-top-big'>
                    <a href='#blank' className='btn btn--green'>
                        Discover all tours
                    </a>
                </div>
            </section>
            {/* <>
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
                <Event
                    imgSrc='/img/basket4.png'
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
                <Event
                    imgSrc='/img/basket4.png'
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
                <Event
                    imgSrc='/img/basket4.png'
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
            </> */}
        </div>
    )
}

export default Events
