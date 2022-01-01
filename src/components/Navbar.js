import React from "react";
import {
	Box,
	Container,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorModeValue,
} from "@chakra-ui/react";
import { useColorMode, Spacer, Text, Image, Link } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import dk_logo from "../images/dk.png";
import resume from "../resume.pdf";
import { FaMoon, FaSun } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Box
			css={{ backdropFilter: "blur(10px)" }}
			position="sticky"
			top={0}
			zIndex={1}
			bg={useColorModeValue("#ffffff40", "#20202380")}
		>
			<Container
				maxW={{ base: "100%", md: "80%" }}
				display="flex"
				alignItems="center"
				flexWrap="wrap"
				p={3}
			>
				<Box d="flex" alignItems="center">
					<Image
						boxSize="40px"
						src={dk_logo}
						mr={{ base: "10px", md: "20px" }}
					/>
					<Text fontSize="xl" size="md" display={{ base: "none", md: "block" }}>
						Portfolio
					</Text>
				</Box>

				<Spacer />
				<Text
					justifySelf={"center"}
					display={{ base: "none", md: "block" }}
					fontSize="xl"
					mr={4}
				>
					Deniz Kaptan
				</Text>

				<Spacer />

				<HStack spacing="17px">
					<Link textDecoration="underline" href={resume} target="_blank">
						My Resume
					</Link>

					<Box alignItems="right">
						<Box ml={2} display={{ base: "inline-block", md: "none" }}>
							<Menu isLazy>
								<MenuButton
									as={IconButton}
									aria-label="Options"
									icon={<HamburgerIcon />}
								></MenuButton>
								<MenuList>
									<Link href="#about">
										<MenuItem as={Link}>About</MenuItem>
									</Link>
									<Link href="#technology">
										<MenuItem as={Link}>Technlogy</MenuItem>
									</Link>
									<Link href="#projects">
										<MenuItem as={Link}>Projects</MenuItem>
									</Link>
									<Link href="#contact">
										<MenuItem as={Link}>Contact</MenuItem>
									</Link>
								</MenuList>
							</Menu>
						</Box>
					</Box>

					<IconButton
						ml={2}
						icon={isDark ? <FaSun /> : <FaMoon />}
						isRound="true"
						onClick={toggleColorMode}
					></IconButton>
				</HStack>
			</Container>
		</Box>
	);
};

export default Navbar;
