import React from "react";
import styled from "styled-components";

////////////// STYLED COMPONENTS ///////////////
const ContactCompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
`;

const P = styled.p`
  font-size: ${(pr) => pr.theme.fontsizes.fs_footer};
  color: green;
  margin: 0.8rem;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ContactCompleted() {
  return (
    <ContactCompletedContainer>
      <P>✔ Submission Successful!</P>
    </ContactCompletedContainer>
  );
}
///////////// END REACT COMPONENT //////////////
