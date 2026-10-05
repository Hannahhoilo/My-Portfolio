import { Link } from "react-router-dom";
import Card from "../components/ui/Card";

const HomePage = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-sun">Hannah Høilo</h1>
        <p className="mt-4 text-lg">
          Jeg studerer frontend- og mobilutvikling på Høyskolen Kristiania.
        </p>
        <Link
          to="/prosjekter"
          className="mt-6 inline-block rounded-full border-2 border-aqua px-6 py-2 font-bold text-aqua hover:bg-aqua hover:text-ocean-dark focus-visible:outline-2 focus-visible:outline-sun"
        >
          Se prosjektene jeg har jobbet med
        </Link>
      </Card>
    </div>
  );
};

export default HomePage;
