import { Box, Heading, Link, Stack, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import logo from '../assets/images/pdp.png';

const Contact = () => {
  const bg = useColorModeValue('brand.100', 'gray.800');

  return (
    <Box p={20} bg={bg} color="white">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify="space-between"
        wrap="wrap"
      >
        <Image
          src={logo}
          alt="Photo de Suzelle"
          mt={{ base: '50px', md: 'none' }}
          boxSize={{ base: '150px', md: '250px' }}
          borderRadius="full"
          objectFit="cover"
          border={{ base: '5px solid teal', md: 'none' }}
          mb={{ base: 6, md: 0 }}
        />

        {/* Liens Rapides */}
        <Box
          ml={{ base: 0, md: 10 }}
          mb={{ base: 8, md: 0 }}
          mt={{ base: 6, md: 0 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h2" size="lg" mb={4}>
            Liens Rapides
          </Heading>
          <Stack spacing={3} align={{ base: 'center', md: 'flex-start' }}>
            <ScrollLink to="accueil" smooth duration={500} offset={-70}>
              Accueil
            </ScrollLink>
            <ScrollLink to="projet" smooth duration={500} offset={-70}>
              Produits
            </ScrollLink>
            <ScrollLink to="skills" smooth duration={500} offset={-70}>
              Marques
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-70}>
              Contact
            </ScrollLink>
          </Stack>
        </Box>

        {/* Contact */}
        <Box
          ml={{ base: 0, md: 10 }}
          mt={{ base: 6, md: 0 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <Stack spacing={3} align={{ base: 'center', md: 'flex-start' }}>
            <Link href="mailto:asilidermparis@gmail.com" display="flex" alignItems="center">
              <FaEnvelope style={{ marginRight: '8px' }} />
              asilidermparis@gmail.com
            </Link>
            <Link href="tel:+33651539226" display="flex" alignItems="center">
              <FaPhone style={{ marginRight: '8px' }} />
              +33651539226
            </Link>
            <Link href="https://wa.me/33651539226" display="flex" alignItems="center" isExternal>
              <FaWhatsapp style={{ marginRight: '8px' }} />
              WhatsApp
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
