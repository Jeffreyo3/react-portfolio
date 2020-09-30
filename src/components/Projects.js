import React, { useState } from "react";
import { Container, H2 } from "../theme/styles";
import ProjectCard from "./Project/ProjectCard";
import projectJSON from "../data/projects.json";

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
