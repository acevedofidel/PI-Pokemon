
import { Link } from "react-router-dom";
import img from '../../images/soy-henry-poke.png';
import image from '../../images/pikachu.png';
import { ButtonStyled, DivStyled, ImgStyled, ImgStyled2 } from "./Landing";


export default function LandingPage() {
  return (
      <DivStyled>
      <ImgStyled src={img} alt="img not found" />
      <br></br>
      <Link to='/home'><ButtonStyled>Enter</ButtonStyled></Link>
      <br></br>
      <ImgStyled2 src={image} alt="img not found" />
      </DivStyled>
  )
}
