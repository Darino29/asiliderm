import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#fffaf5',
      100: '#E7C7A4',
      500: '#C89F72',
      900: '#5E412F',
    },
    accent: '#faaf40',
  },
});

export default theme;
