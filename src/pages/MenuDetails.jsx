import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Coffee,
  ShoppingBag,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85";

const formatPrice = (price) => {
  if (typeof price === "number" && Number.isFinite(price)) {
    return `৳${price.toLocaleString("en-BD")}`;
  }

  if (typeof price === "string" && price.trim()) {
    return price.trim();
  }

  return "Price unavailable";
};

const getMenuItems = () => {
  if (!Array.isArray(window.menuItems)) {
    throw new Error("Menu data is unavailable.");
  }

  return window.menuItems.filter(
    (item) =>
      item &&
      typeof item === "object" &&
      item.id !== undefined &&
      item.id !== null &&
      typeof item.name === "string" &&
      item.name.trim(),
  );
};

function BackLink({ children = "Back to menu" }) {
  return (
    <Link
      to="/menu"
      className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold !text-[#263D32] no-underline transition-colors hover:!text-[#B97745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745]"
    >
      <ArrowLeft size={18} aria-hidden="true" />
      <span className="!text-inherit">{children}</span>
    </Link>
  );
}

function LoadingState() {
  return (
    <main
      className="grid min-h-[60vh] place-items-center bg-[#F7F1E7] px-5 py-16"
      role="status"
      aria-live="polite"
    >
      <div className="text-center">
        <Coffee
          size={38}
          strokeWidth={1.5}
          className="mx-auto animate-pulse text-[#B97745] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <p className="mt-4 text-sm text-[#263D32]/70">
          Preparing your menu details...
        </p>
      </div>
    </main>
  );
}

function ErrorState({ message, onRetry }) {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-[#F7F1E7] px-5 py-16">
      <div className="w-full max-w-md text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#263D32]/10 text-[#B97745]">
          <Coffee size={32} strokeWidth={1.5} aria-hidden="true" />
        </span>

        <h1 className="mt-5 font-display text-3xl text-[#263D32] sm:text-4xl">
          Menu item not found
        </h1>

        <p className="mt-3 text-sm leading-7 text-[#29251F]/70">
          {message ||
            "This item may no longer be available on our menu."}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#263D32]/25 px-5 py-3 text-sm font-semibold text-[#263D32] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745]"
            >
              Try again
            </button>
          )}

          <Link
            to="/menu"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#263D32] px-6 py-3 text-sm font-semibold !text-[#F7F1E7] no-underline transition-colors hover:bg-[#B97745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745]"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            <span className="!text-inherit">Back to menu</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

function MenuImage({ item, reduceMotion }) {
  const [imageSrc, setImageSrc] = useState(() => {
    return typeof item.image === "string" && item.image.trim()
      ? item.image.trim()
      : FALLBACK_IMAGE;
  });

  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = useCallback(() => {
    if (!imageFailed && imageSrc !== FALLBACK_IMAGE) {
      setImageFailed(true);
      setImageSrc(FALLBACK_IMAGE);
    }
  }, [imageFailed, imageSrc]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#E4D8C7]">
      <img
        src={imageSrc}
        alt={item.name}
        loading="eager"
        decoding="async"
        onError={handleImageError}
        className={`aspect-[4/3] w-full object-cover sm:aspect-square lg:aspect-[5/5.2] ${
          reduceMotion
            ? ""
            : "transition-transform duration-500 hover:scale-[1.02]"
        }`}
      />

      {item.tag && (
        <span className="absolute left-3 top-3 max-w-[85%] truncate rounded-full bg-[#F7F1E7] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#263D32] shadow-sm sm:left-5 sm:top-5 sm:text-xs">
          {item.tag}
        </span>
      )}
    </div>
  );
}

export default function MenuDetails() {
  const { id } = useParams();
  const reduceMotion = useReducedMotion();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let script = null;

    const finishLoading = () => {
      if (cancelled) return;

      try {
        const menuItems = getMenuItems();

        setItems(menuItems);
        setError("");
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Could not load this menu item.",
        );
      } finally {
        setLoading(false);
      }
    };

    const handleLoad = () => {
      finishLoading();
    };

    const handleError = () => {
      if (cancelled) return;

      setError(
        "Unable to load menu data. Check that public/data.js exists and exposes window.menuItems.",
      );
      setLoading(false);
    };

    setLoading(true);
    setError("");

    if (Array.isArray(window.menuItems)) {
      finishLoading();
    } else {
      script = document.querySelector(
        'script[data-daily-ritual-menu-details="true"]',
      );

      if (script) {
        script.addEventListener("load", handleLoad, { once: true });
        script.addEventListener("error", handleError, { once: true });

        // Handle data that became available before listeners were attached.
        if (Array.isArray(window.menuItems)) {
          finishLoading();
        }
      } else {
        script = document.createElement("script");
        script.src = "/data.js";
        script.type = "module";
        script.dataset.dailyRitualMenuDetails = "true";

        script.addEventListener("load", handleLoad, { once: true });
        script.addEventListener("error", handleError, { once: true });

        document.head.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);
    };
  }, [retryCount]);

  const retryLoading = useCallback(() => {
    const existingScript = document.querySelector(
      'script[data-daily-ritual-menu-details="true"]',
    );

    existingScript?.remove();

    delete window.menuItems;
    delete window.menuCategories;

    setItems([]);
    setError("");
    setRetryCount((count) => count + 1);
  }, []);

  const item = items.find(
    (menuItem) => String(menuItem.id) === String(id),
  );

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={retryLoading} />;
  }

  if (!item) {
    return (
      <ErrorState
        message="This item may no longer be available on our menu. Browse the full menu to discover something else."
      />
    );
  }

  const description =
    typeof item.description === "string" && item.description.trim()
      ? item.description.trim()
      : "Thoughtfully prepared to bring a little something beautiful to your day.";

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F1E7] text-[#29251F]">
      <section className="container-site mx-auto py-7 sm:py-10 lg:py-12">
        <BackLink />

        <div className="mt-7 grid min-w-0 items-start gap-8 sm:mt-9 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
            className="min-w-0"
          >
            <MenuImage item={item} reduceMotion={reduceMotion} />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: reduceMotion ? 0 : 0.06,
            }}
            className="min-w-0"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B97745] sm:text-xs">
              {item.category || "Our menu"}
            </p>

            <h1 className="mt-3 break-words font-display text-[clamp(2.3rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.04em] text-[#263D32]">
              {item.name}
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#29251F]/75 sm:text-base sm:leading-8">
              {description}
            </p>

            <div className="mt-7 border-y border-[#263D32]/15 py-5 sm:mt-8 sm:py-6">
              <p className="text-sm text-[#29251F]/60">Price</p>

              <p className="mt-1 text-3xl font-semibold tracking-tight text-[#263D32] sm:text-4xl">
                {formatPrice(item.price)}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#263D32] px-5 py-3 text-sm font-semibold !text-[#F7F1E7] no-underline transition-colors hover:bg-[#B97745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745] sm:px-6"
              >
                <ShoppingBag size={17} aria-hidden="true" />
                <span className="!text-inherit">Visit our café</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/menu"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#263D32]/25 px-5 py-3 text-sm font-semibold !text-[#263D32] no-underline transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745] sm:px-6"
              >
                <span className="!text-inherit">Explore more</span>
              </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-[#263D32]/10 bg-white/60 p-4 sm:mt-9 sm:p-5">
              <div className="flex items-start gap-3">
                <Coffee
                  size={22}
                  className="mt-1 shrink-0 text-[#B97745]"
                  aria-hidden="true"
                />

                <div>
                  <h2 className="font-semibold text-[#263D32]">
                    Your daily ritual
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#29251F]/70">
                    Thoughtfully prepared and made to bring a little something
                    beautiful to your day.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}