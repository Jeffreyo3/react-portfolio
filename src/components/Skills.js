import React from "react";
import styled from "styled-components";
import { Container } from "../theme/styles";
import SkillCard from "./SkillCard";
import skills from "../data/skills.json";

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
  @media (max-width: 715px) {
    display: none;
  }
`;

const SkillFlex = styled.ul`
  display: none;

  @media (max-width: 715px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 5rem auto 0;
  }
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function Skills() {
  return (
    <Container>
      <H2 id="about">Skills</H2>

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

      <SkillFlex>
        {skills.map((skill, idx) => {
          return (
            <SkillCard
              key={idx}
              skill={skill}
              last={true}
            />
          );
        })}
      </SkillFlex>
    </Container>
  );
}
///////////// END REACT COMPONENT //////////////
