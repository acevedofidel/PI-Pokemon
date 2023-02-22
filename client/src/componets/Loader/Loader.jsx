import loading from "../../images/pikachu-running.gif";
import { DivStyled, ImgStyled } from "./LoaderStyled";

export default function Loader() {
    return (
        <DivStyled className="loader">
        <ImgStyled src={loading} alt="loading" />
        </DivStyled>
    );
}