import { MapPin } from "lucide-react"

export default function Footer(){
    const year = new Date()
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <MapPin />
                    <span className="text-xl font-bold">Concave map</span>
                    </div>
                    <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400">
                        Términos
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Privacidad
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Contacto
                    </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">© {year.getFullYear()} Concave. Todos los derechos reservados.</div>
            </div>
        </footer>
    )
}