import React, { useState, useEffect } from "react";

import Intro from "../components/Intro";
import Summary from "../components/Summary";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ContactCompleted from "../components/Contact/ContactCompleted";
import Footer from "../components/Footer";

import { Transition } from "react-transition-group";
import Lottie from "react-lottie";
import animationData from "../theme/bow.json";

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

export default function Home(props) {
  const { FooterContainer, DIVIDE } = props;
  const { submitted, setSubmitted } = props;
  const { body } = props;

  const [pageIn, setPageIn] = useState(false);
  const [svgIn, setSvgIn] = useState(true);

  useEffect(() => {
    // remove scrollbar during anmiation
    
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
      setPageIn(true);
    }, 310);
  };

  return (
    <>
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
    </>
  );
}
