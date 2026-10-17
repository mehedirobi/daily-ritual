import { motion } from "motion/react";
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

export default function About() {
  return (
    <main className="overflow-hidden bg-cream text-espresso">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="eyebrow">A little about us</p>

            <h1 className="mt-5 max-w-xl font-display text-5xl leading-[1.06] tracking-[-0.045em] text-forest sm:text-6xl lg:text-7xl">
              More than coffee.
              <span className="mt-1 block italic text-caramel">
                It's a feeling.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-espresso/65 sm:text-base sm:leading-8">
              We created Daily Ritual around a simple idea: the everyday
              deserves something special. A thoughtfully brewed cup, a
              welcoming space, and a moment to slow down.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/menu"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-forest px-6 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition-colors duration-200 hover:bg-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
              >
                Explore Our Menu
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-story"
                className="inline-flex min-h-12 items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.1em] text-forest transition-colors hover:text-caramel"
              >
                Our Story
                <ArrowDownRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-espresso/10 pt-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Sparkles size={19} strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-display text-lg text-forest">
                  Your daily dose of beautiful.
                </p>
                <p className="mt-1 text-xs text-espresso/55">
                  A little ritual, a better day.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/4.3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
                alt="A barista carefully preparing fresh coffee in a café"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 border-l-2 border-caramel pl-4 text-cream sm:bottom-8 sm:left-8">
                <p className="font-display text-2xl sm:text-3xl">
                  Slow down.
                  <br />
                  Sip something good.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 -z-0 h-24 w-24 border border-caramel/50 sm:-left-5 sm:h-32 sm:w-32" />
            <div className="absolute -right-3 -top-3 -z-0 h-20 w-20 bg-caramel/10 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
          </motion.div>
        </div>
      </section>

      {/* Brand introduction */}
      <section
        id="our-story"
        className="scroll-mt-24 border-y border-espresso/10 bg-[#F0E8DA]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85"
                alt="Freshly prepared coffee and café essentials on a table"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <p className="mt-4 text-right text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/45">
              Thoughtfully made, every day
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="eyebrow">The heart of Daily Ritual</p>

            <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.12] tracking-[-0.035em] text-forest sm:text-5xl lg:text-[54px]">
              Great things happen over a good cup.
            </h2>

            <div className="mt-7 max-w-lg space-y-4 text-sm leading-7 text-espresso/70 sm:text-base sm:leading-8">
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

            <div className="mt-8 border-l-2 border-caramel py-1 pl-5">
              <p className="font-display text-2xl italic leading-snug text-forest sm:text-3xl">
                "Make the ordinary feel extraordinary."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">What we believe</p>

          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
            The little things make all the difference.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-espresso/60 sm:text-base sm:leading-8">
            Good coffee is a starting point. What makes the experience
            memorable is the care, intention, and warmth behind every detail.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {values.map(({ number, icon: Icon, title, description }, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-espresso/10 bg-white/35 p-6 transition-colors duration-300 hover:border-caramel/50 hover:bg-white/65 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                  <Icon size={21} strokeWidth={1.6} />
                </span>

                <span className="font-display text-3xl text-caramel/65">
                  {number}
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl text-forest">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-espresso/60">
                {description}
              </p>

              <div className="mt-6 h-px w-10 bg-caramel transition-all duration-300 group-hover:w-16" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-cream/10 sm:h-96 sm:w-96" />
        <div className="absolute -right-8 -top-12 h-52 w-52 rounded-full border border-cream/10 sm:h-72 sm:w-72" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-caramel sm:text-xs">
            Your next favourite cup awaits
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
            Every day deserves a beautiful ritual.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
            Find your favourite, discover something new, and make a little
            time for yourself.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="group inline-flex min-h-12 items-center justify-center gap-3 bg-cream px-6 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors duration-200 hover:bg-caramel hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              Find Your Favourite
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-cream/30 px-6 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}