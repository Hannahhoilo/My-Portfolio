import type { MouseEvent, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string; // valgfrie med ekstra klasser, f.eks. "mt-8"
}

// Gjenbrukbart "glass"-kort: gjennomsiktig med blur
const Card = ({ children, className = "" }: CardProps) => {
  // Lagrer hvor musa er inni boks, så gradienten i rammen (glow-border i index.css) kan følge etter.
  // Verdiene settes rett på elementet i stedet for i state, så kortet slipper å rendres på nytt hver gang musa flytter seg
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`,
    );
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`glow-border rounded-xl border-2 border-aqua/60 bg-ocean-dark/40 p-6 shadow-lg backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
