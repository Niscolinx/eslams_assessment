import axios from 'axios'
import React, { useEffect, useState } from 'react'

type TransfersData = {
    createdAt: string
    amount: number
    status: string
    type: string
    currency?: string
}

type WithdrawalData = {
    createdAt: string
    amount: number
    status: string
    type: string
    currency: string
}

type Transfers = TransfersData[]
type Withdrawals = WithdrawalData[]

 const TRANSFERS_TH = ['Status', 'Amount', 'Date', 'Type']
 const WITHDRAWALS_TH = ['Status', 'Amount', 'Date', 'Currency', 'Type']

const transactionHistory = () => {
    const [email, setEmail] = useState('')
    const [transfersData, setTransfersData] = useState<Transfers>([])
    const [withdrawalData, setWithdrawalData] = useState<Withdrawals>([])
    const [tableHeaders, setTableHeaders] = useState<typeof TRANSFERS_TH | typeof WITHDRAWALS_TH>(WITHDRAWALS_TH)
    const [tableRowsData, setTableRowsData] = useState<Transfers | Withdrawals>(withdrawalData)

    useEffect(() => {
        const userJSON = localStorage.getItem('userSession')

        if (userJSON) {
            const userData = JSON.parse(userJSON)

            const { email } = userData

            setEmail(email)
        }
    }, [])

    useEffect(() => {
        const user = {
            email,
        }
        const fetch = async () => {
            const res = await axios.post('/api/transactions', { user })

            const { transfers, withdrawals } = res.data
           
            setTransfersData(transfers)
            setWithdrawalData(withdrawals)

            //default table rows data
            setTableRowsData(withdrawals)
        }

        fetch()
    }, [email])

    

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target

        switch (value) {
            case 'Transfers':
                setTableHeaders(TRANSFERS_TH)
                setTableRowsData(transfersData)
                break
            case 'Withdrawals':
                setTableHeaders(WITHDRAWALS_TH)
                setTableRowsData(withdrawalData)
                break
            default:
                setTableHeaders(WITHDRAWALS_TH)
        }
    }



    return (
        <div className='min-h-[80vh]'>
            <div className='grid overflow-scroll max-h-[70vh]'>
                <div className='grid justify-items-center justify-center'>
                    <h3 className='font-semibold text-lg py-5'>
                        Transaction History
                    </h3>
                    <select
                        className={`shadow  border rounded p-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white font-bold text-center cursor-pointer text-xl`}
                        onChange={handleChange}
                        defaultValue='Withdrawals'
                    >
                        <option value='Transfers'>Transfers</option>
                        <option value='Withdrawals'>Withdrawals</option>
                    </select>
                </div>
                <table className='border border-gray-700 transaction-table mx-5 md:mx-auto'>
                    {/* <caption className='font-semibold text-lg py-5'>
                        Transaction History
                    </caption> */}
                    <colgroup>
                        <col className='w-40 min-w-30' span={tableHeaders.length + 1} />
                    </colgroup>
                    <thead>
                        <tr className='mb-10'>
                            <th rowSpan={4}>No</th>
                            {tableHeaders.map((header, index) => {
                                return <th key={index}>{header}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {tableRowsData.map((value, i) => {
                            return (
                                <tr key={i} className='mx-4 py-2'>
                                    <td>{i + 1}</td>
                                    <td>
                                        {' '}
                                        <span
                                            className={`text-black rounded-lg py-2 px-3 capitalize ${
                                                value.status === 'approved'
                                                    ? 'bg-green-500'
                                                    : value.status ===
                                                      'declined'
                                                    ? 'bg-red-400'
                                                    : 'bg-orange-300'
                                            }`}
                                        >
                                            {value.status}
                                        </span>
                                    </td>
                                    <td className='font-bold'>${value.amount}</td>

                                    <td>
                                        {new Date(
                                            value.createdAt
                                        ).toLocaleDateString()}
                                    </td>
                                    {value.type === 'Withdrawal' && (
                                        <td>{value.currency}</td>
                                    )}
                                    <td>{value.type}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default transactionHistory
