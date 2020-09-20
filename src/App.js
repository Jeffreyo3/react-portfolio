import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav'

//////////// STYLED COMPONENTS /////////////
const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  font-family: ${p => p.theme.fonts.f_primary};
`

const Header = styled.header`
  width: 95%;
`
//////////// END STYLED COMPONENTS /////////////


//////////// REACT COMPONENT /////////////
export default function App() {
  return (
    <AppDiv>
      <Header>
        <Nav />
      </Header>
    </AppDiv>
  );
}
//////////// END REACT COMPONENT /////////////