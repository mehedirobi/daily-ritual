
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
    "group relative inline-flex min-h-10 items-center justify-center",
    "rounded-full px-3.5 text-[13px] font-medium",
    "transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
    isActive
      ? "bg-forest/[0.07] text-forest"
      : "text-espresso/70 hover:bg-forest/[0.05] hover:text-forest",
  ].join(" ");

const mobileLinkClass = ({ isActive }) =>
  [
    "flex min-h-12 items-center justify-between gap-3 rounded-xl px-4",
    "text-sm font-medium transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
    isActive
      ? "bg-forest/[0.08] text-forest"
      : "text-espresso/75 hover:bg-forest/[0.05] hover:text-forest",
  ].join(" ");

const ctaClass =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full " +
  "bg-forest px-5 text-[12px] font-semibold !text-cream shadow-sm " +
  "transition-colors duration-200 hover:bg-caramel " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest";

function BrandLogo() {
  return (
    <Link
      to="/"
      aria-label="Daily Ritual home"
      className="group inline-flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-cream ring-1 ring-forest/10 transition-colors duration-200 group-hover:bg-caramel sm:h-11 sm:w-11">
        <Coffee
          size={21}
          strokeWidth={1.7}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:rotate-[-8deg]"
        />
      </span>

      <span className="flex min-w-0 flex-col">
        <span className="font-display text-[21px] leading-none tracking-[-0.045em] text-forest sm:text-[24px]">
          Daily Ritual
        </span>

        <span className="mt-1.5 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.13em] text-espresso/60 sm:text-[9px] sm:tracking-[0.17em]">
          Your daily dose of something beautiful
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

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
    <header className="sticky top-0 z-50 border-b border-espresso/[0.08] bg-cream/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-6 lg:gap-5 lg:px-8 xl:px-10"
      >
        <BrandLogo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={desktopLinkClass}
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-caramel"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/menu"
          className={`${ctaClass} hidden shrink-0 lg:inline-flex`}
        >
          <span className="!text-cream">Explore Menu</span>

          <ArrowUpRight
            size={15}
            strokeWidth={2}
            aria-hidden="true"
            className="shrink-0 !text-cream transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X size={22} strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={[
          "grid overflow-hidden border-t border-espresso/[0.08] bg-cream",
          "transition-[grid-template-rows,opacity] duration-200 ease-out",
          "motion-reduce:transition-none lg:hidden",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className={
                          isActive
                            ? "text-caramel"
                            : "text-espresso/40"
                        }
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`${ctaClass} mt-4 w-full text-sm`}
            >
              <span className="!text-cream">Explore Our Menu</span>

              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="!text-cream"
              />
            </Link>

            <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.17em] text-espresso/50">
              Good coffee. Better moments.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
