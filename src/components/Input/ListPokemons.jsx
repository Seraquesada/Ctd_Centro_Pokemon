import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useQuery } from 'react-query'
import { UserContext } from '../../context/ContextoFormulario'
import { getPokemons } from '../../hooks/api/apiCalls'

const ListPokemons = () => {
    const {page,dispatch} = useContext(UserContext)
    const query =  useQuery(["getPokemons",page],() =>getPokemons(page),{
        keepPreviousData: true,

    })
    const {data,isLoading,} = query;


    const handleClick = (e,especiePokemon) =>{
        e.preventDefault();
        dispatch({
            type: 'ACTUALIZAR_POKEMON',
            payload: { especiePokemon },
        });
    }

    return (
        <>
            {
                        data &&
                            !isLoading &&
                            data?.results.map((especie) => (
                                <button
                                    key={especie.name}
                                    className='botones-especie'
                                    onClick={e=>{handleClick(e,especie.name)}}
                                >
                                    {especie.name}
                                </button>
                            ))
                    
            }
        </>
    )
    }

export default ListPokemons