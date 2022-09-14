axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
        console.log(response.data.results);
    })
    .catch((err)=>{
        console.error(err);
    })