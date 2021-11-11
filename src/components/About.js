import { Container, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const About = () => {
	return (
		<Container mt={4} id="about">
			<Text fontSize="5xl">Deniz Kaptan</Text>
			<Text>Digital knowledge worker (Student / Developer) </Text>
			<Heading mt={4} textDecoration="underline" textUnderlineOffset={2} mb={3}>
				About
			</Heading>
			<Text className="description">
				Deniz is a student currently studying Computer Science at Dalhouise
				University. He enjoys the process of identiying a problem, planning an
				idea, and implementing the solution in code. When not online, he likes
				to exercise, going on runs, and train in different sports.
			</Text>
		</Container>
	);
};

export default About;
