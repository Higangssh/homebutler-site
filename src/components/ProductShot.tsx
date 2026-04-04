import { motion } from "framer-motion";

export default function ProductShot() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,173,216,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            See everything at a glance.
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            Built-in web dashboard. No extra dependencies. Just{" "}
            <code className="text-[#00ADD8] bg-[#18181b] px-1.5 py-0.5 rounded text-sm">
              homebutler serve
            </code>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="perspective-shot max-w-5xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-[#27272a] glow-primary">
            <img
              src="/images/web-dashboard.png"
              alt="homebutler web dashboard"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
