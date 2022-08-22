import axios from 'axios'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ReceiptData } from '../pages/dashboard'
import { useAppSelector } from '../store/app/hooks'
import { selectUser } from '../store/features/user/UserSlice'

type Props = {
    setShowReceipt: Dispatch<SetStateAction<boolean>>
    setWithdrawalData: Dispatch<SetStateAction<ReceiptData | null>>
}

function Withdraw({setShowReceipt, setWithdrawalData}: Props) {
    const [loading, setLoading] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const fetchedUser = useAppSelector(selectUser)
    const [isWithdrawable, setIsWithdrawable] = useState(false)
    const [amount, setAmount] = useState<number>(0)

    useEffect(() => {
        if (fetchedUser) {
            if (fetchedUser.portfolio > 20) {
                setIsWithdrawable(false)
            } else {
                setIsWithdrawable(true)
            }
        }
    }, [fetchedUser])

    const handleSubmit = () => {
        setShowDropDown(true)

        if (showDropDown) {
            if(!amount){
                console.log('no amount')
                return
            }
            const { email, portfolio } = fetchedUser
            setLoading(true)


            if (amount > portfolio) {
                setLoading(false)
                return
            }
            axios
                .post('/api/postWithdrawal', { amount, email })
                .then(({ data }) => {
                    console.log({ data })
                    setWithdrawalData(data.withdraw)
                    setShowReceipt(true)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log({err})
                    setLoading(false)
                })
        }
    }

    return (
        <div className='grid justify-center'>
            <form
                onSubmit={handleSubmit}
                className={`${
                    showDropDown ? 'visible' : 'hidden'
                } grid justify-items-center gap-2`}
            >
                <span
                    className={`${
                        isWithdrawable ? 'visible' : 'hidden'
                    } text-red-300 text-center`}
                >
                    The Required Minimum Withdrawal Amount is $20
                </span>
                <input
                    disabled={isWithdrawable}
                    type='number'
                    required
                    min={1}
                    value={amount > 0 ? amount : ''}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder='Amount to withdraw'
                    className={` min-w-50 max-w-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white font-semibold transition-all delay-75 ease-in disabled:(cursor-not-allowed bg-gray-400 border-none)`}
                />
            </form>
            <button
                disabled={showDropDown ? isWithdrawable : false}
                className={` grid bg-green-500 text-[#1a1a2d] rounded px-2 py-1 font-semibold text-xl disabled:(bg-gray-400 cursor-not-allowed) ${
                    showDropDown ? 'grid justify-self-center ' : ''
                }`}
                onClick={handleSubmit}
            >
                {showDropDown
                    ? `${loading ? 'Loading...' : 'Withdraw'}`
                    : 'Place Withdrawal'}
            </button>
        </div>
    )
}

export default Withdraw
