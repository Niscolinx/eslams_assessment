import {createContext} from 'react';


type ContextType = {
    gender: string,
    setGender: (gender: string) => void
    password: string,
    setPassword: (password: string) => void
    phoneNumber: string,
    setPhoneNumber: (phoneNumber: string) => void
    birthDate: Date,
    setBirthDate: (birthDate: Date) => void
 
}

export const AuthContext = createContext<ContextType>(null as any);