import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { CgSpinnerTwo } from 'react-icons/cg'

type Coupon = {
    _id: string
    isUsed: boolean
    createdAt: string
    code: string
}

const Table = () => {
    const [coupons, setCoupons] = useState<Coupon[] | null>([])

    console.log({coupons})

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`/api/getCouponCodes`)
            setCoupons(res.data)
        }
        fetchData()
    }, [])

    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.innerText = 'Copied!'
    }
    return (
        <div className='grid overflow-scroll h-[70vh] mt-5 md:justify-center'>
            <table className=' w-[30rem] border border-gray-700 transaction-table mx-auto relative'>
                <caption className='font-bold text-lg py-5 uppercase'>
                    Coupon Codes
                </caption>

                <thead>
                    <tr className='mb-10'>
                        <th>No</th>
                        <th>Status</th>
                        <th>Coupon</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {coupons && coupons.length > 0 ? (
                        coupons.map((value, i) => {
                            return (
                                <tr key={i} className='mx-4 py-2'>
                                    <td>{i + 1}</td>
                                    <td>
                                        <span
                                            className={`${
                                                value.isUsed
                                                    ? 'bg-red-500'
                                                    : 'bg-green-500'
                                            } rounded-lg py-1 px-2 text-black justify-self-center place-self-end`}
                                        >
                                            {value.isUsed ? 'Used' : 'Valid'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className='grid gap-2'>
                                            {value.code}
                                            <CopyToClipboard text={value.code}>
                                                <button
                                                    className='bg-orange-300 rounded-lg px-2 text-black justify-self-center place-self-end'
                                                    onClick={(e) =>
                                                        handleCopy(e)
                                                    }
                                                >
                                                    Copy
                                                </button>
                                            </CopyToClipboard>{' '}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex justify-center'>
                                            {new Date(value.createdAt)
                                                .toLocaleDateString()
                                                .toString()}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td>
                                <div className='absolute w-full top-[50%]'>
                                    <CgSpinnerTwo className='animate-spin text-orange-300 text-4xl' />
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
