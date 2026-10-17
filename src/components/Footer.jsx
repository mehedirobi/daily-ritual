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

const socialIconProps = {
  viewBox: "0 0 24 24",
  width: 19,
  height: 19,
  "aria-hidden": true,
  focusable: "false",
};

function SocialIcon({ type }) {
  switch (type) {
    case "instagram":
      return (
        <svg
          {...socialIconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg {...socialIconProps} fill="currentColor">
          <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg
          {...socialIconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
          <path d="M8.2 7.7c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.4.8 1.2 1.6 2 2 .2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.6 1.5-.4.4-1 .7-1.7.7-.5 0-1.2-.2-2-.6-1.1-.5-2.2-1.4-3-2.4-.8-.9-1.3-1.9-1.4-2.7-.1-.7.2-1.3.6-1.7Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...socialIconProps} fill="currentColor">
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
      className={[
        "inline-flex h-11 w-11 shrink-0 items-center justify-center",
        "rounded-full border border-white/15 text-white/75",
        "transition-[background-color,border-color,color,transform]",
        "duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-[#D8AE85]",
        "hover:bg-[#D8AE85] hover:text-[#263D32]",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-[#D8AE85]",
        "motion-reduce:transform-none motion-reduce:transition-none",
      ].join(" ")}
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
        className={[
          "group inline-flex min-h-8 items-center gap-2",
          "text-sm text-white/70 transition-colors duration-200",
          "hover:text-[#D8AE85]",
          "focus-visible:outline-2 focus-visible:outline-offset-4",
          "focus-visible:outline-[#D8AE85]",
          "motion-reduce:transition-none",
        ].join(" ")}
      >
        <span>{children}</span>

        <ArrowUpRight
          size={14}
          aria-hidden="true"
          className="shrink-0 opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 motion-reduce:transition-none"
        />
      </Link>
    </li>
  );
}

function FooterHeading({ children, icon: Icon }) {
  return (
    <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:tracking-[0.18em]">
      {Icon && (
        <Icon
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
          className="shrink-0 text-[#D8AE85]"
        />
      )}
      {children}
    </h2>
  );
}

const secondaryLinkClass = [
  "inline-flex min-h-10 items-center justify-center gap-2",
  "rounded-full border border-white/20 px-4 py-2",
  "text-xs font-medium !text-[#F7F1E7]",
  "transition-colors duration-200",
  "hover:border-[#D8AE85] hover:bg-[#D8AE85] hover:!text-[#263D32]",
  "focus-visible:outline-2 focus-visible:outline-offset-2",
  "focus-visible:outline-[#D8AE85]",
  "motion-reduce:transition-none",
].join(" ");

const textLinkClass = [
  "inline-flex min-h-8 items-center gap-2",
  "text-sm font-medium !text-[#D8AE85]",
  "transition-colors duration-200 hover:!text-white",
  "focus-visible:outline-2 focus-visible:outline-offset-4",
  "focus-visible:outline-[#D8AE85]",
  "motion-reduce:transition-none",
].join(" ");

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#263D32] text-[#F7F1E7]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 -z-10 h-64 w-64 rounded-full border border-white/[0.05] sm:-right-24 sm:-top-36 sm:h-96 sm:w-96"
      />

      <div className="container-site relative py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-10 xl:gap-12">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Daily Ritual home"
              className="group inline-flex max-w-full items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8AE85]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F1E7] text-[#263D32] transition-colors duration-200 group-hover:bg-[#D8AE85] motion-reduce:transition-none sm:h-12 sm:w-12">
                <Coffee
                  size={23}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>

              <span className="min-w-0">
                <span className="block font-display text-xl leading-tight tracking-tight !text-[#F7F1E7] sm:text-2xl">
                  Daily Ritual
                </span>

                <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-[10px] sm:tracking-[0.18em]">
                  Coffee & slow living
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Your daily dose of something beautiful. Thoughtfully crafted
              coffee, comforting flavours, and a little space to slow down.
            </p>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
              Follow our journey
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => (
                <SocialLink key={social.type} {...social} />
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation" className="min-w-0">
            <FooterHeading>Explore</FooterHeading>

            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>

            <Link to="/menu" className={`${secondaryLinkClass} mt-6`}>
              <span className="!text-inherit">Explore the menu</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </nav>

          {/* Opening hours */}
          <section aria-labelledby="footer-hours-heading" className="min-w-0">
            <FooterHeading icon={Clock3}>
              <span id="footer-hours-heading">Opening Hours</span>
            </FooterHeading>

            <div className="mt-5 space-y-4">
              {openingHours.map((schedule) => (
                <div key={schedule.days}>
                  <p className="text-sm font-medium text-white/90">
                    {schedule.days}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    {schedule.hours}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-white/45">
              Opening hours may vary on public holidays.
            </p>
          </section>

          {/* Contact */}
          <section aria-labelledby="footer-contact-heading" className="min-w-0">
            <FooterHeading>
              <span id="footer-contact-heading">Get in Touch</span>
            </FooterHeading>

            <p className="mt-5 text-sm leading-6 text-white/65">
              Questions, feedback, or just want to talk coffee? Get in touch.
            </p>

            <address className="mt-5 not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#D8AE85]"
                  />

                  <span className="text-sm leading-6 text-white/70">
                    Dhaka, Bangladesh
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Phone
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#D8AE85]"
                  />

                  <a
                    href="tel:+8801336458100"
                    className="min-w-0 break-words text-sm text-white/70 transition-colors duration-200 hover:text-[#D8AE85] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8AE85] motion-reduce:transition-none"
                  >
                    +8801336458100
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Mail
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#D8AE85]"
                  />

                  <a
                    href="mailto:hello@dailyritual.example"
                    className="min-w-0 break-all text-sm text-white/70 transition-colors duration-200 hover:text-[#D8AE85] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8AE85] motion-reduce:transition-none"
                  >
                    hello@dailyritual.example
                  </a>
                </li>
              </ul>
            </address>

            <Link to="/contact" className={`${textLinkClass} mt-5`}>
              <span className="!text-inherit">Contact us</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </section>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-white/50">
            © {currentYear} Daily Ritual. All rights reserved.
          </p>

          <Link
            to="/menu"
            className="inline-flex min-h-8 w-fit items-center gap-2 text-sm text-white/75 transition-colors duration-200 hover:text-[#D8AE85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8AE85] motion-reduce:transition-none"
          >
            <span>Find your favourite coffee</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}