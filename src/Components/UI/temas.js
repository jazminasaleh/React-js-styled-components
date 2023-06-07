import { styled } from "styled-components"
import{
    fondoClaro,
    contenidoClaro,
    textoFondoClaro,
    fondoOscuro,
    contenidoOscuro,
    textoFondoCOscuro
} from "./variables"

export const temaCalro ={
    body: fondoClaro,
    inside: contenidoClaro,
    text: textoFondoClaro,
    filter: ""
}

export const temaOscuro ={
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoCOscuro,
    filter: "invert(100%)"
}

export const BtnTema = styled.div`
    position: absolute;
    top: 4vh;
    right: 20px;
    background-color: inherit;
    border: none;
    cursor: pointer;
`
