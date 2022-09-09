import { IUser } from '../models/User'
import { createContext, useState } from 'react'

const userDetails = () => {
   

    const [user, setUserDetails] = useState<IUser>({
        firstName: '',
        lastName: '',
        email: '',
        profilePhotoUrl: '',
        coverPhotoUrl: '',
        password: '',
        phoneNumber: '',
        birthDate: '',
        gender: '',
        guardianName: '',
        guardianPhoneNumber: '',
        guardianEmail: '',
        guardianRelationship: '',
        institutionType: '',
        institutionName: '',
        institutionYearOfStudy: '',
        registeredEvents: [],
    })

     const userContext = createContext<{
        user: IUser,
        setUserDetails: (user: IUser) => void
     }>({
        user,
        setUserDetails: () => {}
     })

     return userContext
}
