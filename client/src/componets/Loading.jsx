import React from 'react';
import image from '../images/loading.gif';
export default function Loading(){

    return(
        <>
        <br/>
        <div>Please wait...</div>
        <br/>
        <div className="loading">
            <img src={image} alt="loading" height={300}/>
        </div>
        </>
    )
}