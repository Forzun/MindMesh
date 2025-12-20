import { Random } from "@/utils/hash";
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const Client = new PrismaClient();

export async function POST(req: NextRequest){ 
    try{
        const body = await req.json();
        const share = body.share;

        const token = await getToken({ 
            req:req, 
            secret:process.env.NEXTAUTH_SECRET
        })

        const userId = Number(token?.id);

        if(share){ 
            const existingUser = await Client.link.findFirst({ 
                where: {
                    userId: userId
                }
            })

            if(existingUser){ 
                return NextResponse.json({ 
                    hash:existingUser.hash
                }, {status:407})
                return;
            }   

            const hash = Random(10); 
            console.log(hash);
            const Link = await Client.link.create({ 
                data: { 
                    hash:hash, 
                    userId:userId
                }
            })
            return NextResponse.json({ 
                data:Link
            }, {status:200})
        }else{ 
            return NextResponse.json({ 
                msg:"link is disable"
            }, {status:400})
        }
    
    }catch(error){ 
        return NextResponse.json({ 
            error:error
        })
    }
}




