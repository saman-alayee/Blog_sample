const url = process.env.DATA_SOURCE_URL as string

interface dataLoginProps {
    email: string,
    password: string
}

const LoginUser = async (data: dataLoginProps) => {
    const { email, password } = data
    try {
        const req = await fetch(`${url}/auth`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        }

        )
            .then(res => res.json())
        console.log(req);
    }
    catch (e) {
        console.log('some thing went wrong !')
    }



};

export default LoginUser;