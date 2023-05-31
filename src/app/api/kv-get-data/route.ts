import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { AuthData } from '../../../../public/interfaces/AuthData';


export async function GET(){
    try {
        const keys = await kv.keys('auth-*')
        const data: AuthData[] =  await kv.mget(...keys);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return new Response('get data failed', {status: 500});
    }
}