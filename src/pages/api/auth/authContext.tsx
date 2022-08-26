import { createContext } from 'react'
import { handleInputProps, ValidationError } from '../../../components/stepForm/Checkout'

type ContextType = {
    setHandleInput: (handleInput: any) => void
    handleInput: handleInputProps
    setInput: (event: any) => void

    validationError: ValidationError | null
        
}

export const AuthContext = createContext<ContextType>(null as any)
