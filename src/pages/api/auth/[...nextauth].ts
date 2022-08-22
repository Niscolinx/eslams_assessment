import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from '../../../lib/dbConnect'

import { serverUrl } from '../../../config'

dbConnect()
export default NextAuth({
    //adapter: MongoDBAdapter(clientPromise),

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                emailOrUsername: {
                    label: 'EmailOrUsername',
                    type: 'text',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const emailOrUsername = credentials?.emailOrUsername
                const password = credentials?.password


                return axios
                    .post(`${serverUrl}/api/auth/login`, {
                        emailOrUsername,
                        password,
                    })
                    .then(({ data }) => {
                        console.log({ data })
                        return data
                    })
                    .catch((err) => {
                        console.log({ err })
                        return
                    })
            },
        }),
    ],

    pages: {
        signIn: '/auth/login',
        signOut: '/auth/signout'
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            session.foundUser = token
            return session
        },
        signIn: async ({ user }) => {
            if (user) {
                return true
            } else {
                return false
            }
        },
        async redirect({ baseUrl }) {
            // Allows relative callback URLs
            return `${baseUrl}/dashboard`
        },
    },
    // events: {
    //     signIn: async ({ account, user, isNewUser, profile }) => {
    //         console.log('events sign in', { account, user, isNewUser, profile })
    //     },
    //     signOut: async ({ session, token }) => {
    //         console.log('events sign out', session, token)
    //     },
    //     createUser: async ({ user }) => {
    //         console.log('events createuser', { user })
    //     },
    //     session: async ({ session, token }) => {
    //         console.log('events session', { session, token })
    //     },
    // },
    //     theme: {
    //         colorScheme: 'dark',
    //     },

    secret: process.env.JWT_SECRET,
})
