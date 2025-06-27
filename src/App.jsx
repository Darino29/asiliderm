import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ContentPage from './pages/ContentPage';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ContentPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
