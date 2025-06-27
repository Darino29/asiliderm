import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box as="main">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};



MainLayout.propTypes = {
    children: PropTypes.node,
  };
export default MainLayout;  