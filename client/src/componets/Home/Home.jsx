//importo los hooks q voy a usar de react
import React, { useState, useEffect } from "react";
import s from '../Home/Home.module.css'
//importo la action q voy a usar en este componente
import {
  getPokemons,
  filterPokemonsByTypes,
  getPokemontypes,
  filterCreated,
  orderByname,
} from "../../actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Cards/Card";
import Navbar from "../Navbar/Navbar";
import Paginate from "../Paginate/Paginate.jsx";


export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemons = currentPage * pokemonsPerPage;
  const indexOfFirsttPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirsttPokemons,
    indexOfLastPokemons
  );
  const allTypes = useSelector((state) => state.pokemonstypes);

  const settingCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getPokemontypes());
    setCurrentPage(1);
  }, []);


  function handleSort(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByname(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterTypes(e) {
    setCurrentPage(1);
    dispatch(filterPokemonsByTypes(e.target.value));
  }

  function handleFilterCreated(e) {
    setCurrentPage(1);
    dispatch(filterCreated(e.target.value));
  }
  // if (allPokemons.length === 0) {
  //   return <Loading/>
  // }
  return (
    <>
    <div className={s.div_home}>
     <Navbar setCurrentPage={setCurrentPage}/>
      <div>
        <select className={s.select_container} onChange={handleSort}>
          <option value="asc">Ascendete</option>
          <option value="dsc">Descendente</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
        <select className={s.select_container} onChange={handleFilterTypes}>
          <option value="ALL">Todos</option>
          {allTypes?.map((c) => {
            return <option value={c.name}>{c.name}</option>;
          })}
        </select>

        <select className={s.select_container} onChange={handleFilterCreated}>
          <option value="All">Todos</option>
          <option value="created">Creados</option>
          <option value="api">Existentes</option>
        </select>
          <div>

        <Paginate
          pokemosPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          settingCurrentPage={settingCurrentPage}
          currentPage={currentPage}
          />
          </div>
        <div className={s.div_pokemon__container}>
          {currentPokemons.length > 0 ? (
            currentPokemons?.map((p) => {
              return (
                <Link
                key={p.id}
                to={"/detail/" + p.id}
                >
                  <Card
                    name={p.name}
                    image={p.img}
                    tipos={p.tipos || p.types}
                    />
                </Link>
              );
            })
            ) : (
              <h5>No se encontraron pokemons con esas caracteristicas</h5>
              )}
        </div>
      </div>
    </div>
              </>
  );
}
