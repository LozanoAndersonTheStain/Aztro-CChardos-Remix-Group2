import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { Link } from '@remix-run/react';


export default function Index() {
  return ( <div className="hero-container">
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
      <div className="hero-content">
        <header className="flex flex-col items-center gap-9">
      <h1 className="hero-title">Tu pagina confiable <br></br> para seleccionar <br></br> tu próximo destino</h1>
      <p className="hero-text"></p>
      <Link to="/more" className="hero-button">Encuentra tu destina perfecto</Link>     
        </header>
      </div>
    </div>
    </div>
  </div>
  );
}
