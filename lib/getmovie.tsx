export async function getOneData(id: number) {
    try {
        const req = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { cache: 'no-store' })
        .then(req=>req.json())
        return req;
    }
    catch (e) {
        console.log(e);

    }
}