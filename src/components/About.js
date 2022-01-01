import { Container, Text, Box } from "@chakra-ui/layout";
import React from "react";

const About = () => {
	return (
		<Container maxW="80%" mt={4} id="about">
			<Box textAlign="center">
				<Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
					Deniz Kaptan
				</Text>
				<Text>Digital knowledge worker (Student / Developer) </Text>
			</Box>
			<Text
				fontSize="2xl"
				mt={4}
				textDecoration="underline"
				textUnderlineOffset={2}
				mb={3}
			>
				About
			</Text>
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
