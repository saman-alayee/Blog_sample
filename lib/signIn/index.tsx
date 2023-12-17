"use server"

import { LoginDataType } from '@/components/authentication/entrySchemaTypes';

const url = process.env.DATA_SOURCE_URL as string

export async function loginUserRequest(data: LoginDataType) {
    try {
        const req = await fetch(`${url}/api/auth`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
            return req.ok;

    } catch (e) {
        throw Error('somthing went wrong please reload page')        
    }

}



