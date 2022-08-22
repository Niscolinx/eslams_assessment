import React, { useState } from 'react'
import Coupons from './coupons'
import Users from './users'
import Withdrawals from './withdrawals'

const routePaths = ['Coupons', 'Users', 'Withdrawals']

const routes = () => {
    const [route, setRoute] = useState<JSX.Element>(<Coupons />)

    const handleRoute = (e: React.MouseEvent<HTMLElement>) => {
        const element = e.currentTarget.innerText

        switch (element) {
            case 'Coupons':
                setRoute(<Coupons />)
                break
            case 'Users':
                setRoute(<Users />)
                break
            case 'Withdrawals':
                setRoute(<Withdrawals />)
                break

            default:
                setRoute(<Coupons />)
        }
    }

    return (
        <>
            <div className='grid'>{route}</div>
            <div className='flex justify-around self-end'>
                {routePaths.map((path) => {
                    return (
                        <div className='flex routeLink' key={path}>
                            <input name='radio' type='radio' id={path} defaultChecked={path === 'Coupons'}/>
                            <label
                                key={path}
                                className='cursor-pointer'
                                onClick={handleRoute}
                                htmlFor={path}
                            >
                                <span>{path}</span>
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default routes
