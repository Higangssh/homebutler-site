import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,173,216,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            Ready to take control?
          </h2>
          <p className="text-[#a1a1aa] text-lg mb-10 max-w-xl mx-auto">
            One binary. Your entire homelab. Start in 30 seconds.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/Higangssh/homebutler"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00ADD8] hover:bg-[#00ADD8]/90 text-[#09090b] font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,173,216,0.3)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Star on GitHub
            </a>
            <a
              href="#install"
              className="inline-flex items-center gap-2 border border-[#27272a] hover:border-[#3f3f46] text-[#e5e7eb] font-medium px-6 py-3 rounded-lg transition-all hover:bg-[#18181b]"
            >
              Get Started
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
