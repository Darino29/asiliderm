import { Box, Text, Link, HStack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4} width="100%">
      <HStack justify="center" spacing={8} mb={4}>
        <Link href="https://facebook.com/ton-facebook" isExternal>
          <FaFacebook size="24px" />
        </Link>
        <Link href="https://instagram.com/ton-instagram" isExternal>
          <FaInstagram size="24px" />
        </Link>
      </HStack>
      <Text textAlign="center" fontSize="sm">
        © {new Date().getFullYear()} Asiliderm. Tous droits réservés.
      </Text>
    </Box>
  );
};

export default Footer;
