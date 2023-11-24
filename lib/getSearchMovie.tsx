const getSearchMovie =async (searchQuery:{searchitem:string}) => {


    const url=`https://moviesapi.ir/api/v1/movies?q=${searchQuery.searchitem}&page={page}`
    
    const request=await fetch(url)
    .then(req=>req.json())

    return request;
  
}

export default getSearchMovie

{/*
    const searchParam=new URLSearchParams({
        action:'query',
        generator:'search',
        gsrsearch:searchQuery,
        gsrlimit:'20',
        prop:'pageimages|extracts',
        exchars:'100',
        exintro:'true',
        explaintext:'true',
        exlimit:'max',
        format:'json',
        origin:'*'
    })

*/}