import { IUser } from './../models/User';
import { createContext } from "react";

export const userContext = createContext<IUser>({
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
    registeredEvents: []
});