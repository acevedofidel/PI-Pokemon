import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Detail = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    getPokemon(id);
  }, [id]);

  const getPokemon = async (id) => {
    const res = await axios.get(`http://localhost:3001/pokemons/${id}`);
    setPokemon(res.data);
  };

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div className="container ">
      <Link className="textInicio" to="/home">
        <button class="custom-btn btn">
          <span>Volver al Inicio</span>
        </button>
      </Link>
      {pokemon && pokemon !== "no se a encontrado ningun pokemon" ? (
        <div className="detailPokemon2">
          <h1>{pokemon.name}</h1>
          <img
            src={pokemon.img}
            alt="img not found"
            width="200px"
            height="250px"
          />
          <h2 className="caracteristicas">ID: {pokemon.id}</h2>
          <div>
            <h2 className="caracteristicas">
              Tipos:{" "}
              {pokemon.tipos?.map((tipo) => (
                <span className="tipos">{tipo}</span>
              ))}{" "}
              {pokemon.types?.map((tipo) => (
                <span className="tipos">{tipo}</span>
              ))}
            </h2>
          </div>
          <h2 className="caracteristicas">Vida: {pokemon.life_points}</h2>
          <h2 className="caracteristicas">Ataque: {pokemon.attack}</h2>
          <h2 className="caracteristicas">Defensa: {pokemon.defense}</h2>
          <h2 className="caracteristicas">Velocidad: {pokemon.speed}</h2>
          <h2 className="caracteristicas">Altura: {pokemon.height}</h2>
          <h2 className="caracteristicas">Peso: {pokemon.weight}</h2>
        </div>
      ) : (
        <h3>No se pudo cargar el pokemon</h3>
      )}
    </div>
  );
};

export default Detail;
