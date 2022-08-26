import {createContext} from 'react';


type ContextType = {
    gender: boolean,
    setGender: (gender: boolean) => void
    password: boolean,
    setPassword: (password: boolean) => void
    phoneNumber: boolean,
    setPhoneNumber: (phoneNumber: boolean) => void
    birthDate: boolean,
    setBirthDate: (birthDate: boolean) => void
 
}

export const AuthContext = createContext<ContextType>(null as any);