import { useNavigate, Link } from "react-router";
import { ArrowLeft, ArrowRight, Coffee, Home } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

function ActionLink({
  to,
  variant = "primary",
  children,
  icon: Icon,
}) {
  const styles = {
    primary:
      "bg-[#263D32] !text-[#F7F1E7] hover:bg-[#B97745] hover:!text-white",
    secondary:
      "border border-[#263D32]/25 bg-transparent !text-[#263D32] hover:border-[#263D32] hover:bg-[#263D32]/5",
  };

  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold !no-underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745] motion-reduce:transition-none sm:w-auto ${
        styles[variant] || styles.primary
      }`}
    >
      {Icon && (
        <Icon
          size={17}
          strokeWidth={1.8}
          className="shrink-0 !text-inherit"
          aria-hidden="true"
        />
      )}

      <span className="!text-inherit">{children}</span>

      <ArrowRight
        size={16}
        strokeWidth={1.8}
        className="shrink-0 !text-inherit transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function NotFound() {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#F7F1E7] px-5 py-16 text-[#29251F] sm:min-h-[75vh] sm:py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.4,
          ease: "easeOut",
        }}
        className="mx-auto w-full max-w-2xl text-center"
      >
        {/* Brand icon */}
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#263D32] shadow-sm sm:h-[72px] sm:w-[72px]"
          aria-hidden="true"
        >
          <Coffee
            size={30}
            strokeWidth={1.5}
            className="text-[#F7F1E7]"
          />
        </div>

        {/* Error code */}
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.28em] text-[#B97745] sm:text-xs">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mt-4 font-display text-[clamp(2.25rem,7vw,4rem)] leading-[1.12] tracking-[-0.035em] text-[#263D32]">
          Looks like this page
          <span className="mt-1 block italic text-[#B97745]">
            has wandered off.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#6D675F] sm:mt-6 sm:text-base sm:leading-8">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to something good.
        </p>

        {/* Navigation actions */}
        <nav
          aria-label="Suggested pages"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ActionLink to="/" icon={Home}>
            Back to Home
          </ActionLink>

          <ActionLink to="/menu" variant="secondary">
            Explore Our Menu
          </ActionLink>
        </nav>

        {/* Previous page */}
        <button
          type="button"
          onClick={handleGoBack}
          className="mx-auto mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-[#6D675F] transition-colors hover:text-[#263D32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B97745] motion-reduce:transition-none sm:mt-6 sm:text-sm"
        >
          <ArrowLeft
            size={15}
            className="shrink-0"
            aria-hidden="true"
          />
          <span>Go back to the previous page</span>
        </button>

        {/* Brand footer */}
        <div className="mx-auto mt-10 max-w-xs border-t border-[#263D32]/15 pt-6 sm:mt-12">
          <Link
            to="/"
            aria-label="Daily Ritual homepage"
            className="inline-block rounded-sm font-display text-xl !text-[#263D32] no-underline transition-colors hover:!text-[#B97745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B97745]"
          >
            Daily Ritual
          </Link>

          <p className="mt-1 text-xs leading-6 text-[#6D675F]">
            Your daily dose of something beautiful.
          </p>
        </div>
      </motion.div>
    </main>
  );
}