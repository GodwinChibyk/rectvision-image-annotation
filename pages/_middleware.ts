// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
  const authToken = request.cookies['authToken'];

    if(authToken){
      if(request.url.includes('/auth')){
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    } 
  return NextResponse.next()
}

function basename(path:string) {
  return path.split('/').reverse()[0];
}