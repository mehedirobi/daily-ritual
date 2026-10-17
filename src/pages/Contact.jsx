import { useState } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Coffee,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit our café",
    value: "Dhaka, Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=cafes+in+Dhaka+Bangladesh",
    action: "Find us",
  },
  {
    icon: Phone,
    title: "Give us a call",
    value: "+880 1700-000000",
    href: "tel:+8801700000000",
    action: "Call us",
  },
  {
    icon: Mail,
    title: "Send us an email",
    value: "hello@dailyritual.example",
    href: "mailto:hello@dailyritual.example",
    action: "Email us",
  },
];

const openingHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 10:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 8:00 PM" },
];

const faqs = [
  {
    question: "Can I reserve a table?",
    answer:
      "Contact us by phone or email to ask about table availability and reservations.",
  },
  {
    question: "Do you offer takeaway?",
    answer:
      "For takeaway options and current availability, please get in touch with our team.",
  },
  {
    question: "Can I ask about your menu?",
    answer:
      "Of course. Visit our menu page to explore our offerings, or contact us if you have a specific question.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
        light ? "text-[#D9B18C]" : "text-[#B97745]"
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}

function ContactLink({ href, children, variant = "primary", className = "" }) {
  const styles = {
    primary:
      "bg-[#263D32] !text-[#F7F1E7] hover:bg-[#B97745] hover:!text-white",
    cream:
      "bg-[#F7F1E7] !text-[#263D32] hover:bg-white hover:!text-[#263D32]",
    outline:
      "border border-[#263D32]/25 bg-transparent !text-[#263D32] hover:border-[#263D32] hover:bg-[#263D32] hover:!text-white",
  };

  return (
    <Link
      to={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745] ${styles[variant]} ${className}`}
    >
      <span className="!text-inherit">{children}</span>
    </Link>
  );
}

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // This form currently validates locally.
    // Connect an email service or backend to deliver messages.
    setSubmitted(true);
  };

  const inputClasses =
    "form-field w-full rounded-xl border border-[#263D32]/15 bg-white px-4 py-3.5 text-sm !text-[#29251F] outline-none transition placeholder:!text-[#81796E] focus:border-[#B97745] focus:ring-2 focus:ring-[#B97745]/15";

  return (
    <main className="overflow-hidden bg-[#F7F1E7] text-[#29251F]">
      {/* Hero */}
      <section className="relative isolate bg-[#263D32]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10"
        />

        <div className="container-site relative mx-auto grid min-h-[430px] items-center gap-10 py-20 md:min-h-[490px] md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <Reveal className="max-w-2xl">
            <SectionLabel light>Contact Daily Ritual</SectionLabel>

            <h1 className="max-w-xl font-serif text-5xl leading-[1.08] tracking-tight !text-[#F7F1E7] sm:text-6xl lg:text-7xl">
              Every good conversation starts with{" "}
              <span className="italic !text-[#D9B18C]">hello.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 !text-[#F7F1E7]/75 sm:text-lg">
              Questions about our coffee, planning a visit, or just want to
              say hello? We would love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F7F1E7] px-6 py-3 text-sm font-semibold !text-[#263D32] no-underline transition hover:bg-white hover:!text-[#263D32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B18C]"
              >
                <span className="!text-inherit">Send us a message</span>
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>

              <Link
                to="/menu"
                className="inline-flex min-h-12 items-center gap-2 px-2 py-3 text-sm font-semibold !text-[#F7F1E7] no-underline transition hover:!text-[#D9B18C]"
              >
                <span className="!text-inherit">Explore our menu</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="relative hidden justify-self-end md:block"
          >
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/20 p-5 lg:h-80 lg:w-80">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F7F1E7]">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#E9DDCC] lg:h-44 lg:w-44">
                  <Coffee
                    className="h-20 w-20 text-[#263D32] lg:h-24 lg:w-24"
                    strokeWidth={1.1}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-[#263D32] px-5 py-2.5 text-xs font-medium tracking-[0.16em] !text-[#F7F1E7]">
                GOOD COFFEE, GOOD PEOPLE
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact information */}
      <section className="section-space">
        <div className="container-site mx-auto">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>Get in touch</SectionLabel>

            <h2 className="font-serif text-3xl leading-tight !text-[#263D32] sm:text-4xl md:text-5xl">
              We are just a message away.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 !text-[#6F6A60] sm:text-base">
              Whether you have a question or simply want to connect, here is
              how you can reach us.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="group flex h-full flex-col rounded-2xl border border-[#263D32]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B97745]/40 hover:shadow-[0_18px_45px_rgba(38,61,50,0.08)] sm:p-7">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F1E7] text-[#263D32] transition group-hover:bg-[#263D32] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-semibold !text-[#263D32]">
                      {item.title}
                    </h3>

                    <p className="mt-2 break-words text-sm leading-6 !text-[#6F6A60]">
                      {item.value}
                    </p>

                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold !text-[#B97745] no-underline transition hover:!text-[#263D32]"
                    >
                      <span className="!text-inherit">{item.action}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Message form and opening hours */}
      <section id="contact-form" className="section-space scroll-mt-24 bg-white">
        <div className="container-site mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionLabel>Write to us</SectionLabel>

            <h2 className="max-w-lg font-serif text-3xl leading-tight !text-[#263D32] sm:text-4xl">
              Let us know what is on your mind.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 !text-[#6F6A60] sm:text-base">
              Fill in the details below and prepare your message. We welcome
              your questions, feedback, and suggestions.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold !text-[#29251F]"
                  >
                    Your name <span className="!text-[#B97745]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                    maxLength={100}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold !text-[#29251F]"
                  >
                    Email address <span className="!text-[#B97745]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                    maxLength={254}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold !text-[#29251F]"
                >
                  Subject <span className="!text-[#B97745]">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                  maxLength={150}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold !text-[#29251F]"
                >
                  Your message <span className="!text-[#B97745]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} min-h-36 resize-y`}
                  required
                  minLength={10}
                  maxLength={3000}
                />
                <p className="mt-2 text-right text-xs !text-[#81796E]">
                  {formData.message.length}/3000 characters
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#263D32] px-6 py-3 text-sm font-semibold !text-[#F7F1E7] transition duration-300 hover:bg-[#B97745] hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745] sm:w-auto"
              >
                <span className="!text-inherit">Prepare message</span>
                <Send size={16} aria-hidden="true" />
              </button>

              {submitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#B97745]/30 bg-[#F7F1E7] p-4 text-sm leading-6 !text-[#263D32]"
                >
                  <p className="font-semibold !text-[#263D32]">
                    Your message is ready.
                  </p>
                  <p className="mt-1 !text-[#6F6A60]">
                    This form is currently a frontend demo and does not send
                    messages to us. Please email{" "}
                    <a
                      href="mailto:hello@dailyritual.example"
                      className="font-semibold !text-[#B97745] underline underline-offset-2"
                    >
                      hello@dailyritual.example
                    </a>{" "}
                    directly, or connect this form to an email service or
                    backend to enable delivery.
                  </p>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-2xl bg-[#263D32] p-6 !text-[#F7F1E7] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Clock3 size={21} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold !text-[#F7F1E7]">
                    Opening hours
                  </h3>
                  <p className="mt-1 text-sm !text-[#F7F1E7]/65">
                    Make time for a good cup.
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-white/15" />

              <div className="space-y-5">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-wrap items-center justify-between gap-2 text-sm"
                  >
                    <span className="!text-[#F7F1E7]/75">{item.day}</span>
                    <span className="font-medium !text-[#F7F1E7]">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-xl bg-white/10 p-4 text-xs leading-6 !text-[#F7F1E7]/75">
                These are sample hours. Please confirm your actual café
                schedule before publishing.
              </p>
            </div>

            <div className="rounded-2xl border border-[#263D32]/10 bg-[#F7F1E7] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#B97745]">
                  <MessageCircle size={21} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold !text-[#263D32]">
                  Frequently asked questions
                </h3>
              </div>

              <div className="mt-6 divide-y divide-[#263D32]/10">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold !text-[#263D32] marker:hidden">
                      <span className="!text-inherit">{faq.question}</span>
                      <span className="text-xl font-normal !text-[#B97745] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pt-3 text-sm leading-6 !text-[#6F6A60]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-space bg-[#E9DDCC]">
        <Reveal className="container-site mx-auto text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#263D32] !text-[#F7F1E7]">
            <Coffee size={25} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.22em] !text-[#B97745]">
            Your daily dose of something beautiful
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight !text-[#263D32] sm:text-4xl md:text-5xl">
            Good coffee tastes even better together.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 !text-[#6F6A60] sm:text-base">
            Take a look at what is brewing and find something that makes your
            day a little better.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ContactLink href="/menu" variant="primary">
              Explore our menu <ArrowRight size={16} />
            </ContactLink>

            <ContactLink href="/about" variant="outline">
              Our story <ArrowUpRight size={16} />
            </ContactLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}