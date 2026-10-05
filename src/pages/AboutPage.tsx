import Card from "../components/ui/Card";

const AboutPage = () => {
  return (
    <Card className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold text-sun">Om meg</h1>
      {/* TODO: skriv din egen tekst */}
      <p className="mt-4 leading-relaxed">
        Skriv litt om deg selv her: hva du studerer, hva du liker å jobbe med, og hva du ønsker å
        lære mer om.
      </p>
    </Card>
  );
};

export default AboutPage;
