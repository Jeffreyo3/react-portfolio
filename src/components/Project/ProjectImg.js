import React from "react";
import styled from "styled-components";
import background from "../../images/code_blue_green.jpg";

////////////// STYLED COMPONENTS ///////////////
const ImgContainer = styled.div`
  position: relative;
  width: 60rem;
  overflow: hidden;
  background-image: url(${background});
  background-size: 100% 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 900px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 10px;
    width: 100%;
    height: 55.5rem;
  }
`;

const Img = styled.img`
  width: 111%;
  min-width: 50rem;
  position: absolute;
  top: -9999px;
  left: -9999px;
  right: -9999px;
  bottom: -9999px;
  margin: auto;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function ProjectImg({ alt, img }) {
  return (
    <ImgContainer>{img ? <Img loading="lazy" src={img} alt={alt} /> : null}</ImgContainer>
  );
}
///////////// END REACT COMPONENT //////////////
