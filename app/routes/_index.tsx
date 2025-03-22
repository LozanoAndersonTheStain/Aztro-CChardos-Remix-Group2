import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/Button.component";

export const meta: MetaFunction = () => {
  return [
    { title: "Amadeus Travel Game" },
    {
      name: "description",
      content:
        "En esta plataforma podras encontrar el el destino perfecto que se ajuste a lo que buscas",
    },
  ];
};

export default function Index() {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dy6jglszo/image/upload/v1742359559/Amadeus/f72bd2060f9cb6080f4ad110cd099cfa_tkgtdp.jpg"
          alt="Background"
          className="w-full h-full object-content"
        />
        <div className="absolute inset-0 bg-black/100 opacity-50"></div>
      </div>

      <div className="relative z-10 items-center flex flex-col gap-8">
        <div className="text-5xl font-medium text-center text-sky-cloud">
          <h3 className="w-[28rem]">
            Tu pagina confiable para seleccionar tu próximo destino
          </h3>
        </div>
        <div className="text-center text-[1.5rem]">
          <Link to="/questionnaire" prefetch="intent">
            <Button
              text="Encuentra tu destino perfecto"
              variant="primary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
