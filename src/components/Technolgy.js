import React from "react";
import { Container, List, ListItem, Text } from "@chakra-ui/react";

const Technolgy = () => {
	return (
		<Container
			maxW="80%"
			mt={5}
			d="flex"
			flexDirection="column"
			id="technology"
		>
			<Text fontSize="xl" textUnderlineOffset={2} mb={2}>
				Languages & Technologies I Use
			</Text>
			<List display="flex" flexWrap="wrap" alignItems="center">
				<ListItem
					m="5px"
					p="0 10px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					React
				</ListItem>
				<ListItem
					m="5px"
					p="0 10px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					Vue.js
				</ListItem>
				<ListItem
					p="0 10px"
					m="5px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					TypeScript
				</ListItem>
				<ListItem
					p="0 10px"
					m="5px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					Android
				</ListItem>
				<ListItem
					p="0 10px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					NodeJS
				</ListItem>
				<ListItem
					p="0 10px"
					m="5px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					CSS
				</ListItem>
				<ListItem
					p="0 10px"
					m="5px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					Firebase
				</ListItem>
				<ListItem
					p="0 10px"
					m="5px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					MongoDB
				</ListItem>
				<ListItem
					p="0 10px"
					m="5px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					Java
				</ListItem>
				<ListItem
					p="0 10px"
					m="5px"
					borderRadius="50rem"
					border="1px dashed rgb(83 86 90);"
				>
					Python
				</ListItem>
			</List>
		</Container>
	);
};

export default Technolgy;
