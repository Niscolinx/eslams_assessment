const dev = process.env.NODE_ENV === 'production'

export const serverUrl = dev ? 'https://eslams-assessment.vercel.app' : 'http://localhost:3000'