import {
  Box,
  Flex,
  HStack,
  Stack,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/images/logo-bl-nb.png';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('brand.500', 'gray.900');
  const linkHover = useColorModeValue('whiteAlpha.900', 'whiteAlpha.700');

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
      boxShadow="lg"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        w="100%"
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo Asili Dermparis"
          height="40px"
          objectFit="contain"
          opacity={0.92}
          transition="all 0.3s ease"
          _hover={{ opacity: 1 }}
        />

        {/* Menu Desktop */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }} fontSize="sm" fontWeight="medium">
          {['accueil', 'produits', 'marques', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-70}
            >
              <Text
                cursor="pointer"
                transition="color 0.2s"
                _hover={{ color: linkHover, textDecoration: 'underline' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Text>
            </ScrollLink>
          ))}

          {/* Switch thème */}
          <IconButton
            aria-label="Changer le thème"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            color="white"
          />
        </HStack>

        {/* Boutons Mobile */}
        <Flex align="center" display={{ base: 'flex', md: 'none' }}>
          <IconButton
            aria-label="Menu mobile"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="white"
            mr={2}
          />
          <IconButton
            aria-label="Changer de thème"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            color="white"
          />
        </Flex>
      </Flex>

      {/* Menu Mobile Slide Down */}
      {isOpen && (
        <Box
          mt={4}
          px={4}
          display={{ md: 'none' }}
          animation="slide-in 0.2s ease"
        >
          <Stack spacing={4} align="start" fontWeight="medium" fontSize="sm">
            {['accueil', 'projet', 'skills', 'contact'].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth
                duration={500}
                offset={-70}
                onClick={onClose}
              >
                <Text
                  cursor="pointer"
                  _hover={{ color: linkHover, textDecoration: 'underline' }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Text>
              </ScrollLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
