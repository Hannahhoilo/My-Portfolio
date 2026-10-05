import Card from "../ui/Card";

const HeroSection = () => {
  return (
    // scroll-mt-24 gjør at seksjonen ikke havner bak den faste menyen når man scroller til den
    <section id="hjem" className="flex min-h-[80vh] scroll-mt-24 items-center justify-center py-16">
      <Card className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-sun">Hannah Høilo</h1>
        <p className="mt-4 text-lg">
          Jeg studerer frontend- og mobilutvikling på Høyskolen Kristiania.
        </p>
        <a
          href="#prosjekter"
          className="mt-6 inline-block rounded-full border-2 border-aqua px-6 py-2 font-bold text-aqua hover:bg-aqua hover:text-ocean-dark focus-visible:outline-2 focus-visible:outline-sun"
        >
          Se prosjektene mine
        </a>
      </Card>
    </section>
  );
};

export default HeroSection;
