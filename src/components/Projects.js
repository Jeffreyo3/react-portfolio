import React, { useState } from "react";
import { Container } from "../theme/styles";
import ProjectCard from "./ProjectCard";
import projectJSON from "../data/projects.json";

export default function Projects() {
  const [projectData] = useState(projectJSON);
  return (
    <Container>
      <h2>Latest Projects</h2>
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Container>
  );
}
