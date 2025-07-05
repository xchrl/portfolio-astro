import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import { useState } from "react";

const routes = [
  {
    route: "/",
    label: "home",
  },
  { route: "/about", label: "about" },
  { route: "/contact", label: "contact" },
];

export default function Navbar({ currentRoute }: { currentRoute: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto p-4 xl:p-6">
      <div className="flex justify-between items-center">
        <div className="text-accent">
          <h2>xchrl</h2>
        </div>
        <div className="hidden xl:flex gap-4">
          {routes.map(({ route, label }) =>
            currentRoute == route ? (
              <span className="underline route-disabled" key={route}>
                {label}
              </span>
            ) : (
              <a
                href={route}
                className="hover:text-accent duration-150"
                key={route}
              >
                {label}
              </a>
            )
          )}
        </div>
        <div>
          <Button
            variant="outline"
            className="xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RxHamburgerMenu />
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-center gap-4">
          {routes.map(({ route, label }) =>
            currentRoute == route ? (
              <span className="underline">{label}</span>
            ) : (
              <a href={route} className="hover:text-accent duration-150">
                {label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
