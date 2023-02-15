import React from "react";
import { DivStyled, DivStyled2, h1 } from "./Cards";

export default function Card({ name, image, tipos }) {
  console.log(tipos);
  return (
    <DivStyled>
      
      <DivStyled2>
      <h2>{name}</h2>
        <p>Tipo : </p>
        {tipos.map((tipo) => (
          <p>{tipo}</p>
        ))}
      </DivStyled2>
      <img src={image} alt="img not found" width="220px" height="220px" />
    </DivStyled>
  );
}
