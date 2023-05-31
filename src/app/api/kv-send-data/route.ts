import { kv } from "@vercel/kv";


export async function POST(request: Request){
    const { name, email, password } = await request.json();

    if( name == null || email == null || password == null){
        return new Response("Missing name, email or password", {status: 400})
    } 

    const uuid = crypto.randomUUID();
    const timestamp = Date.now();
    
    try {
       await kv.set(`auth-${uuid}`, {name, email, password, timestamp});

      return new Response('register success', {status: 200});
    } catch (error) {
      console.log(error)
     return new Response('register failed', {status: 500});
    }
}