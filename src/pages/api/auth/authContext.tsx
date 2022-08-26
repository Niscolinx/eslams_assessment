import { createContext } from 'react'
import { handleInputProps } from '../../../components/stepForm/Checkout'

type ContextType = {
    setHandleInput: (handleInput: any) => void
    handleInput: handleInputProps
    setInput: (event: any) => void

    validationError: {
        key?: string[]
        message?: {
            [key: string]: string
        }
    } | null
}

export const AuthContext = createContext<ContextType>(null as any)
