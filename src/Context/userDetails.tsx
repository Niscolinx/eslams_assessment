import { IUser } from '../models/User'
import { createContext, useState } from 'react'


 const UserContext = createContext<{
     user: IUser
     setUserDetails: (user: IUser) => void
 }>(null as any)

 
const userDetails: React.FC<{}> = ({children}) => {
    const [user, setUserDetails] = useState<IUser>({
        firstName: 'sdfdsff',
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

    return <UserContext.Provider value={{user, setUserDetails}}>
        {children}
    </UserContext.Provider>
}

export default userDetails
