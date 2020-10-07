import React from "react";
import styled from "styled-components";

////////////// STYLED COMPONENTS ///////////////
const ContactFailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
`;

const P = styled.p`
  font-size: ${(pr) => pr.theme.fontsizes.fs_footer};
  color: red;
  margin: 0.8rem;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ContactFailed() {
  return (
    <ContactFailedContainer>
      <P>⚠ Something went wrong, please try again later.</P>
    </ContactFailedContainer>
  );
}
///////////// END REACT COMPONENT //////////////
