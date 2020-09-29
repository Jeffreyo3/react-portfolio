import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;

`;

const Img = styled.img`
  width: 50%;
`;

const ProjInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProjectCard({ project }) {
  console.log(project);
  return (
    <CardContainer>
      <Img
        src={
          project.screenshot
            ? project.screenshot
            : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
        alt={`Screenshot of ${project.title}`}
      />
      <ProjInfo>
      <h3>Title: {project.name}</h3>
      <p>Description: {project.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={project.deployed_url}>
        Deployed
      </a>
      <a target="_blank" rel="noopener noreferrer" href={project.github_repo}>
        Code
      </a>
      </ProjInfo>
    </CardContainer>
  );
}
