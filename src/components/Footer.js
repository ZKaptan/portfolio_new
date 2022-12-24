import { Container, Text, HStack, Link } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as GithubLogo } from '../svg/github.svg';
import { ReactComponent as LinkedInLogo } from '../svg/linkedin.svg';
import { ReactComponent as YoutubeLogo } from '../svg/youtube.svg';

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Container
      d="flex"
      maxW={{ base: '100%', md: '80%' }}
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
          <GithubLogo
            fill={isDark ? '#ffffff' : '#171515'}
            height="35px"
            width="35px"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/deniz-kaptan-259a691a8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogo fill="#0077B5" height="35px" width="35px" />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UCR-t-izntHn4WWkTdRZs-5A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeLogo fill="#FF0000" height="35px" width="35px" />
        </Link>
      </HStack>
    </Container>
  );
};

export default Footer;
