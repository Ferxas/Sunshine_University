import { Sun, Menu, X, ChevronRight, Search } from 'lucide-react'
import About from '../assets/images/images_about/about.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className='flex-grow'>
        <section className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: About}}>
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
                  <Link href="#" className="text-yellow-500 font-semibold flex items-center">
                    Leer más <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;