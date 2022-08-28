import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export default function middleware(req: NextRequest, res: NextResponse) {
    const tokenCookie = req.cookies.get('tokenCookie')
    const { url } = req

    if (url.includes('/dashboard')) {
        if (!tokenCookie) {
            console.log('not verified')
            NextResponse.redirect('/auth/login')
        } else {
            console.log('verified')
            try {
                jwt.verify(tokenCookie, 'sfd', {
                    maxAge: '1d',
                })

                NextResponse.next()
            } catch (err) {
                console.log({ err })
                NextResponse.redirect('/auth/login')
            }
        }
    }
}
