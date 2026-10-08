import Card from "../ui/Card";

const AboutSection = () => {
  return (
    // scroll-mt-24 gjør at seksjonen ikke havner bak den faste menyen når man scroller til den
    <section
      id="om-meg"
      aria-labelledby="om-meg-tittel"
      className="flex min-h-[80vh] scroll-mt-24 items-center justify-center py-16"
    >
      <Card className="max-w-2xl">
        <h1 id="om-meg-tittel" className="text-4xl font-bold text-sun">
          Hannah Høilo
        </h1>
        <p className="mt-2 text-lg text-aqua">
          Jeg studerer frontend- og mobilutvikling på Høyskolen Kristiania.
        </p>
        <p className="mt-6 leading-relaxed">
          Jeg har før jeg begynte på bacheloren allerede gått et år på
          Kristianias Fagskole, på et årsstudium innen Frontend. På mitt 4.
          semester tok jeg valgfagene C i Linux, Python, Algorithms and Data
          Structures og IT- og prosjektledelse. Jeg har gjennom skolegangen
          jobbet som studentassistent, der jeg veileder studenter i emner jeg
          har hatt tidligere. På fritiden svetter jeg endten foran PlayStation
          eller inne på treningssenteret.
        </p>
        <a
          href="#prosjekter"
          className="mt-8 inline-block rounded-full border-2 border-aqua px-6 py-2 font-bold text-aqua hover:bg-aqua hover:text-ocean-dark focus-visible:outline-2 focus-visible:outline-sun"
        >
          Ta en titt på noen av mine prosjekter
        </a>
      </Card>
    </section>
  );
};

export default AboutSection;
