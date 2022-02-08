import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    const isDark = useSelector((state) => state.theme.theme) === 'dark';

    return <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <BrowserRouter>
            <GlobalStyles />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ThemeToggle />
        </BrowserRouter>
    </ThemeProvider>;
};

export default App;
