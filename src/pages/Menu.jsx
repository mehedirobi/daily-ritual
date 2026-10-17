import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Coffee, Search, SlidersHorizontal, X } from "lucide-react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=85";

const formatPrice = (price) => {
  if (typeof price === "number" && Number.isFinite(price)) {
    return `৳${price.toLocaleString("en-BD")}`;
  }

  if (typeof price === "string" && price.trim()) {
    return price.trim();
  }

  return "Price unavailable";
};

const getMenuData = () => {
  const rawItems = window.menuItems;
  const rawCategories = window.menuCategories;

  if (!Array.isArray(rawItems)) {
    throw new Error(
      "Menu data was not found. Make sure public/data.js exposes window.menuItems.",
    );
  }

  const validItems = rawItems.filter(
    (item) =>
      item &&
      typeof item === "object" &&
      item.id !== undefined &&
      item.id !== null &&
      typeof item.name === "string" &&
      item.name.trim() &&
      typeof item.category === "string" &&
      item.category.trim(),
  );

  const suppliedCategories = Array.isArray(rawCategories)
    ? rawCategories.filter(
        (category) =>
          typeof category === "string" &&
          category.trim() &&
          category.trim() !== "All",
      )
    : [];

  const itemCategories = validItems.map((item) => item.category.trim());

  return {
    items: validItems,
    categories: [
      "All",
      ...new Set(
        [...suppliedCategories, ...itemCategories].map((category) =>
          category.trim(),
        ),
      ),
    ],
  };
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs ${
        light ? "!text-[#D7A477]" : "!text-[#B97745]"
      }`}
    >
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

function MenuButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) {
  const variants = {
    primary:
      "bg-[#263D32] !text-[#F7F1E7] hover:bg-[#B97745] hover:!text-white",
    cream: "bg-[#F7F1E7] !text-[#263D32] hover:bg-white hover:!text-[#263D32]",
    outline:
      "border border-[#263D32]/20 bg-transparent !text-[#263D32] hover:border-[#263D32] hover:bg-[#263D32] hover:!text-white",
  };

  const classes = `inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] no-underline transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745] ${
    variants[variant] || variants.primary
  } ${className}`;

  const content = <span className="!text-inherit">{children}</span>;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

function MenuCard({ item, index }) {
  const reduceMotion = useReducedMotion();

  const [imageSrc, setImageSrc] = useState(
    typeof item.image === "string" && item.image.trim()
      ? item.image.trim()
      : FALLBACK_IMAGE,
  );

  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => {
    if (!imageFailed && imageSrc !== FALLBACK_IMAGE) {
      setImageFailed(true);
      setImageSrc(FALLBACK_IMAGE);
    }
  };

  const detailsPath = `/menu/${encodeURIComponent(String(item.id))}`;

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.18),
      }}
      className="group min-w-0"
    >
      <Link
        to={detailsPath}
        aria-label={`View details for ${item.name}`}
        className="block overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
      >
        <div className="relative aspect-[4/3.5] overflow-hidden bg-[#E8DFD0]">
          <img
            src={imageSrc}
            alt={item.name}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
            className={`h-full w-full object-cover ${
              reduceMotion
                ? ""
                : "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            }`}
          />

          {item.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-[#F7F1E7] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] !text-[#263D32]">
              {item.tag}
            </span>
          )}
        </div>
      </Link>

      <div className="flex min-h-[205px] flex-col border-b border-[#29251F]/15 py-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] !text-[#B97745]">
          {item.category}
        </p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-display text-2xl leading-tight !text-[#263D32]">
            {item.name}
          </h3>

          <p className="shrink-0 whitespace-nowrap pt-1 text-lg font-bold tracking-tight tabular-nums !text-[#B97745] sm:text-xl">
            {formatPrice(item.price)}
          </p>
        </div>

        <p className="mt-3 flex-1 text-sm leading-6 !text-[#6F6A60]">
          {item.description || "Thoughtfully prepared for your daily ritual."}
        </p>

        <Link
          to={detailsPath}
          aria-label={`View details for ${item.name}`}
          className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-[#263D32]/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] !text-[#263D32] no-underline transition-colors duration-300 hover:border-[#263D32] hover:bg-[#263D32] hover:!text-[#F7F1E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B97745]"
        >
          <span className="!text-inherit">View Details</span>
        </Link>
      </div>
    </motion.article>
  );
}

function LoadingCards() {
  return (
    <div
      className="mt-8 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Loading menu items"
      aria-busy="true"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-[4/3.5] rounded-sm bg-[#29251F]/10" />
          <div className="mt-5 h-3 w-1/3 bg-[#29251F]/10" />
          <div className="mt-3 h-6 w-2/3 bg-[#29251F]/10" />
          <div className="mt-3 h-4 w-full bg-[#29251F]/10" />
          <div className="mt-2 h-4 w-4/5 bg-[#29251F]/10" />
          <div className="mt-5 h-11 w-36 rounded-full bg-[#29251F]/10" />
        </div>
      ))}
    </div>
  );
}

export default function Menu() {
  const reduceMotion = useReducedMotion();

  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let script = null;

    const applyMenuData = () => {
      const data = getMenuData();

      if (cancelled) return;

      setMenuItems(data.items);
      setMenuCategories(data.categories);
      setLoadError("");
      setLoading(false);
    };

    const handleLoad = () => {
      try {
        applyMenuData();
      } catch (error) {
        if (!cancelled) {
          setLoadError(error.message || "Unable to read menu data.");
          setLoading(false);
        }
      }
    };

    const handleError = () => {
      if (cancelled) return;

      setLoadError(
        "Unable to load /data.js. Check that public/data.js exists and exposes window.menuItems.",
      );
      setLoading(false);
      script?.remove();
    };

    const loadMenu = () => {
      setLoading(true);
      setLoadError("");

      if (
        Array.isArray(window.menuItems) &&
        Array.isArray(window.menuCategories)
      ) {
        handleLoad();
        return;
      }

      script = document.createElement("script");
      script.src = "/data.js";
      script.type = "module";
      script.dataset.dailyRitualMenu = "true";

      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener("error", handleError, { once: true });

      document.head.appendChild(script);
    };

    loadMenu();

    return () => {
      cancelled = true;
      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);
    };
  }, [retryCount]);

  const categories = useMemo(
    () => [...new Set(menuCategories.filter(Boolean))],
    [menuCategories],
  );

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category.trim() === activeCategory;

      const searchableText = [
        item.name,
        item.category,
        item.description,
        item.tag,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [menuItems, activeCategory, searchQuery]);

  const clearFilters = useCallback(() => {
    setActiveCategory("All");
    setSearchQuery("");
  }, []);

  const retryLoading = useCallback(() => {
    setMenuItems([]);
    setMenuCategories(["All"]);
    setActiveCategory("All");
    setSearchQuery("");
    setLoadError("");
    setRetryCount((count) => count + 1);
  }, []);

  return (
    <main className="overflow-hidden bg-[#F7F1E7] !text-[#29251F]">
      <section className="relative isolate bg-[#263D32]">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#29251F]/95 via-[#29251F]/75 to-[#29251F]/35" />

        <div className="container-site relative mx-auto grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel light>Thoughtfully made, just for you</SectionLabel>

            <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-[-0.045em] !text-[#F7F1E7] sm:text-6xl lg:text-7xl">
              A menu worth
              <span className="mt-1 block italic !text-[#D7A477]">
                slowing down for.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 !text-[#F7F1E7]/80 sm:text-base sm:leading-8">
              From familiar favourites to little discoveries, find the perfect
              companion for your next coffee break.
            </p>

            <a
              href="#menu-items"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F7F1E7] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] !text-[#263D32] no-underline transition-colors hover:bg-[#B97745] hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F1E7]"
            >
              <span className="!text-inherit">Browse the menu</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="hidden h-48 w-48 items-center justify-center rounded-full border border-[#F7F1E7]/35 p-3 lg:flex"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#F7F1E7]/10 text-center backdrop-blur-sm">
              <Coffee
                size={28}
                strokeWidth={1.4}
                className="!text-[#D7A477]"
                aria-hidden="true"
              />
              <p className="mt-3 font-display text-2xl !text-[#F7F1E7]">
                Made with care
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] !text-[#F7F1E7]/70">
                Every single day
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-site mx-auto pb-8 pt-12 sm:pb-10 sm:pt-16">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Find your favourite</SectionLabel>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] !text-[#263D32] sm:text-5xl">
              Something for every mood.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 !text-[#6F6A60] sm:text-base">
              Explore our selection and discover what your next daily ritual
              will be.
            </p>
          </div>

          <div
            className="flex items-center gap-2 text-xs !text-[#6F6A60]"
            aria-live="polite"
          >
            <SlidersHorizontal
              size={15}
              className="!text-[#B97745]"
              aria-hidden="true"
            />
            <span>
              {loading
                ? "Loading menu..."
                : `${filteredItems.length} ${
                    filteredItems.length === 1 ? "item" : "items"
                  } to explore`}
            </span>
          </div>
        </div>
      </section>

      <section
        id="menu-items"
        className="container-site mx-auto scroll-mt-24 pb-16 sm:pb-20 lg:pb-28"
      >
        <div className="sticky top-[76px] z-30 -mx-5 border-y border-[#29251F]/10 bg-[#F7F1E7]/95 px-5 py-4 backdrop-blur-lg sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              role="group"
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
                    className={`min-h-10 shrink-0 rounded-full px-4 text-xs font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263D32] ${
                      isActive
                        ? "bg-[#263D32] !text-[#F7F1E7]"
                        : "border border-[#29251F]/15 bg-transparent !text-[#6F6A60] hover:border-[#263D32]/40 hover:!text-[#263D32]"
                    }`}
                  >
                    <span className="!text-inherit">{category}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:max-w-xs">
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 !text-[#81796E]"
                aria-hidden="true"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search the menu..."
                aria-label="Search menu items"
                className="min-h-11 w-full rounded-full border border-[#29251F]/15 bg-white py-3 pl-11 pr-11 text-sm !text-[#29251F] outline-none transition-colors placeholder:!text-[#81796E] focus:border-[#B97745] focus:ring-2 focus:ring-[#B97745]/15"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full !text-[#6F6A60] transition hover:bg-[#F7F1E7] hover:!text-[#263D32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B97745]"
                >
                  <X size={15} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>

        {loading && <LoadingCards />}

        {!loading && loadError && (
          <div
            className="mt-8 rounded-2xl border border-red-900/15 bg-white px-5 py-12 text-center sm:py-16"
            role="alert"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F1E7] !text-[#B97745]">
              <Coffee size={26} strokeWidth={1.5} aria-hidden="true" />
            </span>

            <h3 className="mt-5 font-display text-2xl !text-[#263D32]">
              We could not load the menu.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 !text-[#6F6A60]">
              {loadError}
            </p>

            <MenuButton onClick={retryLoading} className="mt-6">
              Try again
              <ArrowRight size={15} aria-hidden="true" />
            </MenuButton>
          </div>
        )}

        {!loading && !loadError && filteredItems.length > 0 && (
          <motion.div
            layout={!reduceMotion}
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12"
          >
            {filteredItems.map((item, index) => (
              <MenuCard
                key={item.id ?? `${item.category}-${item.name}`}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {!loading && !loadError && filteredItems.length === 0 && (
          <div className="mt-8 rounded-2xl border border-[#29251F]/10 bg-white/50 px-5 py-14 text-center sm:py-20">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#263D32]/10 !text-[#263D32]">
              <Coffee size={25} strokeWidth={1.5} aria-hidden="true" />
            </span>

            <h3 className="mt-5 font-display text-2xl !text-[#263D32]">
              Nothing on the menu matches that.
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 !text-[#6F6A60]">
              Try another search term or choose a different category to discover
              more favourites.
            </p>

            <MenuButton onClick={clearFilters} className="mt-6">
              Clear filters
              <X size={15} aria-hidden="true" />
            </MenuButton>
          </div>
        )}

        <div className="mt-14 flex flex-col gap-3 border-t border-[#29251F]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 !text-[#81796E]">
            Menu descriptions and prices should reflect your current offerings.
            Update your data file whenever items or prices change.
          </p>

          <Link
            to="/contact"
            className="inline-flex min-h-10 w-fit shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] !text-[#263D32] no-underline transition-colors hover:!text-[#B97745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745]"
          >
            <span className="!text-inherit">Have a question?</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-[#263D32]">
        <div className="container-site mx-auto flex flex-col gap-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <SectionLabel light>Your moment starts here</SectionLabel>
            <h2 className="mt-3 font-display text-3xl leading-tight !text-[#F7F1E7] sm:text-4xl">
              Good coffee. Better moments.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 !text-[#F7F1E7]/70">
              Have a question or a suggestion? We are happy to hear from you.
            </p>
          </div>

          <MenuButton href="/contact" variant="cream" className="w-fit">
            Get in touch
            <ArrowRight size={16} aria-hidden="true" />
          </MenuButton>
        </div>
      </section>
    </main>
  );
}
