import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonStyled, DivStyled, ImageStyled } from "./styles/LandingPage";

export default function LandingPage() {
  const navigate = useNavigate();

  const [spinner, setSpiner] = useState(false);

  const ingresar = () => {
    setSpiner(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <DivStyled>
      <h1>
        <ImageStyled
          src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
        />
      </h1>
      {spinner ? (
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      ) : (
        <ButtonStyled onClick={ingresar}> Ingresar</ButtonStyled>
      )}
    </DivStyled>
  );
}
