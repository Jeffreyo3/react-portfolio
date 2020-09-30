import React from "react";
import styled from "styled-components";
import { Container } from "../theme/styles";

////////////// STYLED COMPONENTS ///////////////
const P = styled.p`
  font-size: ${pr => pr.theme.fontsizes.fs_p};
  margin: 2.4rem 0;
`

const A = styled.a`
display: block;
  text-decoration: underline;
  font-size: ${pr => pr.theme.fontsizes.fs_p};
  color: ${pr => pr.theme.colors.c_tertiary};
  margin-bottom: 2rem;
`
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function Summary() {
  return (
    <Container>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, sed
        volutpat vestibulum etiam. Ultricies quam viverra ultricies et maecenas
        nunc aliquam eget. Odio dui molestie egestas vivamus donec quis
        pellentesque rhoncus. Congue integer sit vel leo volutpat euismod urna,
        diam.
      </P>

      <A href="#">Download my resume</A>
    </Container>
  );
}
///////////// END REACT COMPONENT //////////////
