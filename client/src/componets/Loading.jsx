import React from 'react';
import image from '../images/loading.gif';
import { LoaderStyled } from './styles/Loading';

export default function Loading(){

    return(
        <LoaderStyled src={image} alt="" />
        )
}