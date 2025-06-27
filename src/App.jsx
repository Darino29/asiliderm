import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
{/*import Accueil from './pages/Accueil';
import Projet from './pages/Projet';
import Formation from './pages/Formation';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Skills from './pages/Skills';*/}
import MainLayout from './layouts/MainLayout';
import { ChakraProvider } from '@chakra-ui/react';
import ContentPage from './pages/ContentPage';

const App = () => {
  return (
    <ChakraProvider>
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ContentPage />} />
        </Routes>
      </MainLayout>
    </Router>
    </ChakraProvider>
  );
};

export default App;
