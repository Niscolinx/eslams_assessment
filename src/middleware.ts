import { NextResponse, NextRequest } from 'next/server'
import { serverUrl } from './config'
import * as jose from 'jose'


export default async function middleware(req: NextRequest, res: NextResponse) {
    const tokenCookie = req.cookies.get('tokenCookie')
    const { url } = req

    if (url.includes('/dashboard')) {
        if (!tokenCookie) {
            console.log('not verified')
            NextResponse.redirect(`${serverUrl}/auth/login`)
        } else {
            console.log('verified')
            try {
                 const { payload: jwtData } = await jose.jwtVerify(
                     tokenCookie,
                     new TextEncoder().encode(process.env.JWT_SECRET!)
                 )

                NextResponse.next()
            } catch (err) {
                console.log({ err })
                NextResponse.redirect(`${serverUrl}/auth/login`)
            }
        }
    }
}
