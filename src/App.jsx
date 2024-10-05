import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/oferta" element={<h1>Oferta Component</h1>} />
        <Route path="/exito" element={<h1>Exito Acádemico component</h1>} />
      </Routes>
      <Footer toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </BrowserRouter>
  )
}

export default App;