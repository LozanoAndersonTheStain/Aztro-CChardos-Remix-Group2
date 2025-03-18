import { Link } from "@remix-run/react";

export default function Navbar() {
    return (
        <nav className="backdrop-blur-md bg-white/10 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
            <img src="/amadeus-logo.png" alt="Amadeus Logo" className="h-4" />
            <ul className="flex space-x-3 text-lg">
                <li>
                    <Link to="/" className="text-[#3A8BFF]">Inicio</Link>
                </li>
                <li>
                    <Link to="/contacto" className="text-[#3A8BFF]">Contacto</Link>
                </li>
                <li>
                    <Link to="/reporte" className="text-[#3A8BFF]">Reporte</Link>
                </li>
                <li>
                <Link to="/amadeus" className="text-[#3A8BFF]" >Amadeus</Link>
                </li>
            </ul>
        </nav>
    );
}