import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Container, Heading } from "@chakra-ui/layout";
import {
	Input,
	Wrap,
	WrapItem,
	Textarea,
	Button,
	Form,
	useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { theme } from "../config/theme";

const Contact = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Container mt={8} id="contact">
			<Heading fontSize={25} mt={4} mb={4}>
				Contact Me
			</Heading>
			<Box>
				<Heading fontSize={20} mb={2}>
					Get in touch
				</Heading>

				<form action="https://formsubmit.co/dkkaptan20@gmail.com" method="POST">
					<Box display="flex" flexDirection={{ base: "column", md: "row" }}>
						<Input
							borderColor={theme.config.initialColorMode}
							type="text"
							placeholder="Name"
							mb={4}
							mr={2}
							name="name"
						></Input>
						<Input
							borderColor={theme.config.initialColorMode}
							placeholder="Email"
							type="email"
							mb={4}
							name="email"
						></Input>
					</Box>
					<Textarea
						borderColor={theme.config.initialColorMode}
						placeholder="Description"
						name="description"
					></Textarea>
					<Button mt={4} size="lg" colorScheme="orange" type="submit">
						Submit
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default Contact;
