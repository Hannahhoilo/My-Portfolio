// id-en må være lik id-en på <section> den skal scrolle til!
export const navLinks = [
  { id: "om-meg", label: "Om meg" },
  { id: "prosjekter", label: "Prosjekter" },
  { id: "kontakt", label: "Kontakt" },
];

// Ligger utenfor komponentene så listen ikke lages på nytt ved hver render
export const sectionIds = navLinks.map((link) => link.id);
