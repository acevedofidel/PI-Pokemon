import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemontypes } from "../../actions";
import s from './Create.module.css'

const CreatePokemon = () => {
  const allTypes = useSelector((state) => state.pokemonstypes);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const [newPokemon, setNewPokemon] = useState({
    name: "",
    life_points: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/07/whos_that_pokemon.png?resize=738%2C320&ssl=1",
    tipo: [],
  });

  const changePokemon = (e) => {
    setError(null);
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getPokemontypes());
  }, []);

  const addTipo = (e) => {
    let tipos = newPokemon.tipo;
    tipos.push(e.target.value);
    setNewPokemon({
      ...newPokemon,
      tipo: tipos,
    });
  };

  const eliminarTipo = (t) => {
    setNewPokemon({
      ...newPokemon,
      tipo: newPokemon.tipo.filter((tipo) => tipo !== t),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (validate()) {
      const res = await axios.post(
        "http://localhost:3001/pokemons",
        newPokemon
      );
      if (res.status === 200) {
        alert("Pokemon creado correctamente!");
        // setTimeout(() => {
        //     history.push("/home")
        // }, 1000);
      }
    }
  };

  const validate = () => {
    if (newPokemon.name.length < 3 || newPokemon.name.length >= 15) {
      setError("El nombre debe contener entre 3 y 15 caracteres");
      return false;
    }
    if (newPokemon.life_points < 1) {
      setError("el pokemon debe tener mas 1 punto de vida");
      return false;
    }
    if (
      newPokemon.life_points === "" ||
      newPokemon.attack === "" ||
      newPokemon.defense === "" ||
      newPokemon.speed === "" ||
      newPokemon.height === "" ||
      newPokemon.weight === "" ||
      newPokemon.tipo.length < 1
    ) {
      setError("Debe completar todos los campos");
      return false;
    }
    return true;
  };

  return (
    
    <div className={s.container}>
      <Link to="/home">
        <button class={s.textInicio}>
          <span>Volver al Inicio</span>
        </button>
      </Link>

      <div>
        <h1 className="titleCreate">Crear Pokemon</h1>
      </div>
      <div className={s.div_container}>
        <form className={s.formStyled} onSubmit={handleSubmit}>
          <div>
            
            <input className={s.inputStyled} onChange={changePokemon} type="text" name="name" placeholder="Nombre" />
          </div>
          <div>
            <br />
            <input className={s.inputStyled} onChange={changePokemon} type="number" name="life_points" placeholder="Puntos de vida" />
          </div>
          <div>
            <br />
            <input className={s.inputStyled} onChange={changePokemon} type="number" name="attack" placeholder="Ataque"/>
          </div>
          <div>
            <br />
            <input className={s.inputStyled} onChange={changePokemon} type="number" name="defense" placeholder="Defensa" />
          </div>
          <div>
            <br />
            <input className={s.inputStyled} onChange={changePokemon} type="number" name="speed" placeholder="Velocidad" />
          </div>
          <div>
            <br />
            <input className={s.inputStyled} onChange={changePokemon} type="number" name="height" placeholder="Altura" />
          </div>
          <div>
           <br />
            <input className={s.inputStyled} onChange={changePokemon} type="number" name="weight" placeholder="Peso" />
          </div>
          <div>
            <br />
            <select className={s.inputStyled} onChange={addTipo}>
              <option value="ALL"> Todos </option>
              {allTypes?.map((c) => {
                return <option value={c.name}>{c.name}</option>;
              })}
            </select>
          </div>

          <div>
            <div>
              {newPokemon.tipo.map((t) => (
                <div>
                  {t}{" "}
                  <span className={s.span}
                    onClick={() => eliminarTipo(t)}
                    >
                    X
                  </span>
                </div>
              ))}
            </div>
            <hr />
          </div>
          {error && <h3 className="errorCreate">{error}</h3>}
          <button class={s.button}>
            {" "}
            Crear Pokemon
            <div class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                  ></path>
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default CreatePokemon;
