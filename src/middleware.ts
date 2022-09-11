import { NextResponse, NextRequest } from 'next/server'
import { serverUrl } from './config'
import * as jose from 'jose'

export default async function middleware(req: NextRequest, res: NextResponse) {
    const token = req.headers.get('Authorization')

    console.log({ token })
    const { url } = req


    // if (url.includes('/dashboard')) {
    //     if (!token) {
    //         return NextResponse.redirect(`${serverUrl}/auth/login`)
    //     } else {
    //         try {

    //             const { payload: jwtData } = await jose.jwtVerify(
    //                 token,
    //                 new TextEncoder().encode(process.env.JWT_SECRET!)
    //             )
                

    //             NextResponse.next()
    //         } catch (err) {
    //             return NextResponse.redirect(`${serverUrl}/auth/login`)
    //         }
    //     }
    // }

    // if (url.includes('/auth')) {
    //     if (token) {
    //         try {
                
    //             const { payload: jwtData } = await jose.jwtVerify(
    //                 token,
    //                 new TextEncoder().encode(process.env.JWT_SECRET!)
    //             )

                 
    //             return NextResponse.redirect(`${serverUrl}/dashboard`)
    //         } catch (err) {
    //             return NextResponse.next()
    //         }
    //     }
    // }

    return NextResponse.next()
}
