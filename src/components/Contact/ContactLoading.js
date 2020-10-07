import React from "react";
import styled from "styled-components";
import loading from "../../images/rings-loading.svg";

////////////// STYLED COMPONENTS ///////////////
const ContactCompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
`;

const P = styled.p`
  font-size: ${(pr) => pr.theme.fontsizes.fs_footer};
  color: orangered;
  margin: 0.8rem;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ContactCompleted() {
  return (
    <ContactCompletedContainer>
      <img alt="Pulsating rings indicating that the submission request is in progress." src={loading} />
      <P>Submitting</P>
    </ContactCompletedContainer>
  );
}
///////////// END REACT COMPONENT //////////////
