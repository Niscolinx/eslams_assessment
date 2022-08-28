import { NextResponse, NextRequest } from 'next/server'
import { serverUrl } from './config'
import * as jose from 'jose'

export default async function middleware(req: NextRequest, res: NextResponse) {
    const tokenCookie = req.cookies.get('tokenCookie')
    const { url } = req

    if (url.includes('/dashboard')) {
        if (!tokenCookie) {
            console.log('not verified')
            return NextResponse.redirect(`${serverUrl}/auth/login`)
        } else {
            try {
                const { payload: jwtData } = await jose.jwtVerify(
                    tokenCookie,
                    new TextEncoder().encode(process.env.JWT_SECRET!)
                )

                console.log(jwtData)
                NextResponse.next()
            } catch (err) {
                console.log({ err })
                return NextResponse.redirect(`${serverUrl}/auth/login`)
            }
        }
    }

    if (url.includes('/auth')) {
        if (tokenCookie) {
            try {
                
                const { payload: jwtData } = await jose.jwtVerify(
                    tokenCookie,
                    new TextEncoder().encode(process.env.JWT_SECRET!)
                )
                console.log("verified", jwtData)
                return NextResponse.redirect(`${serverUrl}/auth/login`)
            } catch (err) {
                console.log({ err })
                return NextResponse.next()
            }
        }
    }

    return NextResponse.next()
}
