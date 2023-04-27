import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Housing from './pages/Housing';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/housing/:housingId" element={<Housing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
