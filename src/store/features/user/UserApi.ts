import axios from 'axios'
import { nextAuthSession } from '../../../lib/types'
import { IUser } from '../../../models/User'

export async function userData(session: nextAuthSession): Promise<IUser> {
    const response = await axios.post('/api/user', session)

    return response.data
}

export async function userPortfolio(
    session: nextAuthSession,
    portfolio: number,
    selectedOption: string
): Promise<{ updatedUser: IUser }> {
    const response = await axios.post('/api/transferToPortfolio', {
        session,
        portfolio,
    selectedOption})

    return response.data
}
