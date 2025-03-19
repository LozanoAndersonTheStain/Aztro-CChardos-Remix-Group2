import { useState, KeyboardEvent } from "react";
import type { OptionCardProps } from "../interfaces/OptionCard.interface";

export function OptionCard({
  image,
  description,
  fact,
  isSelected,
  onSelect,
}: OptionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect();
    }
  };

  const handleFlipKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("button")) {
      onSelect();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleCardClick}
      className="group relative w-64 h-[252px] cursor-pointer [perspective:1000px] rounded-xl"
    >
      <div
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] rounded-xl ${
          isSelected ? "shadow-2xl shadow-sky-vivid" : ""
        } ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-xl flex flex-col [backface-visibility:hidden]">
          <div className="overflow-hidden flex-1">
            <img
              src={image}
              alt={description}
              className="w-full h-[240px] object-cover rounded-t-xl"
              loading="lazy"
            />
          </div>
          <div className="flex justify-between items-center p-3 rounded-b-xl bg-sky-vivid">
            <h3 className="text-base font-semibold text-white">{description}</h3>
            <button
              type="button"
              aria-label={isFlipped ? "Show front" : "Show fact"}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(!isFlipped);
              }}
              onKeyDown={handleFlipKeyDown}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
                <path d="M15 8l3 3l3 -3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-sky-vivid rounded-xl p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center">
          <p className="text-white text-center">{fact}</p>
          <button
            aria-label={isFlipped ? "Show front" : "Show fact"}
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(!isFlipped);
            }}
            onKeyDown={handleFlipKeyDown}
            className="absolute bottom-4 right-4 p-2 rounded-full text-white hover:opacity-80 transition-opacity"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" />
              <path d="M15 8l3 3l3 -3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}