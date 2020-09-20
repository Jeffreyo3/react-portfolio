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
`

const Header = styled.header`
  width: 100%;
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