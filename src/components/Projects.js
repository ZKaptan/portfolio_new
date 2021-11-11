import React from "react";
import netflix_clone from "../images/netflix_clone.png";
import devConnector_logo from "../images/devConnector_logo.png";
import weather_logo from "../images/weather_logo.png";
import sorting_visualizer_logo from "../images/sorting_visualizer.png";
import GridItem from "./GridItem";
import { Container, Heading, SimpleGrid } from "@chakra-ui/layout";

const Projects = () => {
	return (
		<Container id="projects">
			<Heading fontSize={25} mt={4} mb={4}>
				Projects
			</Heading>
			<SimpleGrid columns={[1, 1, 2]} spacing={6}>
				<GridItem
					id="devconnector"
					title="Dev Connector"
					thumnail={devConnector_logo}
					href="https://github.com/ZKaptan/devconnector"
					description="Social application for developers"
				></GridItem>
				<GridItem
					id="netflixclone"
					title="NetFlix Clone"
					thumnail={netflix_clone}
					href="https://github.com/ZKaptan/netflix_clone"
					description="Accurate and interactive clone of Netflix"
				></GridItem>
				<GridItem
					id="sortingvisualizer"
					title="Sorting Visualizer"
					thumnail={sorting_visualizer_logo}
					href="https://github.com/ZKaptan/Sorting-Visualizer"
					description="Interactive sorting visualizer tool"
				/>
				<GridItem
					id="weatherhere"
					title="Weather Here"
					thumnail={weather_logo}
					href="https://github.com/ZKaptan/WeatherHere"
					description="Display weather data for cities around the world"
				></GridItem>
			</SimpleGrid>
		</Container>
	);
};

export default Projects;
