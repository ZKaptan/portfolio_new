import React from "react";
import { Container, Grid, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import react_logo from "../images/react-logo.png";
import node_logo from "../images/node.png";
import javascript_logo from "../images/js.png";
import html_logo from "../images/html5.png";
import css_logo from "../images/css.png";
import python_logo from "../images/python.png";
import java_logo from "../images/java.png";
import monogod_logo from "../images/mongodb.png";

const Technolgy = () => {
	return (
		<Container mt={5} id="technology">
			<Heading fontSize={25} mb={3}>
				Technolgies
			</Heading>
			<Grid gap={3} templateColumns="repeat(auto-fit, minmax(85px, 1fr))">
				<Image src={react_logo}></Image>
				<Image src={html_logo}></Image>
				<Image src={css_logo}></Image>
				<Image src={javascript_logo}></Image>
				<Image src={python_logo}></Image>
				<Image src={java_logo}></Image>
				<Image src={node_logo}></Image>
				<Image src={monogod_logo}></Image>
			</Grid>
		</Container>
	);
};

export default Technolgy;
