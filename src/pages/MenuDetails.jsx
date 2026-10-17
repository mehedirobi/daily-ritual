import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Coffee, ShoppingBag } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString("en-BD")}`;

export default function MenuDetails() {
  const { id } = useParams();
  const shouldReduceMotion = useReducedMotion();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadMenu() {
      try {
        setLoading(true);
        setError("");

        if (
          Array.isArray(window.menuItems) &&
          window.menuItems.length > 0
        ) {
          if (!cancelled) {
            setItems(window.menuItems);
            setLoading(false);
          }
          return;
        }

        const scriptId = "daily-ritual-menu-data";
        let script = document.getElementById(scriptId);

        if (!script) {
          script = document.createElement("script");
          script.id = scriptId;
          script.src = "/data.js";
          script.type = "module";
          document.head.appendChild(script);
        }

        await new Promise((resolve, reject) => {
          if (
            Array.isArray(window.menuItems) &&
            window.menuItems.length > 0
          ) {
            resolve();
            return;
          }

          script.addEventListener("load", resolve, { once: true });
          script.addEventListener(
            "error",
            () => reject(new Error("Unable to load menu data.")),
            { once: true }
          );
        });

        if (!Array.isArray(window.menuItems)) {
          throw new Error("Menu data is unavailable.");
        }

        if (!cancelled) {
          setItems(window.menuItems);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Could not load this menu item.");
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

  const item = items.find((menuItem) => String(menuItem.id) === id);

  if (loading) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-[#F7F1E7] px-6">
        <div className="text-center">
          <Coffee size={38} className="mx-auto animate-pulse text-[#B97745]" />
          <p className="mt-4 text-sm text-[#263D32]/70">
            Preparing your menu details...
          </p>
        </div>
      </main>
    );
  }

  if (error || !item) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-[#F7F1E7] px-6 py-16">
        <div className="max-w-md text-center">
          <Coffee size={42} className="mx-auto text-[#B97745]" />

          <h1 className="mt-5 font-serif text-3xl text-[#263D32]">
            Menu item not found
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#29251F]/70">
            {error || "This item may no longer be available on our menu."}
          </p>

          <Link
            to="/menu"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#263D32] px-6 py-3 text-sm font-semibold !text-[#F7F1E7] transition hover:bg-[#B97745]"
          >
            <ArrowLeft size={17} />
            Back to menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <section className="container-site py-8 sm:py-12">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm font-semibold !text-[#263D32] transition hover:!text-[#B97745]"
        >
          <ArrowLeft size={18} />
          Back to menu
        </Link>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="relative overflow-hidden rounded-3xl bg-[#E4D8C7]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="aspect-[4/3] w-full object-cover sm:aspect-square"
            />

            {item.tag && (
              <span className="absolute left-5 top-5 rounded-full bg-[#F7F1E7] px-4 py-2 text-xs font-semibold !text-[#263D32] shadow">
                {item.tag}
              </span>
            )}
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : 0.08,
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] !text-[#B97745]">
              {item.category}
            </span>

            <h1 className="mt-4 font-serif text-4xl leading-tight !text-[#263D32] sm:text-5xl lg:text-6xl">
              {item.name}
            </h1>

            <p className="mt-5 text-base leading-8 !text-[#29251F]/70">
              {item.description}
            </p>

            <div className="mt-8 border-y border-[#263D32]/15 py-6">
              <p className="text-sm !text-[#29251F]/60">Price</p>
              <p className="mt-1 text-3xl font-semibold !text-[#263D32]">
                {formatPrice(item.price)}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#263D32] px-6 py-3 text-sm font-semibold !text-[#F7F1E7] transition hover:bg-[#B97745]"
              >
                <ShoppingBag size={17} />
                Visit our café
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/menu"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#263D32]/25 px-6 py-3 text-sm font-semibold !text-[#263D32] transition hover:bg-white"
              >
                Explore more
              </Link>
            </div>

            <div className="mt-9 rounded-2xl border border-[#263D32]/10 bg-white/60 p-5">
              <div className="flex items-start gap-3">
                <Coffee
                  size={22}
                  className="mt-1 shrink-0 text-[#B97745]"
                />
                <div>
                  <h2 className="font-semibold !text-[#263D32]">
                    Your daily ritual
                  </h2>
                  <p className="mt-2 text-sm leading-7 !text-[#29251F]/70">
                    Thoughtfully prepared and made to bring a little
                    something beautiful to your day.
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