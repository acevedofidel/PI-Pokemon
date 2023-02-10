import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled, DivStyled, ImageStyled, LogoLandingStyled } from "./styles/LandingPage";
import img from '../images/soy-henry-poke.png';
import image from '../images/pikachu.png';


export default function LandingPage() {
  return (
      <DivStyled>
      <ImageStyled src={img} alt="img not found" />
      <br></br>
      <Link to='/home'><ButtonStyled>Enter</ButtonStyled></Link>
      <br></br>
      <LogoLandingStyled src={image} alt="img not found" />
      </DivStyled>
  )
}
