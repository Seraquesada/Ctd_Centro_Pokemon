import axios from 'axios';

const api = "http://localhost:4000";
const apiPokemon="https://pokeapi.co/api/v2"

export const getTypes =async()=>{
    const response = await fetch(`${apiPokemon}/type`);
    return response.json();
}

export const getPokemons = async (page)=>{
    const response = await fetch(`${apiPokemon}/pokemon-species/?limit=20&offset=${page}`);
    return  response.json();
}

export const postForms = (async (infoForm) => {
    const {data} = await axios.post(`${api}/entrenadores`,infoForm);
    return data;
    }
)