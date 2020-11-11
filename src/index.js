import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Background = styled.div`
  background-color: ${(pr) => pr.theme.colors.c_app_bg};
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Background>
      {" "}
      <App />
    </Background>
  </ThemeProvider>,
  document.getElementById("root")
);
