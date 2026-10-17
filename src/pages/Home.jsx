import { motion } from "motion/react";
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
import { menuItems, formatPrice } from "../data/menu";

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

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <main className="overflow-hidden bg-cream text-espresso">
      {/* Hero */}
      <section className="relative isolate min-h-[600px] bg-forest sm:min-h-[680px] lg:min-h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=90"
          alt="Warm coffee shop interior with a relaxed, inviting atmosphere"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/90 via-espresso/65 to-espresso/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso/45 via-transparent to-espresso/10" />

        <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-20 sm:min-h-[680px] sm:px-8 lg:min-h-[700px] lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="max-w-3xl text-cream"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E0B18B] sm:text-xs"
            >
              <span className="h-px w-8 bg-caramel" />
              Your neighbourhood coffee ritual
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-6 font-display text-5xl leading-[1.04] tracking-[-0.045em] sm:text-7xl lg:text-[88px]"
            >
              Your daily dose
              <br />
              of something
              <span className="block italic text-[#D7A477]">beautiful.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-6 max-w-lg text-sm leading-7 text-cream/75 sm:text-base sm:leading-8"
            >
              Thoughtfully brewed coffee, freshly made favourites, and a
              welcoming space to slow down. Make a little room for yourself.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/menu"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-cream px-6 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors duration-200 hover:bg-caramel hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
              >
                Explore Our Menu
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-cream/50 px-6 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
              >
                Our Story
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-12 flex items-center gap-3 text-xs text-cream/65 sm:mt-16"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/30">
                <ArrowDown size={14} />
              </span>
              A little moment, just for you
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/65 lg:flex">
          <span className="h-px w-10 bg-cream/50" />
          Good coffee. Better moments.
        </div>
      </section>

      {/* Brand introduction strip */}
      <section className="border-b border-espresso/10 bg-[#F0E8DA]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:gap-8 sm:px-8 lg:px-10">
          {[
            "A slower kind of morning",
            "Coffee made with intention",
            "Little moments worth keeping",
          ].map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center gap-3 text-center sm:justify-start ${
                index !== 0 ? "sm:border-l sm:border-espresso/15 sm:pl-6" : ""
              }`}
            >
              <Sparkles
                size={16}
                strokeWidth={1.6}
                className="shrink-0 text-caramel"
              />
              <p className="text-xs font-medium tracking-wide text-espresso/75 sm:text-sm">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured menu */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="eyebrow">A few favourites</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
              Made to be savoured.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-espresso/60 sm:text-base">
              From your first morning sip to an afternoon pick-me-up, find
              something worth slowing down for.
            </p>
          </div>

          <Link
            to="/menu"
            className="group inline-flex min-h-10 w-fit shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors hover:text-caramel"
          >
            View Full Menu
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {featuredItems.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
            {featuredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group min-w-0"
              >
                <Link
                  to="/menu"
                  aria-label={`Explore the menu featuring ${item.name}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                >
                  <div className="relative aspect-[4/4.3] overflow-hidden bg-[#E8DFD0]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />

                    {item.tag && (
                      <span className="absolute left-4 top-4 bg-cream px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-forest">
                        {item.tag}
                      </span>
                    )}

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream text-forest opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-espresso/15 py-5">
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-caramel">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-forest transition-colors group-hover:text-caramel">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-espresso/55">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 pt-5 text-sm font-semibold tabular-nums text-forest">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="mt-10 border border-espresso/10 p-6 text-sm text-espresso/60">
            Our menu is being prepared. Visit the menu page to explore what is
            available.
          </p>
        )}
      </section>

      {/* Our story */}
      <section className="bg-[#F0E8DA]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
                alt="Coffee being prepared with care"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 max-w-[220px] bg-forest p-5 text-cream sm:-right-5 sm:max-w-[250px] sm:p-6">
              <p className="font-display text-2xl italic leading-snug sm:text-3xl">
                "Make the ordinary feel extraordinary."
              </p>
            </div>
            <div className="absolute -left-3 -top-3 -z-0 h-20 w-20 border border-caramel/60 sm:-left-5 sm:-top-5 sm:h-28 sm:w-28" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="eyebrow">The Daily Ritual philosophy</p>

            <h2 className="mt-5 font-display text-4xl leading-[1.1] tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
              Life feels better when you slow down.
            </h2>

            <div className="mt-6 max-w-lg space-y-4 text-sm leading-7 text-espresso/65 sm:text-base sm:leading-8">
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

            <Link
              to="/about"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-caramel pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors hover:text-caramel"
            >
              Discover Our Story
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">The little things</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-forest sm:text-5xl">
            Thoughtful by nature.
          </h2>
          <p className="mt-4 text-sm leading-7 text-espresso/60 sm:text-base">
            A good experience is never just one thing. It is a collection
            of small details, done well.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group border border-espresso/10 bg-white/30 p-7 transition-colors duration-300 hover:border-caramel/50 hover:bg-white/65 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                <Icon size={21} strokeWidth={1.6} />
              </span>

              <h3 className="mt-6 font-display text-2xl text-forest">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-espresso/60">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-espresso/10 bg-[#F0E8DA]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Words over coffee</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-forest sm:text-5xl">
              It's all about how it feels.
            </h2>
            <div
              className="mt-5 flex justify-center gap-1 text-caramel"
              aria-label="Decorative five-star rating"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={15} fill="currentColor" />
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
            {testimonials.map((item, index) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex flex-col border border-espresso/10 bg-cream/75 p-6 sm:p-7"
              >
                <Quote
                  size={25}
                  strokeWidth={1.4}
                  className="text-caramel"
                />
                <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed text-forest">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-7 border-t border-espresso/10 pt-4">
                  <p className="text-sm font-semibold text-espresso/80">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs text-espresso/50">
                    {item.detail}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-espresso/45">
            Illustrative testimonials for this demo design, not verified customer reviews.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-forest">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-forest/85" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D7A477] sm:text-xs">
            Your next favourite cup awaits
          </p>

          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
            Make time for something beautiful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-cream/70 sm:text-base sm:leading-8">
            Explore the menu, find your favourite, and make Daily Ritual
            part of your day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="group inline-flex min-h-12 items-center justify-center gap-3 bg-cream px-6 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors duration-200 hover:bg-caramel hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              Explore Our Menu
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-cream/40 px-6 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}