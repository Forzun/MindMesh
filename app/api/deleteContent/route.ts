import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const Client = new PrismaClient();

export async function POST(req: NextRequest) { 
    try{ 
        const body = await req.json(); 

        
        const DeleteContent = await Client.content.delete({ 
            where: { 
                id: body.id
            }
        })

        if(DeleteContent){ 
            return NextResponse.json({ 
                success:true, 
                data:DeleteContent
            })
        }

    }catch(error){ 
        return NextResponse.json({ 
            success:false, 
            error:error
        })
    }
}