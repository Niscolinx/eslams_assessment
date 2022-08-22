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
    interface Window {
        gtag: any
    }
    var _mongoClientPromise: any
}
