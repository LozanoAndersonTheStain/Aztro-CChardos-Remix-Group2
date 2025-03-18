import { Link, useLocation } from "@remix-run/react";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={`backdrop-blur-lg bg-black/10 text-white p-6 flex justify-between items-center fixed transition-all duration-5000 ease-in-out mx-4 md:mx-8 rounded-xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] z-50 ${
      location.pathname === "/" ? "top-6" : "-top-24"
    }`}>
      <img src="/amadeus-logo.png" alt="Amadeus Logo" className="h-6" />
      <ul className="flex space-x-3 text-xl text-[#FFFFFF] gap-8">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/reporte">Reporte</Link>
        </li>
        <li>
          <Link to="/amadeus">Amadeus</Link>
        </li>
        <li>
          <Link to="/questionnaire">Cuestionario</Link>
        </li>
      </ul>
    </nav>
  );
}