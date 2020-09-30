import React from "react";
import styled from "styled-components";

////////////// STYLED COMPONENTS ///////////////
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
`;

const P = styled.p`
  font-size: ${(pr) => pr.theme.fontsizes.fs_footer};
  margin: 0.8rem;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function Footer() {
  return (
    <FooterContainer>
      <P>© Jeffrey Orndorff | All Rights Reserved.</P>
      <P>
        UX Design by{" "}
        <a
          href="https://twitter.com/songadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Songa Mugenzi
        </a>
      </P>
    </FooterContainer>
  );
}
///////////// END REACT COMPONENT //////////////
