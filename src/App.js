import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

//////////// STYLED COMPONENTS /////////////
const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  font-family: ${(pr) => pr.theme.fonts.f_primary};
`;

const Header = styled.header`
  width: 95%;
  margin: 0 auto;
`;

const DIVIDE = styled.div`
  max-width: 82.5rem;
  width: 95%;
  border-bottom: 0.1rem solid ${(pr) => pr.theme.colors.c_divider};
  margin: 6rem auto;
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

      <DIVIDE />

      <Projects />

      <DIVIDE />

      <Contact />
    </AppDiv>
  );
}
//////////// END REACT COMPONENT /////////////
