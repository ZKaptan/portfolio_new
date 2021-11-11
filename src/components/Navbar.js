import React from "react";
import {
	Box,
	Container,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorModeValue,
} from "@chakra-ui/react";
import {
	useColorMode,
	Spacer,
	Text,
	Image,
	Stack,
	Link,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import dk_logo from "../images/dk.png";

import { FaMoon, FaSun, FaLinkedin, FaGithub } from "react-icons/fa";

import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Box
			css={{ backdropFilter: "blur(10px)" }}
			position="sticky"
			top={0}
			w="100%"
			zIndex={1}
			bg={useColorModeValue("#ffffff40", "#20202380")}
		>
			<Container display="flex" alignItems="center" flexWrap="wrap" p={2}>
				<Image boxSize="40px" src={dk_logo} mr={2} />
				<Text fontSize="xl" mr={4}>
					Deniz Kaptan
				</Text>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<Link href="#about">About</Link>
					<Link href="#technology">Technologies</Link>
					<Link href="#projects" path>
						Projects
					</Link>

					<Link href="#contact">Contact</Link>
				</Stack>

				<Spacer />
				{/* <IconButton ml={2} isRound="true" icon={<FaLinkedin />}></IconButton>
				<IconButton ml={2} isRound="true" icon={<FaGithub />}></IconButton> */}
				<IconButton
					ml={2}
					icon={isDark ? <FaSun /> : <FaMoon />}
					isRound="true"
					onClick={toggleColorMode}
				></IconButton>
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
									<MenuItem as={Link}>About</MenuItem>
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
			</Container>
		</Box>
	);
};

export default Navbar;
