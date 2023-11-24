
export async function getData() {
    try {
        const req = await fetch("http://localhost:3000/api/hello/allMovie", { cache: 'no-store' })
        .then(req=>req.json())
        return req.data
    }
    catch (e) {
        throw new Error('faild to fetch data')
    }
}
