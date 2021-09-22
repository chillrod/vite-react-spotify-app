import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { RecoilRoot } from "recoil";

import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "./config/theme/";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={ChakraTheme}>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
