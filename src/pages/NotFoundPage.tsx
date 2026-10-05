import { Link } from "react-router-dom";
import Card from "../components/ui/Card";

const NotFoundPage = () => {
  return (
    <Card className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-bold text-sun">Fant ikke siden</h1>
      <p className="mt-4">Denne siden finnes ikke. Kanskje den har svømt sin vei?</p>
      <Link to="/" className="mt-4 inline-block font-bold text-aqua underline underline-offset-4">
        Gå til forsiden
      </Link>
    </Card>
  );
};

export default NotFoundPage;
