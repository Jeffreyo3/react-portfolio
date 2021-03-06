import React from "react";
import styled from "styled-components";
import headshot from "../images/headshot.png";

//////////// STYLED COMPONENTS /////////////
const IntroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5.6rem auto;
  width: 95%;

  @media (max-width: 715px) {
    flex-direction: column;
    margin: 2.5rem auto;
  }
`;

const TitleH1 = styled.h1`
  font-size: ${(p) => p.theme.fontsizes.fs_title};
  color: ${(p) => p.theme.colors.c_p};

  @media (max-width: 715px) {
    text-align: center;
    font-size: ${(p) => p.theme.fontsizes.fs_title_mobile};
  }
`;

const Img = styled.img`
  border-radius: 49%;
  width: 308px;
  margin: 0 1rem 0 6.2rem;
  @media (max-width: 715px) {
    margin: 3.2rem auto 0;
  }
`;
//////////// END STYLED COMPONENTS /////////////

//////////// REACT COMPONENT /////////////
export default function Intro() {
  return (
    <IntroDiv>
      <TitleH1>Hello, My name is Jeff and I’m a Software Developer.</TitleH1>
      <Img
        src={headshot}
        alt="Jeff in black shirt smiling in front of a grey background."
      />
    </IntroDiv>
  );
}
//////////// END REACT COMPONENT /////////////
