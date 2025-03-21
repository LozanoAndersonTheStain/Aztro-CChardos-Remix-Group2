import { useState } from "react";
import type { DestinationResponse } from "~/interfaces/DestinationResponse.interface";
import { Button } from "./Button.component";

export function DestinationsScreen({ destinations }: DestinationResponse) {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  return (
    <div className="min-h-screen">
      <h1 className="absolute left-1/2 transform -translate-x-1/2 top-[3.5rem] text-4xl font-semibold text-center text-white py-8 z-50">
        Tus Destinos:
      </h1>

      <div className="flex h-[100vh]">
        {/* Left Container - America - Asia */}
        <div
          className="w-1/2 relative"
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
        >
          <div
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${destinations.firstCity.image})`,
            }}
          >
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-500 flex flex-col items-center justify-center gap-[6rem] ${
                hoveredLeft ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div className="h-full inset-0 flex flex-col items-center justify-center gap-[10rem]">
              <div className="text-center flex flex-col gap-[4rem] mt-[6rem]">
                <h2 className="text-[1.5rem] font-semibold text-white">
                  Aventura en {destinations.firstCity.continent}
                </h2>
                <p className="text-white text-[1.5rem]">{destinations.firstCity.name}</p>
              </div>
              <div className="text-[1.3rem] mt-[12rem]">
                <Button text="Ver Detalles" variant="primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Container - Europe - Oceania */}
        <div
          className="w-1/2 relative"
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
        >
          <div
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${destinations.secondCity.image})`,
            }}
          >
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-500 flex flex-col items-center justify-center gap-[6rem] ${
                hoveredRight ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div className="h-full inset-0 transition-opacity duration-500 flex flex-col items-center justify-center gap-[10rem]">
              <div className="text-center flex flex-col gap-[4rem] mt-[6rem]">
                <h2 className="text-[1.5rem] font-semibold text-white">
                  Aventura en {destinations.secondCity.continent}
                </h2>
                <p className="text-white text-[1.5rem]">{destinations.secondCity.name}</p>
              </div>
              <div className="text-[1.3rem] mt-[12rem]">
                <Button text="Ver Detalles" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
