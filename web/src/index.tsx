import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { debugData } from "./utils/debugData";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);