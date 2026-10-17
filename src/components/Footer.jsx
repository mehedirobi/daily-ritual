import { Link } from "react-router";
import {
  ArrowUpRight,
  Clock3,
  Coffee,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Our Menu", to: "/menu" },
  { label: "Our Story", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const openingHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 9:00 PM" },
  { day: "Saturday – Sunday", hours: "9:00 AM – 10:00 PM" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    Icon: Facebook,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-16">
        {/* Brand introduction */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.15fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="Daily Ritual home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 bg-cream/10 transition-colors duration-300 group-hover:bg-caramel">
                <Coffee size={23} strokeWidth={1.6} />
              </span>

              <span className="font-display text-3xl tracking-tight">
                Daily Ritual
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-cream/65">
              Your daily dose of something beautiful. Thoughtfully brewed
              coffee, freshly made treats, and little moments worth slowing
              down for.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/75 transition-all duration-200 hover:border-caramel hover:bg-caramel hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-display text-xl">Explore</h2>

            <div className="mb-5 mt-3 h-px w-10 bg-caramel" />

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-sm text-cream/65 transition-colors duration-200 hover:text-cream"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h2 className="flex items-center gap-2 font-display text-xl">
              <Clock3 size={19} className="text-caramel" />
              Opening Hours
            </h2>

            <div className="mb-5 mt-3 h-px w-10 bg-caramel" />

            <ul className="space-y-4">
              {openingHours.map((item) => (
                <li
                  key={item.day}
                  className="border-b border-cream/10 pb-3 last:border-0"
                >
                  <p className="text-sm text-cream/85">{item.day}</p>
                  <p className="mt-1.5 text-xs text-cream/55">
                    {item.hours}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-2 text-xs leading-5 text-cream/45">
              Hours are sample information for this demo website.
            </p>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="font-display text-xl">Get in Touch</h2>

            <div className="mb-5 mt-3 h-px w-10 bg-caramel" />

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-caramel"
                  strokeWidth={1.7}
                />
                <p className="text-sm leading-6 text-cream/65">
                  Dhaka, Bangladesh
                  <span className="mt-1 block text-xs text-cream/40">
                    Visit us for your daily coffee
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-caramel"
                  strokeWidth={1.7}
                />
                <a
                  href="tel:+8801700000000"
                  className="text-sm text-cream/65 transition-colors hover:text-cream"
                >
                  +880 1700-000000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-caramel"
                  strokeWidth={1.7}
                />
                <a
                  href="mailto:hello@dailyritual.example"
                  className="break-all text-sm text-cream/65 transition-colors hover:text-cream"
                >
                  hello@dailyritual.example
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter-style CTA */}
        <div className="mt-14 flex flex-col gap-5 border-y border-cream/15 py-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl">
              Make room for a little ritual.
            </p>
            <p className="mt-2 text-sm text-cream/55">
              Good coffee. Better moments. Every single day.
            </p>
          </div>

          <Link
            to="/menu"
            className="group inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 bg-cream px-6 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors duration-200 hover:bg-caramel hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            Explore Our Menu
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-10">
          <p className="text-xs text-cream/50">
            © {currentYear} Daily Ritual. All rights reserved.
          </p>

          <p className="text-xs text-cream/50">
            Crafted with care, served with love.
          </p>
        </div>
      </div>
    </footer>
  );
}