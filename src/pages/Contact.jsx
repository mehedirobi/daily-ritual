
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
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit our café",
    value: "Dhaka, Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=cafes+in+Dhaka+Bangladesh",
    action: "Find us",
    external: true,
  },
  {
    icon: Phone,
    title: "Give us a call",
    value: "+880 1336-458100",
    href: "tel:+8801336458100",
    action: "Call us",
    external: true,
  },
  {
    icon: Mail,
    title: "Send us an email",
    value: "hello@dailyritual.example",
    href: "mailto:hello@dailyritual.example",
    action: "Email us",
    external: true,
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
      "Visit our menu page to explore our offerings, or contact us if you have a specific question.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.22em] ${
        light ? "text-[#D9B18C]" : "text-[#B97745]"
      }`}
    >
      <span className="h-px w-7 shrink-0 bg-current sm:w-8" />
      {children}
    </div>
  );
}

function ContactLink({
  to,
  children,
  variant = "primary",
  className = "",
}) {
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
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745] focus-visible:ring-offset-4 sm:px-6 ${styles[variant]} ${className}`}
    >
      <span className="!text-inherit">{children}</span>
    </Link>
  );
}

function ContactCard({ item, index }) {
  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.07} className="h-full">
      <article className="group flex h-full flex-col rounded-2xl border border-[#263D32]/10 bg-white p-5 transition duration-300 hover:border-[#B97745]/40 hover:shadow-[0_14px_36px_rgba(38,61,50,0.07)] sm:p-7 motion-safe:hover:-translate-y-1">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F1E7] text-[#263D32] transition-colors duration-200 group-hover:bg-[#263D32] group-hover:text-[#F7F1E7]">
          <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
        </div>

        <h3 className="text-base font-semibold !text-[#263D32] sm:text-lg">
          {item.title}
        </h3>

        <p className="mt-2 break-words text-sm leading-6 !text-[#6F6A60]">
          {item.value}
        </p>

        <a
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external && item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
          className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-4 text-sm font-semibold !text-[#B97745] no-underline transition-colors hover:!text-[#263D32] focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
        >
          <span className="!text-inherit">{item.action}</span>
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      </article>
    </Reveal>
  );
}

export default function Contact() {
  const reduceMotion = useReducedMotion();

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

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    setSubmitted(true);
  };

  const inputClasses =
    "form-field min-h-12 w-full rounded-xl border border-[#263D32]/15 bg-white px-4 py-3 text-base !text-[#29251F] outline-none transition-[border-color,box-shadow] duration-200 placeholder:!text-[#81796E] focus:border-[#B97745] focus:ring-2 focus:ring-[#B97745]/15 sm:text-sm";

  return (
    <main className="overflow-hidden bg-[#F7F1E7] text-[#29251F]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#263D32]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-24 h-64 w-64 rounded-full border border-white/[0.08] sm:h-80 sm:w-80"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/[0.07] sm:h-56 sm:w-56"
        />

        <div className="container-site relative mx-auto grid items-center gap-10 py-14 sm:py-18 md:min-h-[440px] md:grid-cols-[1.2fr_0.8fr] md:gap-8 md:py-20 lg:min-h-[490px] lg:gap-14 lg:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 min-w-0"
          >
            <SectionLabel light>Contact Daily Ritual</SectionLabel>

            <h1 className="max-w-2xl font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.08] tracking-[-0.045em] !text-[#F7F1E7]">
              Every good conversation starts with{" "}
              <span className="italic !text-[#D9B18C]">hello.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 !text-[#F7F1E7]/75 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Questions about our coffee, planning a visit, or just want to
              say hello? We would love to hear from you.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8">
              <a
                href="#contact-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F7F1E7] px-5 py-3 text-sm font-semibold !text-[#263D32] no-underline transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B18C] focus-visible:ring-offset-4 focus-visible:ring-offset-[#263D32] sm:px-6"
              >
                <span className="!text-inherit">Send us a message</span>
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>

              <Link
                to="/menu"
                className="inline-flex min-h-11 items-center justify-center gap-2 px-2 py-2 text-sm font-semibold !text-[#F7F1E7] no-underline transition-colors hover:!text-[#D9B18C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B18C]"
              >
                <span className="!text-inherit">Explore our menu</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <Reveal
            delay={0.1}
            className="relative hidden justify-self-center md:block md:justify-self-end"
          >
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/20 p-4 lg:h-72 lg:w-72 lg:p-5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F7F1E7]">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#E9DDCC] lg:h-40 lg:w-40">
                  <Coffee
                    className="h-16 w-16 text-[#263D32] lg:h-20 lg:w-20"
                    strokeWidth={1.1}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 left-1/2 max-w-[90%] -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-[#263D32] px-4 py-2.5 text-[9px] font-medium tracking-[0.12em] !text-[#F7F1E7] lg:px-5 lg:text-[10px] lg:tracking-[0.16em]">
                GOOD COFFEE, GOOD PEOPLE
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact information */}
      <section className="section-space">
        <div className="container-site mx-auto">
          <Reveal className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <SectionLabel>Get in touch</SectionLabel>

            <h2 className="font-display text-3xl leading-tight tracking-[-0.035em] !text-[#263D32] sm:text-4xl md:text-5xl">
              We are just a message away.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 !text-[#6F6A60] sm:text-base sm:leading-8">
              Whether you have a question or simply want to connect, here is
              how you can reach us.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {contactDetails.map((item, index) => (
              <ContactCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Message form and opening hours */}
      <section id="contact-form" className="section-space scroll-mt-24 bg-white">
        <div className="container-site mx-auto grid min-w-0 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <SectionLabel>Write to us</SectionLabel>

            <h2 className="max-w-lg font-display text-3xl leading-tight tracking-[-0.03em] !text-[#263D32] sm:text-4xl">
              Let us know what is on your mind.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 !text-[#6F6A60] sm:text-base sm:leading-8">
              Fill in the details below to prepare your message. We welcome
              your questions, feedback, and suggestions.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5 sm:mt-8">
              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
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
                    minLength={2}
                    maxLength={100}
                  />
                </div>

                <div className="min-w-0">
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
                  autoComplete="off"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                  maxLength={150}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold !text-[#29251F]"
                  >
                    Your message <span className="!text-[#B97745]">*</span>
                  </label>

                  <span
                    className="shrink-0 text-xs tabular-nums !text-[#81796E]"
                    aria-live="polite"
                  >
                    {formData.message.length}/3000
                  </span>
                </div>

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
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#263D32] px-6 py-3 text-sm font-semibold !text-[#F7F1E7] transition-colors duration-200 hover:bg-[#B97745] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745] focus-visible:ring-offset-4 sm:w-auto"
              >
                <span className="!text-inherit">Prepare message</span>
                <Send size={16} aria-hidden="true" />
              </button>

              <p className="text-xs leading-6 !text-[#81796E]">
                This form is a frontend demo. It does not send or store your
                message.
              </p>

              {submitted && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#B97745]/30 bg-[#F7F1E7] p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-[#263D32]"
                      aria-hidden="true"
                    />

                    <div className="min-w-0">
                      <p className="font-semibold !text-[#263D32]">
                        Your message is ready.
                      </p>

                      <p className="mt-1 text-sm leading-6 !text-[#6F6A60]">
                        No message has been sent. To contact the café, use{" "}
                        <a
                          href="mailto:hello@dailyritual.example"
                          className="break-all font-semibold !text-[#B97745] underline underline-offset-2"
                        >
                          hello@dailyritual.example
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0 space-y-5 sm:space-y-6">
            {/* Opening hours */}
            <div className="rounded-2xl bg-[#263D32] p-5 !text-[#F7F1E7] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
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
                    className="flex flex-col gap-1 text-sm min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between min-[420px]:gap-3"
                  >
                    <span className="!text-[#F7F1E7]/75">
                      {item.day}
                    </span>
                    <span className="font-medium !text-[#F7F1E7] min-[420px]:text-right">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-xl bg-white/[0.08] p-4 text-xs leading-6 !text-[#F7F1E7]/75">
                These are sample hours. Confirm your actual café schedule
                before publishing.
              </p>
            </div>

            {/* FAQs */}
            <div className="rounded-2xl border border-[#263D32]/10 bg-[#F7F1E7] p-5 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#B97745]">
                  <MessageCircle size={21} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold !text-[#263D32] sm:text-xl">
                  Frequently asked questions
                </h3>
              </div>

              <div className="mt-5 divide-y divide-[#263D32]/10 sm:mt-6">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold !text-[#263D32] marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745]">
                      <span className="!text-inherit">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl font-normal !text-[#B97745] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                      >
                        +
                      </span>
                    </summary>

                    <p className="pt-2 pr-2 text-sm leading-6 !text-[#6F6A60]">
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

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] !text-[#B97745] sm:text-xs sm:tracking-[0.22em]">
            Your daily dose of something beautiful
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight tracking-[-0.035em] !text-[#263D32] sm:text-4xl md:text-5xl">
            Good coffee tastes even better together.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 !text-[#6F6A60] sm:text-base sm:leading-8">
            Take a look at what is brewing and find something that makes your
            day a little better.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
            <ContactLink to="/menu" variant="primary" className="w-full min-[420px]:w-auto">
              Explore our menu
              <ArrowRight size={16} aria-hidden="true" />
            </ContactLink>

            <ContactLink to="/about" variant="outline" className="w-full min-[420px]:w-auto">
              Our story
              <ArrowUpRight size={16} aria-hidden="true" />
            </ContactLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
