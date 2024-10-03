import { useState } from 'react'
import { Sun, Menu, X, ChevronRight, Search } from 'lucide-react'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
 
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sun className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold text-gray-800">Sunshine University</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Sobre Nosotros</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Oferta Académica</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Éxito Académico</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
              Aplicar
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Inicio</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sobre Nosotros</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Oferta Académica</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Éxito Académico</a>
          </div>
        )}
      </header>
 
      <main>
        <section className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Bienvenido a Sunshine University</h1>
            <p className="text-xl md:text-2xl mb-8">Iluminando mentes, formando líderes</p>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
              Descubre más
            </button>
          </div>
        </section>
 
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explora Nuestras Ofertas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Programas Académicos', 'Vida Estudiantil', 'Investigación'].map((item, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-4">{item}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" className="text-yellow-500 font-semibold flex items-center">
                    Leer más <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
 
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sunshine University</h3>
              <p className="text-sm">Iluminando mentes desde 1990</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-yellow-500">Admisiones</a></li>
                <li><a href="#" className="text-sm hover:text-yellow-500">Programas</a></li>
                <li><a href="#" className="text-sm hover:text-yellow-500">Investigación</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-sm">123 Sunshine Avenue</p>
              <p className="text-sm">Ciudad del Sol, CS 12345</p>
              <p className="text-sm">Tel: (123) 456-7890</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2024 Sunshine University. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;