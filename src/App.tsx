import React from 'react';
// import NavBar from './components/Navbar'
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme'
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/AboutUs' element={<HomePage />} />
            <Route path='/Services' element={<HomePage />} />
            <Route path='/CiderTips' element={<HomePage />} />
            <Route path='/ContactUs' element={<HomePage />} />
            <Route path='/FoodSafety' element={<HomePage />} /> */}
          </Routes>
          <Footer />
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
