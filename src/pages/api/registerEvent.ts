import User, { IUser } from './../../models/User';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function(req: NextApiRequest, res: NextApiResponse){


    const {event} = req.body

    const tokenCookie = req.cookies

    console.log({tokenCookie})
    

}