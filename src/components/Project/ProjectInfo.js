import React from "react";
import styled from "styled-components";

////////////// STYLED COMPONENTS ///////////////
const ProjInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  min-height: 32rem;
  margin: 10% 15% ;
  @media(max-width: 900px){
    height: auto;
    margin: 8%;
  }
`;

const InfoText = styled.div`
  width: 100%;

  h3 {
    font-size: ${(pr) => pr.theme.fontsizes.fs_secondary_h};
    margin-bottom: 2rem;
  }
  p {
    font-size: ${(pr) => pr.theme.fontsizes.fs_description};
    font-family: ${(pr) => pr.theme.fonts.f_secondary};
    line-height: 1.1;
    margin-bottom: 5%;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    text-decoration: none;
    font-size: ${(pr) => pr.theme.fontsizes.fs_li};
    padding: 2px 6px 2px 6px;
    border-style: solid;
    border-width: 1px;
    border-radius: 7px;
  }
`;

const CodeButton = styled.a`
  border-color: ${(pr) => pr.theme.colors.c_tertiary};
  background-color: ${(pr) => pr.theme.colors.c_background};
  &:link {
    color: ${(pr) => pr.theme.colors.c_tertiary};
  }
  &:visited {
    color: ${(pr) => pr.theme.colors.c_tertiary};
  }
  &:hover {
    color: ${(pr) => pr.theme.colors.c_tertiary};
    font-weight: bold;
    box-shadow: 2px 2px 5px ${(pr) => pr.theme.colors.c_shadow};
    cursor: pointer;
  }
  &:active {
    color: ${(pr) => pr.theme.colors.c_tertiary};
  }
`;
const LiveButton = styled.a`
  border-color: ${(pr) => pr.theme.colors.c_primary};
  background-color: ${(pr) => pr.theme.colors.c_primary};
  &:link {
    color: ${(pr) => pr.theme.colors.c_live};
  }
  &:visited {
    color: ${(pr) => pr.theme.colors.c_live};
  }
  &:hover {
    color: ${(pr) => pr.theme.colors.c_live};
    font-weight: bold;
    border-color: ${pr => pr.theme.colors.c_tertiary};
    box-shadow: 4px 4px 5px ${(pr) => pr.theme.colors.c_shadow};
    cursor: pointer;
  }
  &:active {
    color: ${(pr) => pr.theme.colors.c_live};
  }
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ProjectInfo({project}) {
  return (
    <ProjInfo>
          <InfoText>
            <h3>{project.name}</h3>
            {project.description.map((item,idx) => <p key={idx}>{item}</p>)}
            {/* <p>{project.description}</p> */}
          </InfoText>
          <ButtonDiv>
            <CodeButton
              target="_blank"
              rel="noopener noreferrer"
              href={project.github_repo}
            >
              Code
            </CodeButton>
            <LiveButton
              target="_blank"
              rel="noopener noreferrer"
              href={project.deployed_url}
            >
              Live
            </LiveButton>
          </ButtonDiv>
        </ProjInfo>
  );
}
///////////// END REACT COMPONENT //////////////
