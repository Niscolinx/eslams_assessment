import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { CgSpinnerTwo } from 'react-icons/cg'

type user = {
    _id: string
    email: string
    username: string
    code: string
    isVerified: boolean
    createdAt: string
}

const Users = () => {
    const [fetchedUsers, setFetchedUsers] = useState<user[] | null>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`/api/getUsers`)
            setFetchedUsers(res.data)
        }
        fetchData()
    }, [])

    return (
        <div className='grid overflow-scroll h-[70vh] mt-5 md:justify-center'>
            <table className=' w-[30rem] border border-gray-700 transaction-table md:mx-auto relative'>
                <caption className='font-bold text-lg py-5 uppercase'>
                    Users
                </caption>

                <thead>
                    <tr className='mb-10'>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Verified</th>
                        <th>Joined</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {fetchedUsers && fetchedUsers.length > 0 ? (
                        fetchedUsers.map((value, i) => {
                            console.log(value)
                            return (
                                <tr key={i} className='mx-4 py-2'>
                                    <td>{i + 1}</td>
                                    <td>
                                        <span>{value.username}</span>
                                    </td>
                                    <td>{value.email}</td>
                                    <td>{value.isVerified.toString()}</td>
                                    <td>
                                        <>
                                            <div className='flex justify-center'>
                                                {new Date(
                                                    value.createdAt
                                                ).toLocaleDateString()}
                                            </div>
                                        </>
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

export default Users
