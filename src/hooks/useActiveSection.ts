import { useEffect, useState } from "react";

// Finner ut hvilken seksjon man ser på, så menyen kan markere riktig lenke.
// Aktiv seksjon = den siste seksjonen som har nådd rett under menyen.
// Helt nederst på siden regnes den siste seksjonen som aktiv, siden den
// ofte er for kort til å nå helt opp.
export const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const updateActive = () => {
      const line = 120; // litt under menyen (seksjonene har scroll-mt-24 = 96px)
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) current = id;
      });
      setActiveId(current);
    };

    updateActive(); // sjekk med en gang, f.eks. hvis siden åpnes med #kontakt i URL-en
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    // Rydder opp når komponenten forsvinner
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [ids]);

  return activeId;
};
