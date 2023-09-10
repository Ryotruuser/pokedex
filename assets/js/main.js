
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => response.json()) //retornando objeto para o response
    .then((jsonBody) => console.log(jsonBody)) //pegando objeto ja transformado
    .catch((error) => console.error(error)) // caso de erro