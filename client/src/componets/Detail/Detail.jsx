import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import s from "./Detail.module.css";

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
    <div className={s.div_detail_container}>
      <Link className="textInicio" to="/home">
        <button className={s.button_back}>
          Volver
        </button>
      </Link>
      {pokemon && pokemon !== "no se a encontrado ningun pokemon" ? (
        <div className={s.div_container_pokemon}>
          <h4>{pokemon.name}</h4>
          <img
            src={pokemon.img}
            alt="img not found"
            width="150px"
            height="150px"
          />
          <h4 className="caracteristicas">ID: {pokemon.id}</h4>
          <div>
            <h4 className="caracteristicas">
              Tipos:{" "}
              {pokemon.tipos?.map((tipo) => (
                <span className="tipos">{tipo}</span>
              ))}{" "}
              {pokemon.types?.map((tipo) => (
                <span className="tipos">{tipo}</span>
              ))}
            </h4>
          </div>
          <h4 className="caracteristicas">Vida: {pokemon.life_points}</h4>
          <h4 className="caracteristicas">Ataque: {pokemon.attack}</h4>
          <h4 className="caracteristicas">Defensa: {pokemon.defense}</h4>
          <h4 className="caracteristicas">Velocidad: {pokemon.speed}</h4>
          <h4 className="caracteristicas">Altura: {pokemon.height}</h4>
          <h4 className="caracteristicas">Peso: {pokemon.weight}</h4>
        </div>
      ) : (
        <h4>No se pudo cargar el pokemon</h4>
      )}
    </div>
  );
};

export default Detail;
