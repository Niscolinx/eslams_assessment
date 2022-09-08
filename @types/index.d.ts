import { Connection } from 'mongoose'

declare module '*.svg' {
    const content: any
    export default content
}

declare module NodeJS {
    interface Global {
        mongoose: Connection
    }
}

declare global {
    var _mongoClientPromise: any
}

declare global {
    var mongoose: any
}

export const mongoose = global.mongoose || new Connection()

if (process.env.NODE_ENV !== 'production') global.mongoose = mongoose
