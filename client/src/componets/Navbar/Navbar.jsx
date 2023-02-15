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
                <h1 className={s.title}>SOY HENRY POKEMON PI</h1>
               <Link to={'/'} className={s.to_home}><img src={img} alt='home'></img></Link>
            </div>
    )
}


