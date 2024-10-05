import { Sun, Moon, Menu, X, ChevronRight, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const Header = ({ toggleDarkMode, isDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const toggleDarkModeComponent = () => {
        toggleDarkMode()
    }

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md transition duration-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sun className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">Sunshine University</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition duration-300">Inicio</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition duration-300">Sobre Nosotros</Link>
            <Link to="/oferta" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition duration-300">Oferta Académica</Link>
            <Link to="/exito" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition duration-300">Éxito Académico</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500 dark:text-gray-300 cursor-pointer" />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
              Aplicar
            </button>
            <button onClick={toggleDarkModeComponent} className="text-gray-600 dark:text-gray-300">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 py-2">
            <Link to="/" className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Inicio</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Sobre Nosotros</Link>
            <Link to="/oferta" className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Oferta Académica</Link>
            <Link to="/exito" className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Éxito Académico</Link>
          </div>
        )}
      </header>
      )
    }
    

export default Header