import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import s from "../Navbar/Navbar.module.css";
import img from '../../images/homeicon.png';

export default function Navbar ({setCurrentPage}) {
    return (
            <div className={s.navbar}>
                <Link to='/create' className={s.navlink}>Crear Pokemon</Link>
                <SearchBar setCurrentPage={setCurrentPage} />
                <h1 className={s.titleStyle}>POKEDEX</h1>

                <div className={s.to_home}>
               <Link to={'/'} ><img src={img} alt='home'></img></Link>
               
            
               {/* <button onClick={() => window.location.reload(false)}>Reload</button> */}
                </div>
            </div>
    
    )
}


