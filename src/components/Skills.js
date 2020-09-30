import React from "react";
import styled from "styled-components";
import { Container } from "../theme/styles";
import SkillCard from "./SkillCard";

////////////// STYLED COMPONENTS ///////////////
const H2 = styled.h2`
  color: ${(p) => p.theme.colors.c_h2};
  font-size: ${(p) => p.theme.fontsizes.fs_h};
  margin-bottom: 2rem;
`;

const SkillGrid = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  height: 6rem;
  max-width: 1000px;
  margin: 0 auto;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function Skills() {
  const skills = [
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "Python3",
    "Java Spring",
    "CSS",
  ];
  return (
    <Container>
      <H2>Skills</H2>

      <SkillGrid>
        {skills.map((skill, idx) => {
          return (
            <SkillCard
              key={idx}
              skill={skill}
              last={idx === skills.length - 1 ? true : false}
            />
          );
        })}
      </SkillGrid>
    </Container>
  );
}
///////////// END REACT COMPONENT //////////////
