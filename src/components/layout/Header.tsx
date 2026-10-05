import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Hjem" },
  { to: "/om-meg", label: "Om meg" },
  { to: "/prosjekter", label: "Prosjekter" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  return (
    <header className="bg-ocean-dark/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6">
        <Link to="/" className="text-2xl font-bold text-sun">
          Hannah Høilo 🐠
        </Link>

        <ul className="flex flex-wrap gap-6 font-bold">
          {links.map((link) => (
            <li key={link.to}>
              {/* NavLink vet selv om lenken er aktiv. "end" gjør at "/" bare er aktiv på forsiden */}
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded px-1 transition-colors hover:text-aqua focus-visible:outline-2 focus-visible:outline-aqua ${
                    isActive ? "text-aqua underline underline-offset-8" : "text-sun"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
