import Card from "../components/ui/Card";

const ContactPage = () => {
  return (
    <Card className="mx-auto max-w-xl">
      <h1 className="text-3xl font-bold text-sun">Kontakt</h1>
      <p className="mt-4">
        Ta gjerne kontakt hvis du vil vite mer om meg eller prosjektene mine.
      </p>
      {/* TODO: bytt ut med din e-postadresse */}
      <a
        href="mailto:hannahhoilo@hotmail.com"
        className="mt-4 inline-block font-bold text-sun underline underline-offset-4 hover:text-aqua focus-visible:outline-2 focus-visible:outline-aqua"
      >
        hannahhoilo@hotmail.com
      </a>
    </Card>
  );
};

export default ContactPage;
