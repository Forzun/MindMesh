import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const Client = new PrismaClient();

export async function GET(req: NextRequest , { params }: { params: Promise<{ id: string }> }){ 
    try{ 
        const { id: ShareId } = await params;
        console.log(ShareId);

        if(ShareId){ 
            const link = await Client.link.findUnique({ 
                where: { 
                    hash: ShareId
                }
            })

            if(!link){ 
                return NextResponse.json({
                    message:"Link is found"
                })
            }

            const content = await Client.content.findMany({ 
                where: { 
                    userId: link.userId
                }
            })

            const user = await Client.user.findMany({ 
                where: {
                    id: link.id
                }
            })

            return NextResponse.json({ 
                result: { 
                    content:content,
                    user: user
                }
            }, {status: 200})

        }

    }catch(error){ 
        NextResponse.json({
            error:error
        })
    }
}




