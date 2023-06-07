import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaCalro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI/temas";
import SitcherTema from "./Components/SitcherTema";
function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () =>{
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={tema ? temaCalro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
