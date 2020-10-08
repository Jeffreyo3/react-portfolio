import React from "react";
import styled from "styled-components";
import background from "../../images/code_blue_green.jpg";

////////////// STYLED COMPONENTS ///////////////
const ImgContainer = styled.div`
  position: relative;
  width: 60rem;
  /* height: 53rem; */
  overflow: hidden;
  /* background-color: ${(pr) => pr.theme.colors.c_background}; */
  background-image: url(${background});
  /* background-repeat: no-repeat; */
  background-size: 100% 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Img = styled.img`
  /* width: 100%; */
  height: 100%;
  min-width: 50rem;
  /* min-height: 53rem; */
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
    <ImgContainer>{img ? <Img src={img} alt={alt} /> : null}</ImgContainer>
  );
}
///////////// END REACT COMPONENT //////////////
