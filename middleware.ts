
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// export default withAuth({ 
//     pages: { 
//         signIn: "./signIn" 
//     }
// })


// export default withAuth({ 
//     pages: {
//         signIn:"./signIn"
//     }
// })


export async function middleware(request: NextRequest){ 
    const token = await getToken({req: request , secret: process.env.AUTH_SECRET});
    
    const isAuth = !!token; 
    const isAuthpPage = request.nextUrl.pathname === "/signIn"; 

    if(isAuth && isAuthpPage){ 
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }

    if(!isAuth && request.nextUrl.pathname.startsWith('/dashboard')) { 
        return NextResponse.redirect(new URL('signIn', request.url));
    }

    return NextResponse.next();
}

export const config = { 
    matcher: ['/api/content/:path']
}
