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
