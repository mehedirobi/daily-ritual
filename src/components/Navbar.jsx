
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ArrowUpRight, Coffee, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Menu", to: "/menu" },
  { label: "Our Story", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const desktopLinkClass = ({ isActive }) =>
  [
    "relative py-2 text-[13px] font-medium transition-colors duration-200",
    "after:absolute after:bottom-0 after:left-0 after:h-[2px]",
    "after:bg-caramel after:transition-all after:duration-200",
    isActive
      ? "text-forest after:w-full"
      : "text-espresso/65 after:w-0 hover:text-forest hover:after:w-full",
  ].join(" ");

const mobileLinkClass = ({ isActive }) =>
  [
    "flex items-center justify-between rounded-md px-4 py-3.5",
    "text-sm font-medium transition-colors duration-200",
    isActive
      ? "bg-forest/10 text-forest"
      : "text-espresso/75 hover:bg-forest/5 hover:text-forest",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/[0.08] bg-cream/95 backdrop-blur-lg">
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Daily Ritual — Home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream transition-transform duration-300 group-hover:rotate-[-8deg]">
            <Coffee size={21} strokeWidth={1.7} />
          </span>

          <span className="flex flex-col">
            <span className="font-display text-[23px] leading-none tracking-[-0.04em] text-forest">
              Daily Ritual
            </span>

            <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-espresso/55 sm:text-[9px]">
              Your daily dose of beautiful
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/menu"
          className="group hidden min-h-11 items-center justify-center gap-2 rounded-sm bg-forest px-5 text-[12px] font-semibold text-cream transition-colors duration-200 hover:bg-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest lg:inline-flex"
        >
          Explore Menu
          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X size={23} strokeWidth={1.7} />
          ) : (
            <Menu size={23} strokeWidth={1.7} />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`grid overflow-hidden border-t border-espresso/[0.08] bg-cream transition-[grid-template-rows,opacity] duration-200 ease-out lg:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6"
            inert={!open}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={mobileLinkClass}
                >
                  {link.label}
                  <ArrowUpRight
                    size={15}
                    className="opacity-50"
                    aria-hidden="true"
                  />
                </NavLink>
              ))}
            </div>

            <Link
              to="/menu"
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-sm bg-forest px-5 text-sm font-semibold text-cream transition-colors hover:bg-caramel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              Explore Our Menu
              <ArrowUpRight size={16} />
            </Link>

            <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              Good coffee. Better moments.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
