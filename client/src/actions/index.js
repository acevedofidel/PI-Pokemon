import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pokemons", {});
    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      if (json.data) {
        return dispatch({
          type: "GET_NAME_POKEMONS",
          payload: [json.data],
        });
      } else {
        return dispatch({
          type: "GET_NAME_POKEMONS",
          payload: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getIdPokemons(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/pokemons/${id}`);
      if (json.data) {
        return dispatch({
          type: "GET_ID_POKEMONS",
          payload: [json.data],
        });
      } else {
        return dispatch({
          type: "GET_ID_POKEMONS",
          payload: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

//exportar la funcion orderByAttack
export function orderByAttack(payload) {
  return {
    type: "ORDER_BY_ATTACK",
    payload,
  }
}

export function filterPokemonsByTypes(payload) {
  return {
    type: "FILTER_BY_TYPES",
    payload,
  };
}

export function getPokemontypes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/types", {});
    return dispatch({
      type: "GET_TYPES",
      payload: json.data,
    });
  };
}

export function orderByname(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function deletePokemon(id) {
  return async function (dispatch) {
    try {
      var json = await axios.delete(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
        type: "DELETE_POKEMON",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}