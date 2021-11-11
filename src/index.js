import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { theme } from "./config/theme";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript
				initialColorMode={theme.config.initialColorMode}
			></ColorModeScript>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
