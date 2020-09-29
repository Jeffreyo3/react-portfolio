import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

//////////// STYLED COMPONENTS /////////////
const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  font-family: ${(p) => p.theme.fonts.f_primary};
`;

const Header = styled.header`
  width: 95%;
  margin: 0 auto;
`;
//////////// END STYLED COMPONENTS /////////////

//////////// REACT COMPONENT /////////////
export default function App() {
  return (
    <AppDiv>
      <Header>
        <Nav />
      </Header>

      <Intro />
      <Skills />
      <Summary />

      {/* <Projects /> */}
    </AppDiv>
  );
}
//////////// END REACT COMPONENT /////////////
