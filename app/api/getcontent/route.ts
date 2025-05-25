import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { PrismaClient } from "@prisma/client";

const Client = new PrismaClient();

export async function GET(req: NextRequest){ 
    try{ 
        const token = await getToken({ 
            req:req, 
            secret:process.env.AUTH_SECRET
        })

        console.log(token?.id);

        if(!token || !token.id){
            return NextResponse.json({ 
                message:"Unauthorized"
            }, {status:401})
        }

        const content = await Client.content.findMany({ 
            where:{ 
                userId:Number(token?.id)
            }
        })

        return NextResponse.json({
            data:content
        }, {status:200})
        
    }catch(error){ 
        return NextResponse.json({ 
            error:error,
        }, {status:500})
    }
}
