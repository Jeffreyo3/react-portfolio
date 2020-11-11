import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactCompleted from "./components/Contact/ContactCompleted";
import Footer from "./components/Footer";

import { Transition } from "react-transition-group";
import Lottie from "react-lottie";
import animationData from "./theme/bow.json";

// transition
const duration = 450;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

// animation
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

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

const FooterContainer = styled.footer`
  width: 95%;
  margin: 0 auto;
`;
//////////// END STYLED COMPONENTS /////////////

//////////// REACT COMPONENT /////////////
export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [pageIn, setPageIn] = useState(false);
  const [svgIn, setSvgIn] = useState(true);

  useEffect(() => {
    // remove scrollbar during anmiation
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      // trigger fade-out
      setSvgIn(false);
      body.style.overflow = "auto";
      // then unmount
      unMountSVG();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const unMountSVG = () => {
    setTimeout(() => {
      console.log("Mounting home page");
      setPageIn(true);
    }, 310);
  };

  return (
    <AppDiv>
      <Header>
        <Nav />
      </Header>
      {!pageIn ? (
        <Transition in={svgIn} timeout={0}>
          {(state) => (
            <>
              <Lottie
                options={defaultOptions}
                height={"70vh"}
                width={180}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              />
              <FooterContainer>
                <Footer />
              </FooterContainer>
            </>
          )}
        </Transition>
      ) : null}

      <Transition in={pageIn} timeout={0}>
        {(state) => (
          <main
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Intro />
            <Skills />
            <Summary />

            <DIVIDE />

            <Projects />

            <DIVIDE />

            {submitted ? (
              <ContactCompleted />
            ) : (
              <Contact setSubmitted={setSubmitted} />
            )}

            <DIVIDE />
          </main>
        )}
      </Transition>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppDiv>
  );
}
//////////// END REACT COMPONENT /////////////
