"use server"

import { SignUpDataType } from "@/components/authentication/entrySchemaTypes";




const url = process.env.DATA_SOURCE_URL as string

export async function signUpUser(data: SignUpDataType) {
    try {
        const req = await fetch(`${url}/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        console.log(req);

        return req;

    } catch (e) {
        throw Error("somthing went wrong please reload page")
    }

}
