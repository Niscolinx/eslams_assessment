import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import React, { useState } from 'react'
import Routes from '../../AdminRoutes/routes'

import GenerateCouponCodes from '../../components/GenerateCouponCodes'

type Coupon = {
    _id: string
    isUsed: boolean
    createdAt: string
    code: string
}

type Props = {
    couponCodes: Coupon[]
}

function index() {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChangeUrl = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        axios
            .post('/api/admin/changeVideoUrl', { url })
            .then(({ data }) => {
                console.log(data)
                setLoading(false)
                const { changedVideoUrl } = data

                setUrl(changedVideoUrl)
            })
            .catch((err) => {
                console.log({ err })
                setLoading(false)
            })
    }

    return (
        <div className='h-screen overflow-x-hidden grid px-4 py-5'>
            <div className='grid self-start gap-3'>
                <h1 className='text-lg font-bold'>Welcome Admin</h1>
                <GenerateCouponCodes />

                <form
                    className='grid items-center mt-5 gap-2 justify-items-center'
                    onSubmit={handleChangeUrl}
                >
                    <input
                        type='text'
                        placeholder='Enter URL'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className='rounded-lg shadow appearance-none rounded w-65 py-3 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline'
                    />
                    <button
                        className='bg-orange-300 text-[#1a1a2d] rounded px-2 py-1 justify-self-center'
                        type='submit'
                    >
                        {loading ? 'Loading...' : 'Change Url'}
                    </button>
                </form>
            </div>

            <Routes />
        </div>
    )
}

export default index

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const token = context.req.cookies.adminToken
    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    // const res = await axios(`${serverUrl}/api/getCouponCodes`)
    // const coupons = await res.data

    return {
        props: {
            isAuthenticated: true,
            // couponCodes: coupons,
        },
    }
}
