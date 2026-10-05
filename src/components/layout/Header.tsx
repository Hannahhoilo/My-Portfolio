import { navLinks, sectionIds } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";

const Header = () => {
  const activeId = useActiveSection(sectionIds);

  return (
    // sticky top-0: menyen blir liggende øverst mens man scroller
    <header className="sticky top-0 z-20 bg-ocean-dark/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6">
        <a href="#hjem" className="text-2xl font-bold text-sun">
          Hannah Høilo 🐠
        </a>

        <ul className="flex flex-wrap gap-6 font-bold">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.id}>
                {/* href="#id" scroller til seksjonen med den id-en */}
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded px-1 transition-colors hover:text-aqua focus-visible:outline-2 focus-visible:outline-aqua ${
                    isActive ? "text-aqua underline underline-offset-8" : "text-sun"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
