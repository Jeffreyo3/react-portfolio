import React, { useState } from "react";
import { Route } from "react-router-dom";

import styled from "styled-components";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Intro from "./components/Intro";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactCompleted from "./components/Contact/ContactCompleted";

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

const SPACE = styled.div`
  max-width: 82.5rem;
  width: 95%;
  margin: 6rem auto;
`;

const FooterContainer = styled.footer`
  width: 95%;
  margin: 0 auto;
`;
//////////// END STYLED COMPONENTS /////////////

//////////// REACT COMPONENT /////////////
export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AppDiv>
      <Header>
        <Nav />
      </Header>

      <Route exact path="/">
        <Home
          submitted={submitted}
          setSubmitted={setSubmitted}
          DIVIDE={DIVIDE}
          FooterContainer={FooterContainer}
        />
      </Route>
      <Route path="/about">
        <Intro />
        <Skills />
        <Summary />
        <DIVIDE />
      </Route>
      <Route path="/projects">
        <SPACE />
        <Projects />
        <DIVIDE />
      </Route>
      <Route path="/contact">
        <SPACE />
        {submitted ? (
          <ContactCompleted />
        ) : (
          <Contact setSubmitted={setSubmitted} />
        )}
        <DIVIDE />
      </Route>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppDiv>
  );
}
//////////// END REACT COMPONENT /////////////
