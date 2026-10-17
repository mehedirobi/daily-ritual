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
  hidden: { opacity: 0, y: 22 },
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
      "bg-[#263D32] !text-[#F7F1E7] hover:bg-[#B97745] hover:!text-white",
    cream:
      "bg-[#F7F1E7] !text-[#263D32] hover:bg-[#B97745] hover:!text-white",
    outline:
      "border border-[#F7F1E7]/35 !text-[#F7F1E7] hover:border-[#F7F1E7] hover:bg-white/10 hover:!text-white",
    text:
      "bg-transparent !text-[#263D32] hover:!text-[#B97745]",
  };

  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.11em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745] focus-visible:ring-offset-4 ${variants[variant]} ${className}`}
    >
      <span className="!text-inherit">{children}</span>

      {Icon && (
        <Icon
          size={16}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.15 },
    variants: fadeUp,
    transition: {
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <main className="overflow-hidden bg-[#F7F1E7] text-[#29251F]">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            <p className="eyebrow">A little about us</p>

            <h1 className="mt-5 max-w-xl font-display text-5xl leading-[1.06] tracking-[-0.045em] text-[#263D32] sm:text-6xl lg:text-7xl">
              More than coffee.
              <span className="mt-1 block italic text-[#B97745]">
                It&apos;s a feeling.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#29251F]/70 sm:text-base sm:leading-8">
              We created Daily Ritual around a simple idea: the everyday
              deserves something special. A thoughtfully brewed cup, a
              welcoming space, and a moment to slow down.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ActionLink to="/menu" icon={ArrowRight}>
                Explore Our Menu
              </ActionLink>

              <a
                href="#our-story"
                className="group inline-flex min-h-12 items-center justify-center gap-2 px-3 text-xs font-semibold uppercase tracking-[0.1em] !text-[#263D32] transition-colors hover:!text-[#B97745] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B97745]"
              >
                <span>Our Story</span>
                <ArrowDownRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-[#29251F]/10 pt-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#263D32]/10 text-[#263D32]">
                <Sparkles size={19} strokeWidth={1.5} aria-hidden="true" />
              </span>

              <div>
                <p className="font-display text-lg text-[#263D32]">
                  Your daily dose of beautiful.
                </p>
                <p className="mt-1 text-xs text-[#29251F]/55">
                  A little ritual, a better day.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.98 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.1,
              ease: "easeOut",
            }}
            className="relative isolate"
          >
            <div className="relative aspect-[4/4.1] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/4.8]">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
                alt="A barista preparing coffee in a warm café"
                className="h-full w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#29251F]/65 via-transparent to-transparent"
              />

              <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#D8AE85] pl-4 text-[#F7F1E7] sm:bottom-8 sm:left-8">
                <p className="font-display text-2xl leading-tight sm:text-3xl">
                  Slow down.
                  <br />
                  Sip something good.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 border border-[#B97745]/50 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32"
            />

            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 -z-10 h-20 w-20 bg-[#B97745]/10 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28"
            />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section
        id="our-story"
        className="scroll-mt-24 border-y border-[#29251F]/10 bg-[#F0E8DA]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">
          <motion.div {...reveal()}>
            <div className="aspect-[5/4] overflow-hidden bg-[#263D32]/5">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85"
                alt="Coffee and café essentials arranged on a table"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 motion-safe:hover:scale-[1.03]"
              />
            </div>

            <p className="mt-4 text-right text-[10px] font-medium uppercase tracking-[0.2em] text-[#29251F]/45">
              Thoughtfully made, every day
            </p>
          </motion.div>

          <motion.div {...reveal(0.08)}>
            <p className="eyebrow">The heart of Daily Ritual</p>

            <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.12] tracking-[-0.035em] text-[#263D32] sm:text-5xl lg:text-[54px]">
              Great things happen over a good cup.
            </h2>

            <div className="mt-7 max-w-lg space-y-4 text-sm leading-7 text-[#29251F]/70 sm:text-base sm:leading-8">
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

            <div className="mt-8 border-l-2 border-[#B97745] py-1 pl-5">
              <p className="font-display text-2xl italic leading-snug text-[#263D32] sm:text-3xl">
                &ldquo;Make the ordinary feel extraordinary.&rdquo;
              </p>
            </div>

            <ActionLink
              to="/menu"
              variant="text"
              icon={ArrowRight}
              className="mt-6 !px-0"
            >
              Discover Our Menu
            </ActionLink>
          </motion.div>
        </div>
      </section>

      {/* Brand values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <motion.div
          {...reveal()}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">What we believe</p>

          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-[#263D32] sm:text-5xl lg:text-6xl">
            The little things make all the difference.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#29251F]/65 sm:text-base sm:leading-8">
            Good coffee is a starting point. What makes the experience
            memorable is the care, intention, and warmth behind every detail.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {values.map(({ number, icon: Icon, title, description }, index) => (
            <motion.article
              key={number}
              {...reveal(index * 0.08)}
              className="group border border-[#29251F]/10 bg-white/35 p-6 transition-colors duration-300 hover:border-[#B97745]/50 hover:bg-white/70 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#263D32]/10 text-[#263D32] transition-colors duration-300 group-hover:bg-[#263D32] group-hover:text-[#F7F1E7]">
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                </span>

                <span className="font-display text-3xl text-[#B97745]/70">
                  {number}
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl text-[#263D32]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#29251F]/65">
                {description}
              </p>

              <div
                aria-hidden="true"
                className="mt-6 h-px w-10 bg-[#B97745] transition-all duration-300 group-hover:w-16"
              />
            </motion.article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-[#263D32]">
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
          className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D8AE85] sm:text-xs">
            Your next favourite cup awaits
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-[#F7F1E7] sm:text-5xl lg:text-6xl">
            Every day deserves a beautiful ritual.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#F7F1E7]/70 sm:text-base sm:leading-8">
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