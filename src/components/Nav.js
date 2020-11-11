import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//////////// STYLED COMPONENTS /////////////
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0.5rem;
  border-bottom: 2px solid ${(p) => p.theme.colors.c_secondary};
`;

const HomeLink = styled(Link)`
  text-decoration: none;
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

const StyledLink = styled(Link)`
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
`;
const ActiveStyledLink = styled(Link)`
  text-decoration: none;
  color: ${(pr) => pr.theme.colors.c_tertiary};
  font-weight: bold;
  cursor: pointer;
  &:link {
    font-weight: bold;
    cursor: pointer;
    color: ${(pr) => pr.theme.colors.c_tertiary};
  }
  &:visited {
    color: ${(pr) => pr.theme.colors.c_tertiary};
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
    color: ${(pr) => pr.theme.colors.c_tertiary};
  }
`;
//////////// END STYLED COMPONENTS /////////////

//////////// REACT COMPONENT /////////////
export default function Nav(props) {
  const [path, setPath] = useState("/");
  const {body} = props;

  const watchPath = (e) => {
    setPath(e.target.textContent);
    body.style.overflow = "auto";
  };

  return (
    <NavBar>
      <HomeLink to="/">J|O</HomeLink>
      <Ul>
        <Li>
          {path === "Projects" ? (
            <ActiveStyledLink onClick={watchPath} to="/projects">
              Projects
            </ActiveStyledLink>
          ) : (
            <StyledLink onClick={watchPath} to="/projects">
              Projects
            </StyledLink>
          )}
        </Li>
        <Li>
          {path === "About" ? (
            <ActiveStyledLink to="/about">About</ActiveStyledLink>
          ) : (
            <StyledLink onClick={watchPath} to="/about">
              About
            </StyledLink>
          )}
        </Li>
        <Li>
          {path === "Contact" ? (
            <ActiveStyledLink onClick={watchPath} to="contact">
              Contact
            </ActiveStyledLink>
          ) : (
            <StyledLink onClick={watchPath} to="contact">
              Contact
            </StyledLink>
          )}
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
