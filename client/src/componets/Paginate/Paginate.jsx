import React from "react";
import { PaginateButton, PaginateNav, PaginateUl } from "./PaginateStyle";

export default function Paginate ({ pokemosPerPage, allPokemons, settingCurrentPage, currentPage }) {
    const pageNumber = []

    for (let i = 0; i < Math.ceil(allPokemons / pokemosPerPage); i++) {
        pageNumber.push(i + 1)
    }

    return (
        <PaginateNav>
            <PaginateUl>
            {pageNumber &&
                pageNumber.map((number, pos) => (
                    <PaginateButton key={pos} className={currentPage === number ? "currentPage cursorPointer" 
                    : "page cursorPointer"} onClick={() => settingCurrentPage(number)}>
                        {number}</PaginateButton>
                    ))}

                    </PaginateUl>
                    </PaginateNav>
    )
}


