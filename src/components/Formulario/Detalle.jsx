
import React, { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { UserContext } from "../../context/ContextoFormulario";
import { postForms } from "../../hooks/api/apiCalls";
const Detalle = () => {
  const {store,userChoice} = useContext(UserContext);
  const queryClient= useQueryClient()
  const {mutate,isLoading,isSuccess,data,reset} = useMutation(postForms,{
    onSuccess:(info)=>{
      queryClient.setQueriesData("info",prevPost => prevPost.concat(info))
      queryClient.invalidateQueries("info")
    }
  }) 
  const handleSubmit = e => {
    
  } 
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre:{store?.entrenador?.nombre}</p>
          <p>Apellido:{store?.entrenador?.apellido}</p>
          <p>Email:{store?.entrenador?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{store?.pokemon?.nombrePokemon}</p>
          <p>Altura:{store?.pokemon?.alturaPokemon}</p>
          <p>Edad:{store?.pokemon?.edadPokemon}</p>
          <p>Elemento:{store?.pokemon?.tipoPokemon}</p>
          <p>Especie: {store?.pokemon?.especiePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => mutate(store)}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;

