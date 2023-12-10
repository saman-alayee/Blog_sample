import { z } from 'zod'
import getSignUpUsers from '../GetSignUpUsers';


interface dataProps {
    name: string;
    email: string,
    password: string
}

export const SignUpSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name Required' }),
    email: z
        .string()
        .email("no valid email")
        .min(1, { message: "Email Required" })
        .refine(async (e) => {

            const req: dataProps[] = await getSignUpUsers()
            console.log(req);
            
            let isInclude: boolean = true;
            req.map(item => {
                if (item.email === e) {
                    isInclude = false;
                    return
                }
            })
            return isInclude;
        }, { message: "email has been register please login" }),

    password: z
        .string()
        .min(8, { message: "password should 8 character" })
})

