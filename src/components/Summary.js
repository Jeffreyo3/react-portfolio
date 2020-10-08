import React from "react";
import styled from "styled-components";
import { Container } from "../theme/styles";

////////////// STYLED COMPONENTS ///////////////
const P = styled.p`
  font-size: ${pr => pr.theme.fontsizes.fs_p};
  margin: 2.4rem 0;
  line-height: 1.2;
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
       I am a Full Stack web developer who loves technology and its integration into every day living. My passion is in helping others. I strive to accomplish this by finding creative solutions to every-day problems for businesses, educators, and those with impairments or disabilities. With a background in management and leadership roles, I understand the value that comes from working in a team. I am excied to work along side others to make the world a better place.
      </P>
      <P>
        While my strength is in JavaScript, I have spent the past 18 months studying data flow, algorithms, data structures, time & space complexities, and other computer science concepts that allows me to transfer my coding knowledge across multiple languages. Over the past 4 months I have picked up and learned OOP through Python3 and Java.
      </P>

      <A href="#">Download my resume</A>
    </Container>
  );
}
///////////// END REACT COMPONENT //////////////
