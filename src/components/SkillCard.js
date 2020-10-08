import React from "react";
import styled from "styled-components";

////////////// STYLED COMPONENTS ///////////////
const SkillItem = styled.li`
  font-size: ${(pr) => pr.theme.fontsizes.fs_p};
  font-style: italic;

  @media (max-width: 715px) {
    text-align: center;
    width: 30%;
    height: 5rem;
  }
`;

const Border = styled.div`
  height: 50%;
  border-right: 0.1rem dashed ${(pr) => pr.theme.colors.c_tertiary_faded};
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function SkillCard({ skill, last }) {
  if (last) {
    return <SkillItem>{skill}</SkillItem>;
  } else {
    return (
      <>
        <SkillItem>{skill}</SkillItem>
        <Border />
      </>
    );
  }
}
///////////// END REACT COMPONENT //////////////
