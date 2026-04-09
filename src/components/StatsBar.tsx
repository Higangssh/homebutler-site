import { motion } from "framer-motion";

const STATS = [
  { value: "~15MB", label: "Single Binary" },
  { value: "15", label: "Apps Ready" },
  { value: "15", label: "MCP Tools" },
  { value: "0", label: "Dependencies" },
];

export default function StatsBar() {
  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-extrabold gradient-text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-[#52525b] uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
