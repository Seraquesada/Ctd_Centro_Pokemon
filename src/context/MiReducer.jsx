
export const initialState = {
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: "",
    edadPokemon:"",
    alturaPokemon:"",
    elementoPokemon:""
};

export const displayReducer = (state, action) => {
    switch (action.type){
        case "ACTUALIZAR_ENTRENADOR":
            return {
                ...state,
                nombre: "",
                apellido: "",
                email: ""
            }
            break;
        case "ACTUALIZAR_POKEMON":
            return {
                ...state,
                nombrePokemon: "",
                edadPokemon:"",
                alturaPokemon:"",
                elementoPokemon:""
            }
            break;
        default: return initialState;
        break;                
    }
};