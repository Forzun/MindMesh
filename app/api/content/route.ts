import { PrismaClient } from '@prisma/client';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from "next/server";

const Client = new PrismaClient(); 

export async function POST(req: NextRequest) {
  try{
    const body = await req.json();  

    const token = await getToken({ 
      req:req, 
      secret:process.env.NEXTAUTH_SECRET
    })

    if(!token){ 
    return NextResponse.json({error:"something went wrong"})
    }

    const content = await Client.content.create({ 
        data: {
          title: body.title,
          link: body.link, 
          tag: body.tag,
          userId:Number(token.id)
        }       
    })
  
    if(content){
      return NextResponse.json({ 
        data:content
      })
    }
    
  }catch(error){ 
    return NextResponse.json({ 
      error:error
    })
  }

}