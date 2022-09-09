import axios from 'axios'
import { IUser } from '../models/User'

export async function userData(): Promise<void> {
    // const response = await axios.post('/api/user', session)
    // return response.data
}

export async function userPortfolio(
    portfolio: number,
    selectedOption: string
): Promise<{ updatedUser: IUser }> {
    const response = await axios.post('/api/transferToPortfolio', {
        portfolio,
        selectedOption,
    })

    return response.data
}
