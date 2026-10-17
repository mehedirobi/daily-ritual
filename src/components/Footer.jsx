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
];

function SocialIcon({ type, size = 18 }) {
  if (type === "instagram") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
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
  }

  return null;
}

function SocialLink({ label, href, type }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors duration-200 hover:border-[#B97745] hover:bg-[#B97745] hover:text-white"
    >
      <SocialIcon type={type} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#263D32] text-[#F7F1E7]">
      <div className="container-site py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Daily Ritual home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F1E7] text-[#263D32]">
                <Coffee size={22} strokeWidth={1.7} />
              </span>

              <span>
                <span className="block font-serif text-2xl leading-tight">
                  Daily Ritual
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Coffee & slow living
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Your daily dose of something beautiful. Good coffee, thoughtful
              details, and a little moment to slow down.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <SocialLink key={social.type} {...social} />
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Explore
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#D8AE85]"
                  >
                    {link.label}
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              <Clock3 size={15} />
              Opening Hours
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              <div>
                <p className="text-white/90">Monday – Friday</p>
                <p>8:00 AM – 10:00 PM</p>
              </div>

              <div>
                <p className="text-white/90">Saturday – Sunday</p>
                <p>9:00 AM – 11:00 PM</p>
              </div>

              <p className="pt-1 text-xs text-white/45">
                Hours shown are sample business information.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Get in Touch
            </h2>

            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D8AE85]"
                />
                <span>Dhaka, Bangladesh</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D8AE85]"
                />
                <a
                  href="tel:+8801700000000"
                  className="transition-colors hover:text-white"
                >
                  +880 1700-000000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D8AE85]"
                />
                <a
                  href="mailto:hello@dailyritual.example"
                  className="break-all transition-colors hover:text-white"
                >
                  hello@dailyritual.example
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/50 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Daily Ritual. All rights reserved.
          </p>

          <Link
            to="/menu"
            className="inline-flex w-fit items-center gap-2 text-[#F7F1E7] transition-colors hover:text-[#D8AE85]"
          >
            Find your favourite coffee
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}