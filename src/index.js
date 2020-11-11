import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Background = styled.div`
  background-color: ${(pr) => pr.theme.colors.c_app_bg};
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Background>
        <App />
      </Background>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
