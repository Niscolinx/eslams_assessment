
import {NextResponse, NextRequest} from 'next/server'


export default function middleware(req: NextRequest, res: NextResponse) {

    console.log('middle ***************************************************', req.cookies)

   // const {tokenS}

}