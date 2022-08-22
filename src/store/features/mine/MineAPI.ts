import axios from 'axios'
import { nextAuthSession } from '../../../lib/types'

interface IFetchedData {
    isMining: boolean
    mineTokenEndingTime: string
    tokensMined: number
}

export async function startMining(
    session: nextAuthSession
): Promise<IFetchedData> {
    const response = await axios.post('/api/startMining', session)
    console.log('startMining', { response })
    return response.data
}
export async function stopMining(
    session: nextAuthSession
): Promise<IFetchedData> {
    console.log('api mine')
    const response = await axios.post('/api/stopMining', session)

    console.log('from api',{response})
    return response.data
}
