import Card from "../ui/Card";

const ContactSection = () => {
  return (
    <section id="kontakt" aria-labelledby="kontakt-tittel" className="scroll-mt-24 py-16">
      <Card>
        <h2 id="kontakt-tittel" className="text-3xl font-bold text-sun">
          Kontakt
        </h2>
        <p className="mt-4">Ta gjerne kontakt!</p>
        <a
          href="mailto:hannahhoilo@hotmail.com"
          className="mt-4 inline-block font-bold text-sun underline underline-offset-4 hover:text-aqua focus-visible:outline-2 focus-visible:outline-aqua"
        >
          hannahhoilo@hotmail.com
        </a>
      </Card>
    </section>
  );
};

export default ContactSection;
