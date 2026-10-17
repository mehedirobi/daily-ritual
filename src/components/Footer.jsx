import { Link } from "react-router";
import {
  ArrowUpRight,
  Clock3,
  Coffee,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Our Menu", to: "/menu" },
  { label: "Our Story", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    type: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    type: "facebook",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801700000000",
    type: "whatsapp",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    type: "youtube",
  },
];

const openingHours = [
  {
    days: "Monday – Friday",
    hours: "8:00 AM – 10:00 PM",
  },
  {
    days: "Saturday – Sunday",
    hours: "9:00 AM – 11:00 PM",
  },
];

function SocialIcon({ type, size = 18 }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...commonProps}>
          <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
          <path d="M8.2 7.7c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.4.8 1.2 1.6 2 2 .2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.6 1.5-.4.4-1 .7-1.7.7-.5 0-1.2-.2-2-.6-1.1-.5-2.2-1.4-3-2.4-.8-.9-1.3-1.9-1.4-2.7-.1-.7.2-1.3.6-1.7Z" />
        </svg>
      );

    case "tiktok":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.6 7.2a5.8 5.8 0 0 1-3.8-1.4v8.1a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.4a2.7 2.7 0 1 0 1.8 2.5V2.5h3.1c.3 2.1 1.6 3.7 3.7 4.1v3.2Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1a31 31 0 0 0-.5 4.9 31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      );

    default:
      return null;
  }
}

function SocialLink({ label, href, type }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Daily Ritual on ${label}`}
      title={label}
      className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D8AE85] hover:bg-[#D8AE85] hover:text-[#263D32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AE85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#263D32]"
    >
      <SocialIcon type={type} />
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-[#D8AE85] focus-visible:outline-none focus-visible:text-[#D8AE85]"
      >
        <span>{children}</span>
        <ArrowUpRight
          size={13}
          className="opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#263D32] text-[#F7F1E7]">
      {/* Subtle decorative detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/[0.04] sm:h-96 sm:w-96"
      />

      <div className="container-site relative py-12 sm:py-16 lg:py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Daily Ritual home"
              className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AE85]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7F1E7] text-[#263D32]">
                <Coffee size={23} strokeWidth={1.6} aria-hidden="true" />
              </span>

              <span>
                <span className="block font-serif text-2xl leading-tight tracking-tight">
                  Daily Ritual
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-white/55">
                  Coffee & slow living
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Your daily dose of something beautiful. Thoughtfully crafted
              coffee, comforting flavours, and a little space to slow down.
            </p>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
              Follow our journey
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => (
                <SocialLink key={social.type} {...social} />
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Explore
            </h2>

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>

            <Link
              to="/menu"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-medium text-[#F7F1E7] transition-colors hover:border-[#D8AE85] hover:bg-[#D8AE85] hover:text-[#263D32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AE85]"
            >
              Explore the menu
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </nav>

          {/* Opening hours */}
          <div>
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <Clock3
                size={15}
                className="text-[#D8AE85]"
                aria-hidden="true"
              />
              Opening Hours
            </h2>

            <div className="mt-5 space-y-5">
              {openingHours.map((schedule) => (
                <div key={schedule.days}>
                  <p className="text-sm font-medium text-white/90">
                    {schedule.days}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {schedule.hours}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-white/40">
              Please confirm the actual opening hours before visiting.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get in Touch
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/60">
              Questions, feedback, or just want to talk coffee? Get in touch.
            </p>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D8AE85]"
                  aria-hidden="true"
                />
                <span className="text-sm leading-6 text-white/65">
                  Dhaka, Bangladesh
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D8AE85]"
                  aria-hidden="true"
                />
                <a
                  href="tel:+8801700000000"
                  className="break-words text-sm text-white/65 transition-colors hover:text-[#D8AE85] focus-visible:outline-none focus-visible:text-[#D8AE85]"
                >
                  +8801336458100
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D8AE85]"
                  aria-hidden="true"
                />
                <a
                  href="mailto:hello@dailyritual.example"
                  className="break-all text-sm text-white/65 transition-colors hover:text-[#D8AE85] focus-visible:outline-none focus-visible:text-[#D8AE85]"
                >
                  hello@dailyritual.example
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D8AE85] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AE85]"
            >
              Contact us
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-white/45">
            © {currentYear} Daily Ritual. All rights reserved.
          </p>

          <Link
            to="/menu"
            className="inline-flex w-fit items-center gap-2 text-sm text-white/75 transition-colors hover:text-[#D8AE85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AE85]"
          >
            Find your favourite coffee
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}