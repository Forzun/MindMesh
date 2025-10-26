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
              const returnData = { 
                id: existingUser.id.toString(), 
                name: existingUser.name, 
                email: existingUser.username, // Using username as email
                username: existingUser.username,
              };
              return returnData;
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
              username: user.username,
              email:user.username
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
        async jwt({token, user}){ ;
          
          // When user logs in (user object exists)
          if(user){
            token.id = user.id; 
            token.name = user.name;
            token.email = user.email;
            token.username = user.username;
          }
          
          // Migrate old tokens that don't have email/username
          if (!token.email || !token.username) {
            const userId = token.id || token.sub;
            
            if (userId) {
              const user = await prisma.user.findUnique({
                where: { id: parseInt(userId) }
              });
              
              if (user) {
                token.email = user.username;
                token.username = user.username;
                console.log("✅ Token migrated:", token);
              }
            }
          }
          return token;
        },
        async session({session, token}){
          
          if(session.user){ 
            session.user.id = token.id as string; 
            session.user.name = token.name as string;
            session.user.email = token.email as string;
            session.user.username = token.username as string;
          }
          
          return session;
        }
      },
}