import { Container, Text, HStack, Link } from "@chakra-ui/layout";
import React from "react";
import { ReactComponent as GithubLogo } from "../svg/github.svg";
import { ReactComponent as LinkedInLogo } from "../svg/linkedin.svg";
import { ReactComponent as YoutubeLogo } from "../svg/youtube.svg";

const Footer = () => {
	return (
		<Container
			d="flex"
			maxW={{ base: "100%", md: "80%" }}
			justifyContent="space-between"
			alignItems="center"
			mt={10}
			p="30px"
		>
			<Text>&copy; 2022 Deniz Kaptan. All Rights Reserved.</Text>
			<HStack>
				<Link
					href="https://github.com/ZKaptan"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubLogo fill="rgb(107, 114, 128)" height="35px" width="35px" />
				</Link>

				<Link
					href="https://www.linkedin.com/in/deniz-kaptan-259a691a8"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedInLogo fill="rgb(107, 114, 128)" height="35px" width="35px" />
				</Link>

				<Link
					href="https://www.youtube.com/channel/UCR-t-izntHn4WWkTdRZs-5A"
					target="_blank"
					rel="noopener noreferrer"
				>
					<YoutubeLogo fill="rgb(107, 114, 128)" height="35px" width="35px" />
				</Link>
			</HStack>
		</Container>
	);
};

export default Footer;
