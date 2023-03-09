import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { UserContext } from '../../context/ContextoFormulario'
import { getTypes } from '../../hooks/api/apiCalls'
import PropTypes from 'prop-types';

const Select = ({name,label,isEntrenador = false}) => {
    const {dispatch} = useContext(UserContext)
    const query = useQuery("types",getTypes) 
    const  {data,isLoading,isSuccess, } = query

    const onBlur = (e) => {
        e.preventDefault();
        dispatch({
            type: isEntrenador ? 'ACTUALIZAR_ENTRENADOR' : 'ACTUALIZAR_POKEMON',
            payload: { [e.target.name]: e.target.value },
        });
    };


    return (
            <div className='input-contenedor'>
                <label htmlFor={name}> {label} </label>
                <select
                    name={name}
                    disabled={!isSuccess || isLoading}
                    onBlur={onBlur}
                >
                    {data &&
                        !isLoading &&
                        data?.results.map((item, index) => (
                            <option key={index} value={item.name}>
                                {item.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isEntrenador: PropTypes.bool,
};

export default Select;