import React from "react";
import styled from "styled-components";

////////////// STYLED COMPONENTS ///////////////
const SkillGridItem = styled.li`
  font-size: ${(pr) => pr.theme.fontsizes.fs_p};
  font-style: italic;
`;

const Border = styled.div`
  height: 50%;
  border-right: 0.1rem dashed ${(pr) => pr.theme.colors.c_tertiary_faded};
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function SkillCard({ skill, last }) {
  if (last) {
    return <SkillGridItem>{skill}</SkillGridItem>;
  } else {
    return (
      <>
        <SkillGridItem>{skill}</SkillGridItem>
        <Border />
      </>
    );
  }
}
///////////// END REACT COMPONENT //////////////
