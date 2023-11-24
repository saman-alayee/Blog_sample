import { NextResponse } from "next/server"
const url: string = process.env.DATA_SOURCE_URL as string


export async function GET() {
    //const id =request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await fetch(`${url}`)
    const todos = await res.json()
    return NextResponse.json(todos)
}