import axios from 'axios'
import React, { useState, useEffect, SelectHTMLAttributes } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'
import { IUser } from '../models/User'

type user = {
    _id: string
    creator: IUser
    amount: string
    status: string
    createdAt: string
}

type message = { value: string; type?: string; style?: string }

const Withdrawals = () => {
    const [withdrawals, setWithdrawals] = useState<user[] | null>([])

  
    const [user, setUser] = useState<IUser | null>(null)
  
   
    const [messageDisplay, setMessageDisplay] = useState('hidden')
    const [selectedAction, setSelectedAction] = useState<HTMLSelectElement | null>(null)
    const [withdrawalStatus, setWithdrawalStatus] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`/api/getWithdrawals`)
            setWithdrawals(res.data)
        }
        fetchData()
    }, [])

   

    const handleActions = (
        e: React.ChangeEvent<HTMLSelectElement>,
        detail: user 
    ) => {
        const postWithdrawalAction = e.target.value


        setSelectedAction(e.target)


        if (postWithdrawalAction !== 'View') {
            const {
                _id,
                creator: { username, email },
            } = detail

            const fetchData = async () => {
                const res = await axios.post(`/api/postWithdrawalAction`, {
                    postWithdrawalAction,
                    _id,
                    username,
                    email,
                })

                //const res = await axios.post('/api/email')

                console.log(res.data)
            }
         fetchData()
        } else {
            const dialog = document.querySelector('#withdrawalDialog') as any
            dialog.showModal()
            setUser(detail.creator)
        }
    }

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    }

    const closeModal = () => {
        const dialog = document.querySelector('#withdrawalDialog') as any
      
        selectedAction!.selectedIndex = 0

        dialog.close()
    }

    return (
        <div className='grid overflow-scroll h-[70vh] mt-5 md:justify-center'>
            <dialog className='withdrawalDialog' id='withdrawalDialog'>
                <form
                    id='register'
                    className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid m-2 gap-6 md:(w-2/5 mx-auto)'
                    onSubmit={handleSubmit}
                >
                    <div className='mb-2'>
                        <div className='grid'>
                            <h3 className='font-bold text-lg text-black border-b border-b-gray-400 mb-4'>
                                Personal
                            </h3>

                            <div>
                                <label
                                    className='block text-gray-700 text-sm mb-1'
                                    htmlFor='username'
                                >
                                    Username
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white`}
                                    id='username'
                                    name='username'
                                    disabled
                                    type='text'
                                    minLength={4}
                                    value={user?.username}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                className='block text-gray-700 text-sm mb-1'
                                htmlFor='phoneNumber'
                            >
                                Phone No
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white `}
                                id='phoneNumber'
                                type='number'
                                name='phoneNumber'
                                disabled
                                value={user?.phoneNumber}
                            />
                        </div>
                        <div>
                            <label
                                className='block text-gray-700 text-sm mb-1'
                                htmlFor='username'
                            >
                                Email
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white `}
                                id='email'
                                type='email'
                                name='email'
                                disabled
                                value={user?.email}
                            />
                        </div>
                    </div>

                    <div className='grid'>
                        <h3 className='font-bold text-lg text-black border-b border-b-gray-400 mb-4'>
                            Wallet Address
                        </h3>

                        <div>
                            <label
                                className='block text-gray-700 text-sm mb-1'
                                htmlFor='usdtAddress'
                            >
                                USDT TRC20
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white`}
                                id='usdtAddress'
                                disabled
                                name='usdtAddress'
                                type='text'
                                minLength={15}
                                value={user?.usdtAddress}
                            />
                        </div>
                    </div>
                    <div className='grid'>
                        <h3 className='font-bold text-lg text-black border-b border-b-gray-400 mb-4'>
                            Details
                        </h3>

                        <div className='grid text-black'>
                            <div className='flex justify-between'>
                                <p>Verified</p>
                                <p>{user?.isVerified.toString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <button
                            className='bg-orange-300 text-[#1a1a2d] font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline  justify-self-center'
                            type='button'
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        {/* <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline  justify-self-center'
                            type='submit'
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button> */}
                    </div>
                </form>
            </dialog>
            <table className=' w-[30rem] border border-gray-700 transaction-table md:mx-auto relative'>
                <caption className='font-bold text-lg py-5 uppercase'>
                    Users
                </caption>

                <thead>
                    <tr className='mb-10'>
                        <th>No</th>
                        <th>User</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center '>
                    {withdrawals && withdrawals?.length > 0 ? (
                        withdrawals.map((detail, i) => {
                            return (
                                <tr key={i} className='mx-4 py-2'>
                                    <td>{i + 1}</td>
                                    <td>
                                        <span>{detail.creator.username}</span>
                                    </td>
                                    <td>
                                        <span className='font-bold'>
                                            ${detail.amount}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className={`text-black rounded-lg py-2 px-3 capitalize ${
                                                detail.status === 'approved'
                                                    ? 'bg-green-500'
                                                    : detail.status ===
                                                      'declined'
                                                    ? 'bg-red-400'
                                                    : 'bg-orange-300'
                                            }`}
                                        >
                                            {detail.status}
                                        </span>
                                    </td>
                                    <td>
                                        <>
                                            <div className='flex justify-center'>
                                                {new Date(
                                                    detail.createdAt
                                                ).toLocaleDateString()}
                                            </div>
                                        </>
                                    </td>
                                    <td>
                                        <select
                                            className='tableSelect bg-blue-500 text-gray-800'
                                            onChange={(e) => {
                                                handleActions(e, detail)
                                            }}
                                        >
                                            <option
                                                value='none'
                                                selected
                                                disabled
                                                hidden
                                            >
                                                Actions
                                            </option>
                                            <option value='View'>
                                                View User
                                            </option>
                                            <option value='Approve'>
                                                Approve
                                            </option>
                                            <option value='Decline'>
                                                Decline
                                            </option>
                                        </select>
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

export default Withdrawals
