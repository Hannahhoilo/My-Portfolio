import Card from "../ui/Card";

const AboutSection = () => {
  return (
    <section
      id="om-meg"
      aria-labelledby="om-meg-tittel"
      className="scroll-mt-24 py-16"
    >
      <Card className="mx-auto max-w-2xl">
        <h2 id="om-meg-tittel" className="text-3xl font-bold text-sun">
          Om meg
        </h2>
        <p className="mt-4 leading-relaxed">
          Jeg har før jeg begynte på bacheloren allerede gått et år på
          Kristianias Fagskole, på et årsstudium innen Frontend. På mitt 4.
          semester tok jeg valgfagene C i Linux, Python, Algorithms and Data
          Structures og IT- og prosjektledelse. Jeg har gjennom skolegangen
          jobbet som studentassistent, der jeg veileder studenter i emner jeg
          har hatt tidligere. På fritiden svetter jeg endten foran PlayStation
          eller inne på treningssenteret. Jeg har før jeg begynte på bacheloren
          allerede gått et år på Kristianias Fagskole, på et årsstudium innen
          Frontend. På mitt 4. semester tok jeg valgfagene C i Linux, Python,
          Algorithms and Data Structures og IT- og prosjektledelse. Jeg har
          gjennom skolegangen jobbet som studentassistent, der jeg veileder
          studenter i emner jeg har hatt tidligere. På fritiden svetter jeg
          endten foran PlayStation eller inne på treningssenteret.
        </p>
      </Card>
    </section>
  );
};

export default AboutSection;
