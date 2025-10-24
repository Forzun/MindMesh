import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = { 
  secret: process.env.NEXTAUTH_SECRET ,
    providers: [
        CredentialsProvider({
          name: "Credentials",

          credentials: {
            name: {label: "Name", type: "text" , placeholder:"User name"},
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" } 
          },
          
          async authorize(credentials) {
            // if (!credentials?.username || !credentials?.password || !credentials?.name) return null;

            const existingUser = await prisma.user.findUnique({ 
              where: { 
                username: credentials?.username
              }
            })

            if(existingUser){ 
                return { 
                  id:existingUser.id.toString(), 
                  name:existingUser.name, 
                  username:existingUser.username,
                }
            }
          
            const user = await prisma.user.create({ 
              data:{ 
                  name: credentials?.name ?? "",
                  username: credentials?.username ?? "", 
                  password: credentials?.password ?? " "
              }
            })
            
            return { 
              id: user.id.toString(), 
              name:user.name, 
              username: user.username
            }
          }
        })
      ],
      pages: { 
        signIn:"./signIn"
      }, 
      session: { 
        strategy:'jwt'
      }, 
      callbacks: { 
        async jwt({token , user}){ 
            if(user){
                token.id = user.id; 
            }
            return token;
        },
        async session({session , token}){
            if(session.user){ 
                session.user.id = token.id;
            }
            return session;
        }
      },
}