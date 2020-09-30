import React from "react";
import styled from "styled-components";
import ProjectImg from "./ProjectImg";
import ProjectInfo from "./ProjectInfo";

////////////// STYLED COMPONENTS ///////////////
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem auto 7rem;
  justify-content: center;
  box-shadow: 2.5px 6px 10px ${(pr) => pr.theme.colors.c_shadow};

  border-radius: 10px;
`;

const ProjInfoContainer = styled.div`
  width: 63rem;
  background-color: ${(pr) => pr.theme.colors.c_background};

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
