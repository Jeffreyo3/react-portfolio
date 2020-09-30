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
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  max-width: 600px;
`;

const Li = styled.li`
  font-size: ${(p) => p.theme.fontsizes.fs_li};
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
          <A href="#">Home</A>
        </Li>
        <Li>
          <A href="#">Projects</A>
        </Li>
        <Li>
          <A href="#">Resume</A>
        </Li>
        <Li>
          <A href="#">Contact</A>
        </Li>
      </Ul>
    </NavBar>
  );
}
//////////// END REACT COMPONENT /////////////
