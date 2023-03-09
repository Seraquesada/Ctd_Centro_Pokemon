import React,{ useContext } from 'react'
import { UserContext } from '../../context/ContextoFormulario'
import ListPokemons from './ListPokemons'


const InputPokemons = () => {
    const {handleNextPage,handlePrevioustPage,page} = useContext(UserContext)

    return (
        <div>
            <h4>Elija la especie del pokemon </h4>
            <ListPokemons/>
            <div className='input-contenedor'>
                    <div className='paginador'>
                        <button
                            className='boton-anterior'
                            onClick={handlePrevioustPage}
                            disabled={page === 0}
                        >
                            Anterior
                        </button>
                        <button
                            className='boton-siguiente'
                            onClick={handleNextPage}
                        >
                            Siguiente
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default InputPokemons