import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav'

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <AppDiv>
      <Nav />

    </AppDiv>
  );
}

export default App;
