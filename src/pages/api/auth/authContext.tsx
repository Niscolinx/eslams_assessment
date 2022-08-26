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

    guardianName: string,
    setGuardianName: (guardianName: string) => void
    guardianPhoneNumber: string,
    setGuardianPhoneNumber: (guardianPhoneNumber: string) => void
    guardianEmail: string,
    setGuardianEmail: (guardianEmail: string) => void
    guardianRelationship: string,
    setGuardianRelationship: (guardianRelationship: string) => void

    institutionName: string,
    setInstitutionName: (institutionName: string) => void
    institutionType: string,
    setInstitutionType: (institutionType: string) => void
    institutionYearOfStudy: string,
    setInstitutionYearOfStudy: (institutionYearOfStudy: string) => void

    validationError: {
        key: string[],
        message: {
            [key: string]: string
        }
    }


}

export const AuthContext = createContext<ContextType>(null as any);