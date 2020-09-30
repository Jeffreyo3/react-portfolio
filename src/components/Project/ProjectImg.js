import React from "react";
import styled from "styled-components";

////////////// STYLED COMPONENTS ///////////////
const ImgContainer = styled.div`
  position: relative;
  width: 63rem;
  height: 53rem;
  overflow: hidden;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  min-width: 63rem;
  min-height: 53rem;
  position: absolute;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  margin: auto;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ProjectImg({ alt, img }) {
  return (
    <ImgContainer>
      <Img
        src={
          img
            ? img
            : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
        alt={alt}
      />
    </ImgContainer>
  );
}
///////////// END REACT COMPONENT //////////////
