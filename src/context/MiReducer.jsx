//@ts-check

/**
 * @typedef {object} initialState
 * @property {entrenador | undefined}  entrenador
 * @property {pokemon | undefined} pokemon
 */

/**
 * @typedef {object} accion
 * @property {string} type
 * @property {object} payload
 */

/**
 * @typedef {object} entrenador
 * @property {string} nombre
 * @property {string} apellido
 * @property {string} email
 */

/**
 * @typedef {object} pokemon
 * @property {string} nombrePokemon
 * @property {string} tipoPokemon
 * @property {number} alturaPokemon
 * @property {number} edadPokemon
 * @property {string} especiePokemon
 */

/**
 * @type {initialState}
 */
export const initialState = {
    /**
         * @type {entrenador}
         */
    entrenador: {
        nombre: '',
        apellido: '',
        email: '',
    },
    /**
     * @type {pokemon}
     */
    pokemon: {
        nombrePokemon: '',
        tipoPokemon: '',
        alturaPokemon: 0,
        edadPokemon: 0,
        especiePokemon: '',
    },
};
/**
 * 
 * @param {initialState} state recibe el estado inicial
 * @param {accion} action  recibela accion para ser capaz de modificar el estado
 * @returns {initialState} nos devuelve el estado inicial con sus actualizaciones
 */
export const displayReducer = (state, action) => {
    switch (action.type){
        case "ACTUALIZAR_ENTRENADOR":
            return {
                ...state,
                    /**
                     * @type {entrenador}
                     */
                entrenador:{...state.entrenador,...action.payload}
            }
            break;
        case "ACTUALIZAR_POKEMON":
            return{
                ...state,
                    /**
                     * @type {pokemon}
                     */
                pokemon:{...state.pokemon,...action.payload}
                }
            break;
        default: return initialState;
        break;                
    }
};