
// Aqui debemos crear nuestro contexto y nuestro provider.
import React,{createContext, useReducer} from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext();

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
 * @property {string} nombre
 * @property {string} tipo
 * @property {string} elemento
 * @property {number} altura
 * @property {number} edad
 */

/**
 * @type {initialState}
 */
const initialState = {
    /**
     * @type {entrenador}
     */
    entrenador:null,
    /**
     * @type {pokemon}
     */
    pokemon:null
};
/**
 * 
 * @param {initialState} state recibe el estado inicial
 * @param {accion} action  recibela accion para ser capaz de modificar el estado
 * @returns {initialState} nos devuelve el estado inicial con sus actualizaciones
 */
const displayReducer = (state, action) => {
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

export const UserProvider= ({children}) => {
    const [store, dispatch] = useReducer(displayReducer,initialState);

    return (
        <UserContext.Provider value={{store, dispatch}}>
            {children}
        </UserContext.Provider>
    )
};

UserProvider.propTypes={
    children: PropTypes.element.isRequired
}
