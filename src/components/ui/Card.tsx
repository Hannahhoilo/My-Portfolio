import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string; // valgfrie ekstra klasser, f.eks. "mt-8"
}

// Gjenbrukbart "glass"-kort: gjennomsiktig med blur, som boksen på den gamle siden
const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`rounded-xl border border-aqua/60 bg-ocean-dark/40 p-6 shadow-lg backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
