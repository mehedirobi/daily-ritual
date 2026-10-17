
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Heart,
  Leaf,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { menuItems, formatPrice } from "/public/data.js";

const values = [
  {
    icon: Coffee,
    title: "Thoughtfully Brewed",
    description:
      "Every cup is prepared with care, bringing out the character and comfort of good coffee.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description:
      "We believe the little details matter, from the ingredients we choose to the way we serve.",
  },
  {
    icon: Heart,
    title: "Made for Moments",
    description:
      "A quiet morning, a catch-up with friends, or a well-earned break. There is a place for every ritual.",
  },
];

const testimonials = [
  {
    quote:
      "A lovely concept for anyone who believes a good coffee break should feel like a little escape.",
    name: "A coffee enthusiast",
    detail: "Coffee lover",
  },
  {
    quote:
      "The warm atmosphere and thoughtful details make this the kind of place you want to come back to.",
    name: "A daily visitor",
    detail: "Café regular",
  },
  {
    quote:
      "Sometimes all you need is a good cup, a slower moment, and somewhere that feels welcoming.",
    name: "A happy guest",
    detail: "Coffee community",
  },
];

const highlights = [
  "A slower kind of morning",
  "Coffee made with intention",
  "Little moments worth keeping",
];

const heroImage =
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85";

const storyImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85";

const ctaImage =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.22em] ${
        light ? "text-[#D7A477]" : "text-[#B97745]"
      }`}
    >
      {children}
    </p>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.15,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ArrowLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-11 w-fit items-center gap-2 border-b pb-2 text-xs font-semibold uppercase tracking-[0.1em] no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745] focus-visible:ring-offset-4 ${
        light
          ? "border-white/40 !text-[#F7F1E7] hover:border-[#D7A477] hover:!text-[#D7A477]"
          : "border-[#B97745] !text-[#263D32] hover:!text-[#B97745]"
      }`}
    >
      <span className="!text-inherit">{children}</span>
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
      />
    </Link>
  );
}

function PrimaryButton({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] no-underline shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745] focus-visible:ring-offset-4 sm:px-6 ${
        light
          ? "bg-[#F7F1E7] !text-[#263D32] hover:bg-[#B97745] hover:!text-white"
          : "bg-[#263D32] !text-[#F7F1E7] hover:bg-[#B97745] hover:!text-white"
      }`}
    >
      <span className="!text-inherit">{children}</span>
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
      />
    </Link>
  );
}

function SectionHeading({ label, title, description, action }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <SectionLabel>{label}</SectionLabel>

        <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-[-0.04em] !text-[#263D32] sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-xl text-sm leading-7 !text-[#29251F]/70 sm:text-base sm:leading-8">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

function MenuCard({ item, index }) {
  const image = typeof item.image === "string" ? item.image.trim() : "";

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <article className="group h-full min-w-0">
        <Link
          to={`/menu/${encodeURIComponent(String(item.id))}`}
          aria-label={`View details for ${item.name}`}
          className="block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745] focus-visible:ring-offset-4"
        >
          <div className="relative aspect-[4/4.2] overflow-hidden bg-[#E8DFD0]">
            {image ? (
              <img
                src={image}
                alt={item.name || "Daily Ritual menu item"}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
              />
            ) : (
              <div
                className="flex h-full items-center justify-center text-[#263D32]/50"
                aria-hidden="true"
              >
                <Coffee size={42} strokeWidth={1.2} />
              </div>
            )}

            {item.tag && (
              <span className="absolute left-3 top-3 max-w-[calc(100%-24px)] bg-[#F7F1E7] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] !text-[#263D32] sm:left-4 sm:top-4">
                {item.tag}
              </span>
            )}

            <span
              className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F1E7] !text-[#263D32] transition-colors duration-200 group-hover:bg-[#263D32] group-hover:!text-[#F7F1E7] sm:bottom-4 sm:right-4"
              aria-hidden="true"
            >
              <ArrowUpRight size={18} />
            </span>
          </div>

          <div className="flex h-full items-start justify-between gap-3 border-b border-[#29251F]/15 py-4 sm:gap-4 sm:py-5">
            <div className="min-w-0">
              {item.category && (
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] !text-[#B97745]">
                  {item.category}
                </p>
              )}

              <h3 className="mt-2 font-display text-xl leading-snug !text-[#263D32] transition-colors group-hover:!text-[#B97745] sm:text-2xl">
                {item.name}
              </h3>

              {item.description && (
                <p className="mt-2 line-clamp-3 text-sm leading-6 !text-[#29251F]/65">
                  {item.description}
                </p>
              )}
            </div>

            <span className="shrink-0 pt-1 text-sm font-semibold tabular-nums !text-[#263D32]">
              {formatPrice(item.price)}
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  const featuredItems = Array.isArray(menuItems)
    ? menuItems.slice(0, 3)
    : [];

  return (
    <main className="overflow-hidden bg-[#F7F1E7] !text-[#29251F]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#263D32] sm:min-h-[620px] lg:min-h-[680px]">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#211F1B]/90 via-[#211F1B]/65 to-[#211F1B]/25"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#211F1B]/45 via-transparent to-black/10"
        />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.09,
                },
              },
            }}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: reduceMotion ? 0 : 0.45 }}
              className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] !text-[#E2B58F] sm:text-xs sm:tracking-[0.22em]"
            >
              <span className="h-px w-8 shrink-0 bg-[#B97745]" />
              Your neighbourhood coffee ritual
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              className="mt-6 max-w-3xl font-display text-[clamp(2.7rem,8vw,5.8rem)] leading-[1.04] tracking-[-0.05em] !text-[#F7F1E7]"
            >
              Your daily dose
              <br />
              of something
              <span className="block italic !text-[#D7A477]">
                beautiful.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              className="mt-5 max-w-lg text-sm leading-7 !text-[#F7F1E7]/80 sm:mt-6 sm:text-base sm:leading-8"
            >
              Thoughtfully brewed coffee, freshly made favourites, and a
              welcoming space to slow down. Make a little room for yourself.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              className="mt-7 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8"
            >
              <PrimaryButton to="/menu" light>
                Explore Our Menu
              </PrimaryButton>

              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/55 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] !text-[#F7F1E7] no-underline transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F1E7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#263D32]"
              >
                <span className="!text-inherit">Our Story</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              className="mt-10 flex items-center gap-3 text-xs !text-[#F7F1E7]/75 sm:mt-14"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/35">
                <ArrowDown size={15} aria-hidden="true" />
              </span>
              A little moment, just for you
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] !text-[#F7F1E7]/75 lg:flex">
          <span className="h-px w-10 bg-white/55" />
          Good coffee. Better moments.
        </div>
      </section>

      {/* Brand highlights */}
      <section className="border-b border-[#29251F]/10 bg-[#F0E8DA]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 sm:gap-5 sm:px-8 lg:px-10">
          {highlights.map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center gap-3 text-center sm:justify-start ${
                index > 0
                  ? "sm:border-l sm:border-[#29251F]/15 sm:pl-5 lg:pl-7"
                  : ""
              }`}
            >
              <Sparkles
                size={16}
                strokeWidth={1.6}
                className="shrink-0 text-[#B97745]"
                aria-hidden="true"
              />
              <p className="text-xs font-medium tracking-wide !text-[#29251F]/75 sm:text-sm">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured menu */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading
            label="A few favourites"
            title="Made to be savoured."
            description="From your first morning sip to an afternoon pick-me-up, find something worth slowing down for."
            action={<ArrowLink to="/menu">View Full Menu</ArrowLink>}
          />
        </Reveal>

        {featuredItems.length > 0 ? (
          <div className="mt-9 grid gap-7 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {featuredItems.map((item, index) => (
              <MenuCard
                key={item.id ?? item.name ?? index}
                item={item}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-[#29251F]/10 bg-white/30 p-6 sm:p-8">
            <Coffee
              size={28}
              className="text-[#B97745]"
              aria-hidden="true"
            />
            <p className="mt-3 font-display text-xl !text-[#263D32]">
              Something good is brewing.
            </p>
            <p className="mt-2 text-sm leading-6 !text-[#29251F]/65">
              Our featured menu is being prepared. Explore the menu for more.
            </p>
            <div className="mt-5">
              <ArrowLink to="/menu">Explore Menu</ArrowLink>
            </div>
          </div>
        )}
      </section>

      {/* Our story */}
      <section className="bg-[#F0E8DA]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">
          <Reveal className="relative">
            <div className="relative aspect-[5/4] bg-[#E8DFD0]">
              <img
                src={storyImage}
                alt="Coffee being prepared with care"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 right-0 z-10 max-w-[225px] bg-[#263D32] p-4 !text-[#F7F1E7] sm:-right-4 sm:max-w-[260px] sm:p-6">
              <p className="font-display text-2xl italic leading-snug !text-[#F7F1E7] sm:text-3xl">
                Make the ordinary feel extraordinary.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 -z-0 h-20 w-20 border border-[#B97745]/60 sm:-left-5 sm:-top-5 sm:h-28 sm:w-28"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <SectionLabel>The Daily Ritual philosophy</SectionLabel>

            <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-[-0.04em] !text-[#263D32] sm:text-4xl md:text-5xl lg:text-6xl">
              Life feels better when you slow down.
            </h2>

            <div className="mt-6 max-w-lg space-y-4 text-sm leading-7 !text-[#29251F]/70 sm:text-base sm:leading-8">
              <p>
                Days can get busy. We wanted to celebrate the small pauses
                that help us reconnect—with ourselves, our people, and the
                things we love.
              </p>
              <p>
                Daily Ritual brings together thoughtful coffee, comforting
                favourites, and an atmosphere designed to make an everyday
                visit feel a little more special.
              </p>
            </div>

            <div className="mt-8">
              <ArrowLink to="/about">Discover Our Story</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>The little things</SectionLabel>

          <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] !text-[#263D32] sm:text-4xl md:text-5xl">
            Thoughtful by nature.
          </h2>

          <p className="mt-4 text-sm leading-7 !text-[#29251F]/65 sm:text-base sm:leading-8">
            A good experience is never just one thing. It is a collection of
            small details, done well.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.06} className="h-full">
              <article className="group h-full border border-[#29251F]/10 bg-white/30 p-6 transition-colors duration-300 hover:border-[#B97745]/50 hover:bg-white/65 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#263D32]/10 text-[#263D32] transition-colors duration-300 group-hover:bg-[#263D32] group-hover:text-[#F7F1E7]">
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                </span>

                <h3 className="mt-6 font-display text-2xl !text-[#263D32]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 !text-[#29251F]/65">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-[#29251F]/10 bg-[#F0E8DA]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Words over coffee</SectionLabel>

            <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] !text-[#263D32] sm:text-4xl md:text-5xl">
              It’s all about how it feels.
            </h2>

            <div
              className="mt-5 flex justify-center gap-1 text-[#B97745]"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={15}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>
          </Reveal>

          <div className="mt-9 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-5">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06} className="h-full">
                <figure className="flex h-full flex-col border border-[#29251F]/10 bg-[#F7F1E7]/75 p-5 sm:p-7">
                  <Quote
                    size={25}
                    strokeWidth={1.4}
                    className="text-[#B97745]"
                    aria-hidden="true"
                  />

                  <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed !text-[#263D32]">
                    “{item.quote}”
                  </blockquote>

                  <figcaption className="mt-7 border-t border-[#29251F]/10 pt-4">
                    <p className="text-sm font-semibold !text-[#29251F]/80">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs !text-[#29251F]/55">
                      {item.detail}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 !text-[#29251F]/50">
            Illustrative testimonials for this demo design, not verified
            customer reviews.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-[#263D32]">
        <img
          src={ctaImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#263D32]/90"
        />

        <Reveal className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
          <SectionLabel light>Your next favourite cup awaits</SectionLabel>

          <h2 className="mt-5 font-display text-3xl leading-tight tracking-[-0.04em] !text-[#F7F1E7] sm:text-4xl md:text-5xl lg:text-6xl">
            Make time for something beautiful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 !text-[#F7F1E7]/75 sm:text-base sm:leading-8">
            Explore the menu, find your favourite, and make Daily Ritual part
            of your day.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <PrimaryButton to="/menu" light>
              Explore Our Menu
            </PrimaryButton>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] !text-[#F7F1E7] no-underline transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F1E7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#263D32]"
            >
              <span className="!text-inherit">Get in Touch</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
