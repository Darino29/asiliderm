import { Box } from '@chakra-ui/react';
import Accueil from './Accueil';
import Projet from './Projet';
// import Formation from './Formation';
// import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const ContentPage = () => {
  return (
    <Box>
      
      <Box id="accueil" minH="60vh">
        <Accueil />
      </Box>
      <Box id="projet" minH="60vh">
        <Projet />
      </Box>
      {/* <Box id="formation" minH="60vh">
        <Formation />
      </Box>
      <Box id="experience" minH="60vh">
        <Experience />
      </Box> */}
      <Box id="skills" minH="60vh">
        <Skills />
      </Box>
      <Box id="contact" minH="60vh">
        <Contact />
      </Box>
    </Box>
  );
};

export default ContentPage;
