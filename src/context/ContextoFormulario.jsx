
// Aqui debemos crear nuestro contexto y nuestro provider.
import React,{createContext, useReducer, useState } from "react";
import {displayReducer,initialState} from  "./MiReducer"
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider= ({children}) => {
    const [page, setPage] = useState(0)
    const [store, dispatch] = useReducer(displayReducer,initialState);

    const handlePrevioustPage = () => setPage(prevState =>  prevState - 20);
    const handleNextPage = () => setPage(prevState => prevState + 20);
    
    console.log(page)
    return (
        <UserContext.Provider value={{store,dispatch,page,handlePrevioustPage,handleNextPage}}>
            {children}
        </UserContext.Provider>
    )
};

UserProvider.propTypes={
    children: PropTypes.element.isRequired
}
