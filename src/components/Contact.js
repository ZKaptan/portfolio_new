import { Box, Container, Text } from '@chakra-ui/layout';
import { Input, Textarea, Button } from '@chakra-ui/react';

import { theme } from '../config/theme';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import config from '../config/keys';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        form.current,
        config.PUBLIC_KEY
      );
      toast.success('Email sent successfully');
    } catch (error) {
      toast.error('Email could not be sent');
    }
  };

  return (
    <Container mt={8} maxW="80%" id="contact">
      <Text mt={4} fontSize="2xl" textDecoration="underline" mb={4}>
        Contact Me
      </Text>

      <Box>
        <Text fontSize="xl" mb={2}>
          Get in touch
        </Text>
        {/* action="https://formsubmit.co/dkkaptan20@gmail.com" method="POST" */}
        <form ref={form} onSubmit={onSubmit}>
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
            <Input
              borderColor={theme.config.initialColorMode}
              type="text"
              placeholder="Name"
              mb={4}
              mr={2}
              name="user_name"
            ></Input>
            <Input
              borderColor={theme.config.initialColorMode}
              placeholder="Email"
              type="email"
              mb={4}
              name="user_email"
            ></Input>
          </Box>
          <Textarea
            borderColor={theme.config.initialColorMode}
            placeholder="Description"
            name="message"
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
