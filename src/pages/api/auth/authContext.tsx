import { createContext } from 'react'

type ContextType = {
    setHandleInput: (handleInput: any) => void
    setBirthDate: (birthdate: Date | null) => void
    handleInput: {
        [key: string]: string
    }
    setInput: (event: any) => void

    validationError: {
        key: string[]
        message: {
            [key: string]: string
        }
    }
}

export const AuthContext = createContext<ContextType>(null as any)
