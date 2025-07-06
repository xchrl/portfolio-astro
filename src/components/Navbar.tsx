import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
      <div className="flex justify-center items-center gap-4">
        {routes.map(({ route, label }) =>
          currentRoute == route || currentRoute == route + "/" ? (
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
        <ThemeToggle />
      </div>
    </nav>
  );
}
