import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

const formatPrice = (price) => {
  if (typeof price === "number") {
    return `৳${price.toLocaleString("en-BD")}`;
  }

  if (typeof price === "string" && price.trim()) {
    return price;
  }

  return "Price unavailable";
};

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadMenu() {
      try {
        setLoading(true);
        setLoadError("");

        const response = await fetch("/data.js", {
          cache: "no-cache",
        });

        if (!response.ok) {
          throw new Error(
            `Unable to load menu data (${response.status}).`
          );
        }

        const contentType = response.headers.get("content-type") || "";

        if (contentType.includes("text/html")) {
          throw new Error(
            "The server returned HTML instead of data. Check public/data.js."
          );
        }

        const source = await response.text();

        // Support JavaScript files that expose data through window.
        // This does not execute the fetched JavaScript.
        const script = document.createElement("script");
        script.textContent = source;

        document.head.appendChild(script);
        script.remove();

        const rawItems = window.menuItems;
        const rawCategories = window.menuCategories;

        if (!Array.isArray(rawItems)) {
          throw new Error(
            "Menu data was not found. public/data.js must define window.menuItems as an array."
          );
        }

        const validItems = rawItems.filter(
          (item) =>
            item &&
            typeof item === "object" &&
            item.name &&
            item.category
        );

        const categoriesFromItems = validItems.map(
          (item) => item.category
        );

        const allCategories = [
          ...new Set([
            ...(Array.isArray(rawCategories) ? rawCategories : []),
            ...categoriesFromItems,
          ]),
        ].filter(
          (category) =>
            typeof category === "string" &&
            category.trim() &&
            category !== "All"
        );

        if (!cancelled) {
          setMenuItems(validItems);
          setMenuCategories(["All", ...allCategories]);
        }
      } catch (error) {
        console.error("Menu loading error:", error);

        if (!cancelled) {
          setLoadError(
            error.message || "Something went wrong while loading the menu."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMenu();

    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(
    () => [...new Set(menuCategories.filter(Boolean))],
    [menuCategories]
  );

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchesSearch =
        !query ||
        [item.name, item.category, item.description, item.tag]
          .filter(Boolean)
          .some((value) =>
            String(value).toLowerCase().includes(query)
          );

      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchQuery]);

  function clearFilters() {
    setActiveCategory("All");
    setSearchQuery("");
  }

  return (
    <main className="overflow-hidden bg-cream text-espresso">
      {/* Menu hero */}
      <section className="relative isolate bg-forest">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/35" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-cream"
          >
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E0B18B] sm:text-xs">
              <span className="h-px w-8 bg-caramel" />
              Thoughtfully made, just for you
            </p>

            <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              A menu worth
              <span className="block italic text-[#D7A477]">
                slowing down for.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-cream/75 sm:text-base sm:leading-8">
              From familiar favourites to little discoveries, find the
              perfect companion for your next coffee break.
            </p>

            <a
              href="#menu-items"
              className="group mt-7 inline-flex min-h-12 items-center gap-3 bg-cream px-6 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors hover:bg-caramel hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              Browse the Menu
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hidden h-44 w-44 items-center justify-center rounded-full border border-cream/35 p-3 lg:flex"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-cream/10 text-center backdrop-blur-sm">
              <Coffee
                size={28}
                strokeWidth={1.4}
                className="text-[#D7A477]"
              />
              <p className="mt-3 font-display text-2xl text-cream">
                Made with care
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/65">
                Every single day
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu introduction */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Find your favourite</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-forest sm:text-5xl">
              Something for every mood.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-espresso/60">
              Explore our selection and discover what your next daily ritual
              will be.
            </p>
          </div>

          <p className="flex items-center gap-2 text-xs text-espresso/55">
            <SlidersHorizontal size={15} className="text-caramel" />
            <span>
              {loading ? "Loading menu..." : `${filteredItems.length} ${filteredItems.length === 1 ? "item" : "items"} to explore`}
            </span>
          </p>
        </div>
      </section>

      {/* Search and category filters */}
      <section
        id="menu-items"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-28"
      >
        <div className="sticky top-[76px] z-30 -mx-5 border-y border-espresso/10 bg-cream/95 px-5 py-4 backdrop-blur-lg sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              aria-label="Filter menu by category"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`min-h-10 shrink-0 px-4 text-xs font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                      isActive
                        ? "bg-forest text-cream"
                        : "border border-espresso/15 bg-transparent text-espresso/70 hover:border-forest/40 hover:text-forest"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:max-w-xs">
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/45"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search the menu..."
                aria-label="Search menu items"
                className="min-h-11 w-full border border-espresso/15 bg-white/50 py-3 pl-11 pr-10 text-sm text-espresso outline-none transition-colors placeholder:text-espresso/40 focus:border-forest"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-espresso/55 hover:text-forest"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Loading menu items"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="aspect-[4/3.7] bg-espresso/10" />
                <div className="mt-5 h-3 w-1/3 bg-espresso/10" />
                <div className="mt-3 h-6 w-2/3 bg-espresso/10" />
                <div className="mt-3 h-4 w-full bg-espresso/10" />
              </div>
            ))}
          </div>
        )}

        {/* Data loading error */}
        {!loading && loadError && (
          <div
            className="mt-8 border border-red-900/15 bg-white/50 px-5 py-12 text-center"
            role="alert"
          >
            <Coffee
              size={28}
              className="mx-auto text-caramel"
              strokeWidth={1.5}
            />
            <h3 className="mt-4 font-display text-2xl text-forest">
              We could not load the menu.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-espresso/65">
              {loadError}
            </p>
            <p className="mt-3 text-xs text-espresso/50">
              Check that your data file is available at /data.js and exposes
              the expected menu data.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 min-h-11 bg-forest px-5 text-xs font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:bg-caramel"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Menu cards */}
        {!loading && !loadError && filteredItems.length > 0 && (
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12"
          >
            {filteredItems.map((item, index) => (
              <motion.article
                layout
                key={item.id ?? `${item.category}-${item.name}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.04, 0.2),
                }}
                className="group min-w-0"
              >
                <Link
                  to="/contact"
                  aria-label={`Ask us about ${item.name}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                >
                  <div className="relative aspect-[4/3.7] overflow-hidden bg-[#E8DFD0]">
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"}
                      alt={item.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80";
                      }}
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
                </Link>

                <div className="flex items-start justify-between gap-4 border-b border-espresso/15 py-5">
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-caramel">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-forest">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-espresso/60">
                      {item.description || "Thoughtfully prepared for your daily ritual."}
                    </p>
                  </div>

                  <p className="shrink-0 pt-5 text-sm font-semibold tabular-nums text-forest">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && !loadError && filteredItems.length === 0 && (
          <div className="mt-8 border border-espresso/10 bg-white/35 px-5 py-14 text-center sm:py-20">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
              <Coffee size={25} strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 font-display text-2xl text-forest">
              Nothing on the menu matches that.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-espresso/60">
              Try another search term or choose a different category to
              discover more favourites.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 bg-forest px-5 text-xs font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:bg-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
            >
              Clear Filters
              <X size={15} />
            </button>
          </div>
        )}

        {/* Menu note */}
        <div className="mt-14 flex flex-col gap-3 border-t border-espresso/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-espresso/50">
            Menu descriptions and prices are sample content for this
            website. Availability and actual prices may vary.
          </p>
          <Link
            to="/contact"
            className="inline-flex min-h-10 w-fit shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-forest transition-colors hover:text-caramel"
          >
            Have a question?
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-forest">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D7A477]">
              Your moment starts here
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-cream sm:text-4xl">
              Good coffee. Better moments.
            </h2>
            <p className="mt-3 text-sm leading-6 text-cream/60">
              Have a question or a suggestion? We are happy to hear from you.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 bg-cream px-6 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition-colors hover:bg-caramel hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            Get in Touch
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
