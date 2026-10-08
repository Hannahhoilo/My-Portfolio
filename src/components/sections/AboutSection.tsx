import Card from "../ui/Card";
import profileImg from "../../assets/profileimg.webp";

const AboutSection = () => {
  return (
    // scroll-mt-24 gjør at seksjonen ikke havner bak den faste menyen når man scroller til den
    <section
      id="om-meg"
      aria-labelledby="om-meg-tittel"
      className="flex min-h-[80vh] scroll-mt-24 items-center justify-center py-16"
    >
      {/* Mobil: bildet over teksten (flex-col-reverse). Fra md og opp: teksten til venstre, bildet til høyre */}
      <Card className="flex w-full flex-col-reverse items-center gap-8 md:flex-row">
        <div className="md:flex-1">
          <h1 id="om-meg-tittel" className="text-4xl font-bold text-sun">
            Hannah Høilo
          </h1>
          <p className="mt-2 text-lg text-aqua">
            Bachelorstudent i frontend- og mobilutvikling ved Høyskolen
            Kristiania
          </p>
          <p className="mt-6 leading-relaxed">
            Jeg startet mitt IT-eventyr høsten 2023, etter å ha jobbet fem år
            som frisør. Jeg begynte på et ettårig frontend-studium ved Høyskolen
            Kristianias Fagskole, hvor jeg fikk gå i dybden på
            frontend-utvikling og blant annet jobbet med React, Firebase
            Authentication, samt design og prototyping i Figma. Jeg stortrivdes
            med å lage prosjekter og løse problemer, men hadde lyst til å lære
            enda mer. Derfor gikk jeg videre på bachelorprogrammet i Frontend-
            og mobilutvikling ved Høyskolen Kristiania, hvor vi jobber med
            utvikling av web- og mobilapplikasjoner, både frontend og backend,
            og lærer å bruke ulike teknologier og rammeverk for iOS og Android.
            Ved siden av studiene jobber jeg som studentassistent, hvor jeg
            veileder andre studenter i fag jeg selv har hatt tidligere. På
            fritiden finner du meg svette enten foran Playstation eller på
            treningssenteret.
          </p>
          <a
            href="#prosjekter"
            className="mt-8 inline-block rounded-full border-2 border-aqua px-6 py-2 font-bold text-aqua hover:bg-aqua hover:text-ocean-dark focus-visible:outline-2 focus-visible:outline-sun"
          >
            Ta en titt på noen av mine prosjekter
          </a>
        </div>

        <img
          src={profileImg}
          alt="Bilde av meg"
          className="aspect-square w-48 shrink-0 rounded-full object-cover shadow-lg md:w-64"
        />
      </Card>
    </section>
  );
};

export default AboutSection;
