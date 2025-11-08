import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const Client = new PrismaClient();

export async function POST(req: NextRequest) { 
    try{ 
        const session = await getServerSession(authOptions);

        if(!session){ 
            return NextResponse.json({success:false , error: "Unauthorized"} , {status:401})
        }

        const body = await req.json(); 
        const id = body.data.id;

        if(!id){ 
            return NextResponse.json({success:false , error: "Invalid id"} , {status:400})
        }

        const content = await Client.content.findUnique({ 
            where: { 
                id:id
            }
        })

        if(!content){ 
            return NextResponse.json({success:false, error: "Content not found"} , {status:404})
        }

        if(content.userId !== parseInt(session.user.id)){ 
            return NextResponse.json({success:false, error: "Forbidden"} , {status:403})
        }

        const deletedContent = await Client.content.delete({
            where: {
                id: id
            }
        })

        
        return NextResponse.json({
            success: true,
            message: "Content deleted successfully",
            data: deletedContent,
          });

    }catch(error){ 
        return NextResponse.json({ 
            success:false, 
            error:error
        })
    }
}