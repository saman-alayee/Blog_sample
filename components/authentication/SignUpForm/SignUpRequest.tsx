"use server"

import { SignUpDataType } from "../entrySchemaTypes";



const url = process.env.DATA_SOURCE_URL as string

export async function SignUpUser(data: SignUpDataType) {

    try {
        const req = await fetch("http://localhost:5000/api/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        return req;

    } catch (e) {
        console.log(e);
    }

}
