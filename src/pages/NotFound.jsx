import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Coffee, Home } from "lucide-react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-[#F7F1E7] px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto w-full max-w-2xl text-center"
      >
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#263D32] text-[#F7F1E7]">
          <Coffee size={28} strokeWidth={1.5} />
        </div>

        {/* Error code */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#B97745]">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[#29251F] sm:text-5xl md:text-6xl">
          Looks like this page
          <span className="mt-1 block italic text-[#B97745]">
            has wandered off.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#6D675F] sm:text-base">
          The page you are looking for doesn't exist or may have been moved.
          Let's get you back to something good.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#263D32] px-7 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#344F40] sm:w-auto"
          >
            <Home size={16} />
            Back to Home
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/menu"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#263D32]/20 px-7 py-3 text-sm font-medium text-[#263D32] transition-colors duration-200 hover:border-[#263D32] hover:bg-[#263D32]/5 sm:w-auto"
          >
            Explore Our Menu
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Back link */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mx-auto mt-8 inline-flex items-center gap-2 text-xs text-[#6D675F] transition-colors hover:text-[#263D32]"
        >
          <ArrowLeft size={14} />
          Go back to the previous page
        </button>

        {/* Brand footer */}
        <div className="mx-auto mt-12 max-w-xs border-t border-[#263D32]/10 pt-6">
          <p className="font-serif text-lg text-[#263D32]">Daily Ritual</p>
          <p className="mt-1 text-xs tracking-wide text-[#6D675F]">
            Your daily dose of something beautiful.
          </p>
        </div>
      </motion.div>
    </section>
  );
}