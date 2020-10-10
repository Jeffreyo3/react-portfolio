import React from "react";
import styled from "styled-components";
import loading from "../../images/rings-loading.svg";

////////////// STYLED COMPONENTS ///////////////
const ContactLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 22rem;
`;

const P = styled.p`
  font-size: ${(pr) => pr.theme.fontsizes.fs_footer};
  color: orangered;
  margin: 0.8rem;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ContactLoading() {
  return (
    <ContactLoadingContainer>
      <img alt="Pulsating rings indicating that the submission request is in progress." src={loading} />
      <P>Submitting</P>
    </ContactLoadingContainer>
  );
}
///////////// END REACT COMPONENT //////////////
