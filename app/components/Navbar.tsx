import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Si no estamos en la página de inicio, el navbar se desvanece
  const isHomePage = location.pathname === "/";
  const navbarOpacity = isHomePage || isHovered ? "opacity-100" : "opacity-0";

  return (
    <nav
      className={`backdrop-blur-lg bg-gradient-to-t from-sky-600/20 to-sky-300/5 text-white px-[2rem] py-[1.1rem] top-4 flex justify-between items-center fixed transition-opacity duration-500 ease-in-out mx-4 md:mx-8 rounded-xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] z-50 ${navbarOpacity}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={"/"} className="flex items-center space-x-2">
        <img src="/amadeus-logo.png" alt="Amadeus Logo" className="h-6" />
      </Link>
      <ul className="flex space-x-3 text-lg text-[#FFFFFF] gap-8">
        {!isHomePage && (
          <li>
            <Link to="/">Inicio</Link>
          </li>
        )}
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/reporte">Reporte</Link>
        </li>
        <li>
          <Link to="/amadeus">Amadeus</Link>
        </li>
      </ul>
    </nav>
  );
}