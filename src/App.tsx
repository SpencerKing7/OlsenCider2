import React from 'react';
// import NavBar from './components/Navbar'
import './App.css';
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme'
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <NavBar /> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
