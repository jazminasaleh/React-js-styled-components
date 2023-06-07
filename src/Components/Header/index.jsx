import React from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components"
import {colorPrimario} from "../UI/variables"

console.log(colorPrimario)
const SrtyledHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${ (props) => props.primary ? "white" : colorPrimario};
  background-color: ${ (props) => props.primary ? "transparent" : "white"};
`
const Header = () => {
  return (
    <SrtyledHeader>
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ayuda
        </BtnHeader>
        <BtnHeader href="https://google.com">
          Salir
        </BtnHeader>
      </div>
    </SrtyledHeader>
  );
};

export default Header;
