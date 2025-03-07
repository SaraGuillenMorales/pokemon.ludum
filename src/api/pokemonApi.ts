
import axios from "axios";

const pokemonApi = axios.create({
    baseURL: "https://pokeapi.con/api/v2/pokemon"
});

export { pokemonApi };