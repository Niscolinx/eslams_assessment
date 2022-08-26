import {createContext} from 'react';


type ContextType = {
    personalEmail: string,
    setPersonalEmail: (personalEmail: string) => void
    firstName: string,
    setFirstName: (firstName: string) => void
    lastName: string,
    setLastName: (lastName: string) => void
    gender: string,
    setGender: (gender: string) => void
    password: string,
    setPassword: (password: string) => void
    phoneNumber: string,
    setPhoneNumber: (phoneNumber: string) => void
    birthDate: Date | null,
    setBirthDate: (birthDate: Date | null) => void
 
}

export const AuthContext = createContext<ContextType>(null as any);