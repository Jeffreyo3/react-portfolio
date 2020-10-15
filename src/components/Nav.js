import React from "react";
import styled from "styled-components";

//////////// STYLED COMPONENTS /////////////
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0.5rem;
  border-bottom: 2px solid ${(p) => p.theme.colors.c_secondary};
`;

const Span = styled.span`
  color: ${(p) => p.theme.colors.c_tertiary};
  font-size: ${(p) => p.theme.fontsizes.fs_h};
  @media (max-width: 575px) {
    font-size: ${(p) => p.theme.fontsizes.fs_h_mobile};
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  max-width: 600px;
  @media (max-width: 575px) {
    width: 80%;
  }
`;

const Li = styled.li`
  font-size: ${(p) => p.theme.fontsizes.fs_li};
  @media (max-width: 575px) {
    font-size: ${(p) => p.theme.fontsizes.fs_li_mobile};
  }
`;

const A = styled.a`
  text-decoration: none;
  &:link {
    color: ${(pr) => pr.theme.colors.c_p};
  }
  &:visited {
    color: ${(pr) => pr.theme.colors.c_p};
  }
  &:hover {
    color: ${(pr) => pr.theme.colors.c_tertiary};
    font-weight: bold;
    cursor: pointer;
  }
  &:active {
    color: ${(pr) => pr.theme.colors.c_p};
  }
`;
//////////// END STYLED COMPONENTS /////////////

//////////// REACT COMPONENT /////////////
export default function Nav() {
  return (
    <NavBar>
      <Span>J|O</Span>
      <Ul>
        <Li>
          <A href="#about">About</A>
        </Li>
        <Li>
          <A href="#projects">Projects</A>
        </Li>
        <Li>
          <A href="#contact">Contact</A>
        </Li>
        <Li>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jeffrey-orndorff"
          >
            LinkedIn
          </A>
        </Li>
      </Ul>
    </NavBar>
  );
}
//////////// END REACT COMPONENT /////////////
