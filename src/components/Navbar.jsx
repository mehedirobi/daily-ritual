
import { useEffect, useId, useState } from "react";
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
    "rounded-full px-3 py-2 text-[13px] font-medium",
    "transition-colors duration-200 ease-out",
    "motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-[#263D32]",
    isActive
      ? "bg-[#263D32]/[0.08] text-[#263D32]"
      : "text-[#29251F]/75 hover:bg-[#263D32]/[0.05] hover:text-[#263D32]",
  ].join(" ");

const mobileLinkClass = ({ isActive }) =>
  [
    "flex min-h-12 items-center justify-between gap-3",
    "rounded-xl px-4 py-3 text-sm font-medium",
    "transition-colors duration-200 ease-out",
    "motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-[#263D32]",
    isActive
      ? "bg-[#263D32]/[0.08] text-[#263D32]"
      : "text-[#29251F]/80 hover:bg-[#263D32]/[0.05] hover:text-[#263D32]",
  ].join(" ");

const ctaClass = [
  "group inline-flex min-h-11 items-center justify-center gap-2",
  "rounded-full bg-[#263D32] px-5 py-3",
  "text-xs font-semibold !text-[#F7F1E7]",
  "shadow-sm transition-[background-color,transform,box-shadow]",
  "duration-200 ease-out hover:bg-[#B97745]",
  "hover:shadow-md active:scale-[0.98]",
  "motion-reduce:transition-none motion-reduce:active:scale-100",
  "focus-visible:outline-2 focus-visible:outline-offset-4",
  "focus-visible:outline-[#263D32]",
].join(" ");

function BrandLogo({ onNavigate }) {
  return (
    <Link
      to="/"
      aria-label="Daily Ritual home"
      onClick={onNavigate}
      className="group inline-flex min-w-0 shrink items-center gap-2 sm:gap-3"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#263D32] text-[#F7F1E7] ring-1 ring-[#263D32]/10 transition-colors duration-200 group-hover:bg-[#B97745] motion-reduce:transition-none sm:h-11 sm:w-11">
        <Coffee
          size={21}
          strokeWidth={1.7}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-rotate-6 motion-reduce:transition-none"
        />
      </span>

      <span className="flex min-w-0 flex-col">
        <span className="font-display text-[19px] leading-tight tracking-[-0.045em] !text-[#263D32] sm:text-2xl">
          Daily Ritual
        </span>

        <span className="mt-1 hidden whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] !text-[#29251F]/65 min-[380px]:block sm:tracking-[0.15em]">
          Your daily dose of something beautiful
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const mobileNavigationId = useId();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#29251F]/[0.08] bg-[#F7F1E7]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-2 px-3 min-[380px]:px-4 sm:h-[76px] sm:gap-4 sm:px-6 lg:gap-5 lg:px-8 xl:px-10"
      >
        <BrandLogo onNavigate={closeMenu} />

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
                  <span>{link.label}</span>

                  <span
                    aria-hidden="true"
                    className={[
                      "absolute inset-x-3 bottom-1 h-0.5 rounded-full",
                      "origin-center bg-[#B97745]",
                      "transition-transform duration-200 ease-out",
                      "motion-reduce:transition-none",
                      isActive ? "scale-x-100" : "scale-x-0",
                    ].join(" ")}
                  />
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
          <span className="!text-inherit">Explore Menu</span>

          <ArrowUpRight
            size={15}
            strokeWidth={2}
            aria-hidden="true"
            className="shrink-0 !text-inherit transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full !text-[#263D32] transition-colors duration-200 hover:bg-[#263D32]/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263D32] motion-reduce:transition-none lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={mobileNavigationId}
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
        id={mobileNavigationId}
        aria-hidden={!open}
        inert={!open}
        className={[
          "grid overflow-hidden border-t border-[#29251F]/[0.08] bg-[#F7F1E7]",
          "transition-[grid-template-rows,opacity,visibility]",
          "duration-250 ease-out",
          "motion-reduce:transition-none lg:hidden",
          open
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible pointer-events-none grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-3 pb-5 pt-4 min-[380px]:px-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        className={
                          isActive
                            ? "shrink-0 text-[#B97745]"
                            : "shrink-0 text-[#29251F]/40"
                        }
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <Link
              to="/menu"
              onClick={closeMenu}
              className={`${ctaClass} mt-4 w-full`}
            >
              <span className="!text-inherit">Explore Our Menu</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
                className="!text-inherit"
              />
            </Link>

            <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.15em] !text-[#29251F]/55">
              Good coffee. Better moments.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
