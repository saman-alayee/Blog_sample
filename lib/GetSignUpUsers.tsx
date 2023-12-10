import { z } from 'zod'
import { SignUpSchema } from './zodSchema/SignUpSchema';

const url = process.env.DATA_SOURCE_URL as string
type entryDataProps = z.infer<typeof SignUpSchema>

const getSignUpUsers = async () => {
    try {
        const req = await fetch("http://localhost:5000/api/users")
            .then(res => res.json());            
        return req;
    }
    catch (e) {
        console.log('some thing went wrong !')
    }
};

export default getSignUpUsers;