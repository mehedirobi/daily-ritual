import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Coffee,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

const values = [
  {
    number: "01",
    icon: Coffee,
    title: "Made with Intention",
    description:
      "Every cup starts with carefully selected coffee and a thoughtful brewing process. No shortcuts, just good coffee.",
  },
  {
    number: "02",
    icon: Heart,
    title: "A Place to Belong",
    description:
      "We believe the best cafés are more than places to grab a drink. They are spaces to connect, pause, and feel at home.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Simple, Honest Goodness",
    description:
      "From our ingredients to the way we serve you, we value quality, simplicity, and the little details that matter.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ActionLink({
  to,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}) {
  const variants = {
    primary:
      "bg-[#263D32] !text-[#F7F1E7] hover:bg-[#B97745]",
    cream:
      "bg-[#F7F1E7] !text-[#263D32] hover:bg-[#B97745] hover:!text-white",
    outline:
      "border border-[#F7F1E7]/35 !text-[#F7F1E7] hover:border-[#F7F1E7] hover:bg-white/10",
    text:
      "bg-transparent !text-[#263D32] hover:!text-[#B97745]",
  };

  return (
    <Link
      to={to}
      className={[
        "group inline-flex min-h-12 items-center justify-center gap-3",
        "px-5 py-3 text-center text-xs font-semibold uppercase",
        "tracking-[0.1em] transition-[background-color,color,border-color]",
        "duration-200 ease-out motion-reduce:transition-none",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        "focus-visible:outline-[#B97745]",
        variants[variant] ?? variants.primary,
        className,
      ].join(" ")}
    >
      <span className="!text-inherit">{children}</span>

      {Icon && (
        <Icon
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </Link>
  );
}

function SectionEyebrow({ children, light = false }) {
  return (
    <p
      className={[
        "text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
        light ? "text-[#D8AE85]" : "eyebrow",
      ].join(" ")}
    >
      {children}
    </p>
  );
}

function AboutImage({
  src,
  alt,
  aspectClass,
  priority = false,
  className = "",
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden bg-[#263D32]/5",
        aspectClass,
        className,
      ].join(" ")}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.12 },
    variants: fadeUp,
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  const heroReveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.55,
      ease: "easeOut",
    },
  };

  return (
    <main className="overflow-clip bg-[#F7F1E7] text-[#29251F]">
      {/* Hero */}
      <section aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 min-[380px]:px-5 sm:gap-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
          <motion.div {...heroReveal} className="relative z-10 min-w-0">
            <SectionEyebrow>A little about us</SectionEyebrow>

            <h1
              id="about-heading"
              className="mt-5 max-w-xl font-display text-[clamp(2.7rem,8vw,4rem)] leading-[1.06] tracking-[-0.045em] text-[#263D32] sm:text-6xl lg:text-7xl"
            >
              More than coffee.
              <span className="mt-1 block italic text-[#B97745]">
                It&apos;s a feeling.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#29251F]/75 sm:text-base sm:leading-8">
              We created Daily Ritual around a simple idea: the everyday
              deserves something special. A thoughtfully brewed cup, a
              welcoming space, and a moment to slow down.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center">
              <ActionLink
                to="/menu"
                icon={ArrowRight}
                className="w-full min-[420px]:w-auto"
              >
                Explore Our Menu
              </ActionLink>

              <a
                href="#our-story"
                className="group inline-flex min-h-12 items-center justify-center gap-2 px-4 text-xs font-semibold uppercase tracking-[0.1em] !text-[#263D32] transition-colors duration-200 hover:!text-[#B97745] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B97745] motion-reduce:transition-none"
              >
                <span>Our Story</span>

                <ArrowDownRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transition-none"
                />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 border-t border-[#29251F]/10 pt-6 sm:mt-10 sm:gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#263D32]/10 text-[#263D32] sm:h-11 sm:w-11">
                <Sparkles
                  size={19}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>

              <div className="min-w-0">
                <p className="font-display text-lg leading-snug text-[#263D32] sm:text-xl">
                  Your daily dose of beautiful.
                </p>

                <p className="mt-1 text-xs leading-5 text-[#29251F]/60">
                  A little ritual, a better day.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.08,
              ease: "easeOut",
            }}
            className="relative isolate min-w-0"
          >
            <AboutImage
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
              alt="A barista preparing coffee in a warm café"
              aspectClass="aspect-[4/4.1] sm:aspect-[5/4] lg:aspect-[4/4.8]"
              priority
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#29251F]/65 via-transparent to-transparent"
            />

            <div className="pointer-events-none absolute bottom-5 left-5 right-4 border-l-2 border-[#D8AE85] pl-4 text-[#F7F1E7] sm:bottom-8 sm:left-8 sm:right-8 sm:pl-5">
              <p className="font-display text-2xl leading-tight sm:text-3xl lg:text-4xl">
                Slow down.
                <br />
                Sip something good.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -left-3 -z-10 h-20 w-20 border border-[#B97745]/50 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-2 -z-10 h-16 w-16 bg-[#B97745]/10 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28"
            />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section
        id="our-story"
        aria-labelledby="story-heading"
        className="scroll-mt-24 border-y border-[#29251F]/10 bg-[#F0E8DA]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 min-[380px]:px-5 sm:gap-12 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">
          <motion.div {...reveal()} className="min-w-0">
            <AboutImage
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85"
              alt="Coffee and café essentials arranged on a table"
              aspectClass="aspect-[5/4]"
            />

            <p className="mt-4 text-right text-[9px] font-medium uppercase tracking-[0.16em] text-[#29251F]/50 sm:text-[10px] sm:tracking-[0.2em]">
              Thoughtfully made, every day
            </p>
          </motion.div>

          <motion.div {...reveal(0.08)} className="min-w-0">
            <SectionEyebrow>The heart of Daily Ritual</SectionEyebrow>

            <h2
              id="story-heading"
              className="mt-5 max-w-lg font-display text-4xl leading-[1.12] tracking-[-0.035em] text-[#263D32] sm:text-5xl lg:text-[54px]"
            >
              Great things happen over a good cup.
            </h2>

            <div className="mt-6 max-w-lg space-y-4 text-sm leading-7 text-[#29251F]/75 sm:mt-7 sm:text-base sm:leading-8">
              <p>
                Life moves quickly. Between busy mornings, long afternoons,
                and endless to-do lists, we sometimes forget to enjoy the
                little things.
              </p>

              <p>
                Daily Ritual is inspired by the belief that a simple coffee
                break can change the rhythm of your day. It can be a quiet
                moment alone, an unexpected conversation, or time spent with
                someone who matters.
              </p>

              <p>
                That is why we care about every detail—from the first aroma
                of freshly ground beans to the atmosphere that makes you
                want to stay a little longer.
              </p>
            </div>

            <blockquote className="mt-7 border-l-2 border-[#B97745] py-1 pl-4 sm:pl-5">
              <p className="font-display text-2xl italic leading-snug text-[#263D32] sm:text-3xl">
                &ldquo;Make the ordinary feel extraordinary.&rdquo;
              </p>
            </blockquote>

            <ActionLink
              to="/menu"
              variant="text"
              icon={ArrowRight}
              className="mt-5 !px-0"
            >
              Discover Our Menu
            </ActionLink>
          </motion.div>
        </div>
      </section>

      {/* Brand values */}
      <section
        aria-labelledby="values-heading"
        className="mx-auto max-w-7xl px-4 py-16 min-[380px]:px-5 sm:px-8 sm:py-20 lg:px-10 lg:py-28"
      >
        <motion.div
          {...reveal()}
          className="mx-auto max-w-2xl text-center"
        >
          <SectionEyebrow>What we believe</SectionEyebrow>

          <h2
            id="values-heading"
            className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-[#263D32] sm:text-5xl lg:text-6xl"
          >
            The little things make all the difference.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#29251F]/70 sm:text-base sm:leading-8">
            Good coffee is a starting point. What makes the experience
            memorable is the care, intention, and warmth behind every detail.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3">
          {values.map(({ number, icon: Icon, title, description }, index) => (
            <motion.article
              key={number}
              {...reveal(index * 0.07)}
              className={[
                "group min-w-0 border border-[#29251F]/10",
                "bg-white/35 p-5 sm:p-7 lg:p-8",
                "transition-[border-color,background-color]",
                "duration-300 ease-out",
                "hover:border-[#B97745]/50 hover:bg-white/65",
                "motion-reduce:transition-none",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#263D32]/10 text-[#263D32] transition-colors duration-300 group-hover:bg-[#263D32] group-hover:text-[#F7F1E7] motion-reduce:transition-none sm:h-12 sm:w-12">
                  <Icon
                    size={21}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>

                <span className="font-display text-3xl text-[#B97745]/75">
                  {number}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl leading-snug text-[#263D32] sm:mt-7 sm:text-2xl">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#29251F]/70">
                {description}
              </p>

              <div
                aria-hidden="true"
                className="mt-6 h-px w-10 bg-[#B97745] transition-[width] duration-300 group-hover:w-16 motion-reduce:transition-none"
              />
            </motion.article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="about-cta-heading"
        className="relative isolate overflow-hidden bg-[#263D32]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-[#F7F1E7]/10 sm:h-96 sm:w-96"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 -z-10 h-52 w-52 rounded-full border border-[#F7F1E7]/10 sm:h-72 sm:w-72"
        />

        <motion.div
          {...reveal()}
          className="relative mx-auto max-w-4xl px-4 py-16 text-center min-[380px]:px-5 sm:px-8 sm:py-20 lg:py-24"
        >
          <SectionEyebrow light>
            Your next favourite cup awaits
          </SectionEyebrow>

          <h2
            id="about-cta-heading"
            className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-[#F7F1E7] sm:text-5xl lg:text-6xl"
          >
            Every day deserves a beautiful ritual.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#F7F1E7]/75 sm:text-base sm:leading-8">
            Find your favourite, discover something new, and make a little
            time for yourself.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ActionLink
              to="/menu"
              variant="cream"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Explore Our Menu
            </ActionLink>

            <ActionLink
              to="/contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Get in Touch
            </ActionLink>
          </div>
        </motion.div>
      </section>
    </main>
  );
}