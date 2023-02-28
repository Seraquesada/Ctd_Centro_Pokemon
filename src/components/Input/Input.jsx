import React, { useContext,  } from "react";
import PropTypes from 'prop-types';
import { UserContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text",isEntrenador }) => {
  const {dispatch} = useContext(UserContext);

  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.

/**
 * @description actualiza el estado global al salir del input correspondiente
 * @param {InputEvent} evento 
 * 
 */

  const onBlur = (e) =>dispatch(
    {
      type:isEntrenador ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
      payload:{[e.target.name]:e.target.value}
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  });

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  isEntrenador: PropTypes.bool,
};