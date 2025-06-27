import { Box, HStack, IconButton, Flex, Image, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import '../../styles/animation.css';
import logo from '../../assets/images/logo-bl-nb.png'; // ← Ton nouveau logo net

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('brand.500', 'gray.800');
  
  return (
    <Box
      as="header"
      bg={bg}
      color="white"
      py={3}
      px={4}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={10}
      boxShadow="md"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        w="100%"
      >
        {/* Logo sans texte, net */}
        <Image
          src={logo}
          alt="Logo Asili Dermparis"
          height="40px"
          objectFit="contain"
          opacity={0.95} // légèrement atténué mais net
        />

        {/* Menu Desktop */}
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
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
          {/* Boutons droite */}
        <Flex align="center">
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="white"
            mr={1}
          />
          <IconButton
            aria-label="Toggle Theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            color="white"
          />
        </Flex>
        </HStack>
        
      </Flex>

      {/* Menu Mobile */}
      {isOpen && (
        <Box mt={4} display={{ md: 'none' }} px={4}>
          <HStack spacing={4} flexDirection="column" align="start">
            <ScrollLink to="accueil" smooth duration={500} offset={-70} onClick={onClose}>
              Accueil
            </ScrollLink>
            <ScrollLink to="projet" smooth duration={500} offset={-70} onClick={onClose}>
              Produits
            </ScrollLink>
            <ScrollLink to="skills" smooth duration={500} offset={-70} onClick={onClose}>
              Marques
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-70} onClick={onClose}>
              Contact
            </ScrollLink>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
