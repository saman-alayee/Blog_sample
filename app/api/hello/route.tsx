import { NextResponse } from "next/server"


const url: string = process.env.DATA_SOURCE_URL as string
const apiKey:string=process.env.DATA_API_KEY as string

//CRUD
export async function GET() {
    const res = await fetch(url)
    const todos = await res.json()
    return NextResponse.json(todos)
}


export async function POST(request:Request) {
    const {userId,title}:routeRequest=await request.json()
    if (!userId || !title) return NextResponse.json({"message":"userId and title required"})   
    const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Api-key':apiKey
        },
        body:JSON.stringify({userId,title,completed:false})
    }
    )
    const todos = await res.json()
    return NextResponse.json(todos)
}


export async function DELETE(request:Request) {
    const {id}:routeRequest=await request.json() 
    if (!id) return NextResponse.json({"message":"id required"})   
    const res = await fetch(`${url}/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Api-key':apiKey
        },
    }
    )
    return NextResponse.json({"message" : `Todo ${id} deleted`})
}



export async function PUT(request:Request) {
    const {userId,title,id,completed}:routeRequest=await request.json()
    if (!userId || !title || !id || typeof(completed) !== 'boolean') return NextResponse.json({"message":"Todo details required"})   
    const res = await fetch(`${url}/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Api-key':apiKey
        },
        body:JSON.stringify({userId,title,completed})
    }
    )
    const todos = await res.json()
    return NextResponse.json(todos)
}