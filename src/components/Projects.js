import React from "react";
import netflix_clone from "../images/netflix-clone.jpg";
import tradeSourceLogo from "../images/barter.png";
import houseMarketPlace from "../images/house-market-place.jpg";
import sortingVisualizerLogo from "../images/lxrcbsv-vVHXeu0YNbk-unsplash.jpg";
import GridItem from "./GridItem";
import { Container, SimpleGrid, Text } from "@chakra-ui/layout";

const Projects = () => {
	return (
		<Container id="projects" maxW="80%">
			<Text fontSize="xl" mt={4} mb={4}>
				Projects
			</Text>
			<SimpleGrid columns={[1, 1, 2]} spacing={6}>
				<GridItem
					id="houseMarketPlace"
					title="House Market Place"
					thumnail={houseMarketPlace}
					href="https://github.com/ZKaptan/house-market-place"
					description="House market place for you to sell/rent and buy homes"
				></GridItem>
				<GridItem
					id="tradesource"
					title="Trade Source"
					thumnail={tradeSourceLogo}
					href="https://www.youtube.com/watch?v=Vg7Nq26vPps&t=19s"
					description="Barter Trader App"
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
					thumnail={sortingVisualizerLogo}
					href="https://github.com/ZKaptan/Sorting-Visualizer"
					description="Interactive sorting visualizer tool"
				/>
			</SimpleGrid>
		</Container>
	);
};

export default Projects;
