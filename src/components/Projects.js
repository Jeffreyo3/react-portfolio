import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../theme/styles";
import ProjectCard from "./Project/ProjectCard";
import projectJSON from "../data/projects.json";

////////////// STYLED COMPONENTS ///////////////
const H2 = styled.h2`
  text-align: center;
  color: ${(pr) => pr.theme.colors.c_h2};
  font-size: ${(pr) => pr.theme.fontsizes.fs_h};
  margin-bottom: 7.2rem;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function Projects() {
  const [projectData] = useState(projectJSON);
  return (
    <Container>
      <H2>Latest Projects</H2>
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Container>
  );
}
///////////// END REACT COMPONENT //////////////