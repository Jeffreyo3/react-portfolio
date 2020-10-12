import React from "react";
import styled from "styled-components";
import ProjectImg from "./ProjectImg";
import ProjectInfo from "./ProjectInfo";

////////////// STYLED COMPONENTS ///////////////
const CardContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 3rem auto 7rem;
  justify-content: center;
  box-shadow: 2.5px 6px 10px ${(pr) => pr.theme.colors.c_shadow};
  border-radius: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjInfoContainer = styled.div`
  width: 64.5rem;
  background-color: ${(pr) => pr.theme.colors.c_background};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 900px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px;
    width: 100%;
  }
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ProjectCard({ project }) {
  return (
    <CardContainer>
      <ProjectImg
        alt={`Screenshot of ${project.name}`}
        img={project.screenshot}
      />

      <ProjInfoContainer>
        <ProjectInfo project={project} />
      </ProjInfoContainer>
    </CardContainer>
  );
}
///////////// END REACT COMPONENT //////////////
