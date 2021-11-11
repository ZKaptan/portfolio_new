import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
	global: (props) => ({
		body: {
			bg: mode("#f0e7db", "#202023")(props),
		},
	}),
};

const textStlyes = {
	Heading: {
		variants: {
			"section-title": {
				textDecoration: "underline",
				textUnderlineOffset: 6,
				textDecorationColor: "#525252",
				textDecorationThickness: 4,
			},
		},
	},
};

const config = {
	initialColorMode: "light",
	useSystemColorMode: "true",
};

export const theme = extendTheme({
	config,
	styles,
	textStlyes,
});
