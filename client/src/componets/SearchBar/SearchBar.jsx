import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../actions";
import s from "./SearchBar.module.css";

export const SearchBar = ({ setCurrentPage }) =>{
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    setCurrentPage(1);
    e.preventDefault();
    if (name !== "") {
      dispatch(getNamePokemons(name.toLowerCase()));
      setName("");
    } else {
      alert("Ingrese un nombre válido");
    }
  }

  return (
    <div className={s.group}>
      <input
        className={s.searchBar}
        value={name}
        type="text"
        placeholder="Nombre del pokemon"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className={s.buttonStyled}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </div>
  );
}
