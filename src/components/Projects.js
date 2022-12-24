import React from 'react';
import netflix_clone from '../images/netflix-clone.jpg';
import tradeSourceLogo from '../images/tradesource.png';
import houseMarketPlace from '../images/house-market-place.png';
import sortingVisualizerLogo from '../images/sorting-visualizer.png';
import GridItem from './GridItem';
import { Container, SimpleGrid, Text } from '@chakra-ui/layout';

const Projects = () => {
  return (
    <Container id="projects" maxW="80%">
      <Text fontSize="xl" mt={4} mb={4}>
        Projects
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing={6}>
        <GridItem
          title="House Market Place"
          description="House market place for you to sell/rent and buy homes. Built with React and Firebase"
          thumnail={houseMarketPlace}
          href="https://github.com/ZKaptan/house-market-place"
        ></GridItem>
        <GridItem
          href="https://www.youtube.com/watch?v=Vg7Nq26vPps&t=19s"
          thumnail={tradeSourceLogo}
          title="Tradesource"
          description="Mobile barter trader app. Built with Android and Firebase in a team of 3 developers"
        />
        <GridItem
          id="netflixclone"
          title="NetFlix Clone"
          thumnail={netflix_clone}
          href="https://github.com/ZKaptan/netflix_clone"
          description="Accurate and interactive clone of Netflix. Built with React"
        ></GridItem>
        <GridItem
          id="sortingvisualizer"
          title="Sorting Visualizer"
          thumnail={sortingVisualizerLogo}
          href="https://github.com/ZKaptan/Sorting-Visualizer"
          description="Interactive sorting visualizer tool. Built with React"
        />
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
