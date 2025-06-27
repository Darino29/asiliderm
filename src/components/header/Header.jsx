import { Box, HStack, IconButton, Flex, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll'; 
import '../../styles/animation.css';
import logo from '../../assets/images/logo-nb.png';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (

      <Box as="header" bg="brand.500" color="white" py={4} position="fixed" top={0} left={0} width='100%' zIndex={10}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          <Box>
            <Image src={logo} alt='Logo' height="40px"  
            width="auto"   
            objectFit="contain"/>
          </Box>

          
          <IconButton
            aria-label="Toggle Navigation"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            colorScheme="whiteAlpha"
          />

          
          <HStack spacing={7} sx={{ marginRight: 100 }} display={{ base: 'none', md: 'flex' }}>
            <ScrollLink to="accueil" smooth={true} duration={500} offset={-70} className='scroll-link'>
              Accueil
            </ScrollLink>
            <ScrollLink to="projet" smooth={true} duration={500} offset={-70} className='scroll-link'>
              Produits
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70}className='scroll-link'>
              Marques
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className='scroll-link'>
              Contact
            </ScrollLink>
          </HStack>
        </Flex>

        {/* Menu mobile */}
        {isOpen && (
          <Box mt={4} display={{ md: 'none' }}>
            <HStack spacing={4} flexDirection="column">
              <ScrollLink to="accueil" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Accueil
              </ScrollLink>
              <ScrollLink to="projet" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Produits
              </ScrollLink>
              <ScrollLink to="formation" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Marques
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Contact
              </ScrollLink>
            </HStack>
          </Box>
        )}
      </Box>
   
  );
};

export default Header;
