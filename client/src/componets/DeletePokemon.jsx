import React, { useState } from 'react';
import axios from 'axios';

const deletePokemonById = (id) => {
    // Code to delete a Pokémon from the database by its ID
    axios.delete(`http://localhost:3001/pokemons/${id}`);
   
        alert("Pokemon eliminado!");
    }

const PokemonDeleteForm = () => {
    const [id, setId] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      deletePokemonById(id);
    };
    
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          ID del Pokémon:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <input type="submit" value="Eliminar" />
      </form>
    );
  };

  export default PokemonDeleteForm;