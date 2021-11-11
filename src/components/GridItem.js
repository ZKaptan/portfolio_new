import { Image } from "@chakra-ui/image";
import {
	AspectRatio,
	Box,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/layout";
import React from "react";

const GridItem = ({ thumnail, title, href, description }) => {
	return (
		<Box align="center" w="100%">
			<LinkBox cursor="pointer">
				<AspectRatio ratio={1.5 / 1}>
					<Image src={thumnail} alt={title} placeholder="blur" loading="lazy" />
				</AspectRatio>
				<LinkOverlay href={href} target="_blank">
					<Text mt={2} fontSize={20}>
						{title}
					</Text>
				</LinkOverlay>
				<Text fontSize={14} mt={2}>
					{description}{" "}
				</Text>
			</LinkBox>
		</Box>
	);
};

export default GridItem;
