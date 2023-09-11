

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
            .then((response => response.json()))
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url) //indo no servidor buscar lista de pokemons
        .then((response) => response.json()) //convertendo lista para json
        .then((jsonBody) => jsonBody.results) // pegando lista de dentro do json
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //transformondo em lista de promessas os detalhes do pokemon e convertendo para receber em json.
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
