import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles'; // Import the theme
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import WeStrive from './component/WeStrive';
import Departments from './component/Departments';
import FAQ from './component/FAQ';
import Contact from './component/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/strive" element={<WeStrive />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
