const url = process.env.DATA_SOURCE_URL as string

interface dataProps {
    name:string;
    email: string,
    password: string
}

const SignUpUser = async (data: dataProps) => {
    const { email, password } = data
    console.log(email);
    console.log(password);

    try {
        const req = await fetch(`${url}/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        }
        )
            .then(res => res.json())
        return req;
    }
    catch (e) {
        console.log(e)
    }



};

export default SignUpUser;


