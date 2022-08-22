import mongoose from 'mongoose'


const MONGODB_URI:string = process.env.MONGODB_URI || ''


/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    console.log('already connected')
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("connected successfully")
      return mongoose
    })
  }
  cached.conn = await cached.promise

  return cached.conn
}

export default dbConnect
