import { Facebook, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sunshine University</h3>
                        <p className="text-sm">Iluminando mentes desde 1990</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><Link to="#" className="text-sm hover:text-yellow-500">Admisiones</Link></li>
                            <li><Link to="#" className="text-sm hover:text-yellow-500">Programas</Link></li>
                            <li><Link to="#" className="text-sm hover:text-yellow-500">Investigación</Link></li>
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
                            <Link>
                                <Facebook className='hover:text-yellow-400' />
                            </Link>
                            <Link>
                                <Twitter className='hover:text-yellow-400' />
                            </Link>
                            <Link>
                                <Youtube className='hover:text-yellow-400' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                    <p>&copy; 2024 Sunshine University. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer