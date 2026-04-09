import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const BEFORE = [
  { icon: "💻", text: "SSH into each server manually" },
  { icon: "📊", text: "Open Grafana, Portainer, Netdata..." },
  { icon: "📝", text: "Write cron jobs for health checks" },
  { icon: "🔧", text: "docker compose up -d from memory" },
  { icon: "🙏", text: "Hope your backups actually work" },
  { icon: "📱", text: "Get paged. Open laptop. SSH again." },
];

const AFTER = [
  { icon: "💬", text: '"Status of all servers"' },
  { icon: "🛡️", text: '"Run backup drill"' },
  { icon: "📦", text: '"Install uptime-kuma"' },
  { icon: "🔄", text: "Self-healing fixes it before you notice" },
  { icon: "✅", text: "Backups verified automatically" },
  { icon: "😴", text: "You sleep. Homebutler doesn't." },
];

export default function Comparison() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            Why Homebutler?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Stop managing. Start talking.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Other tools give you dashboards. Homebutler gives you a conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div {...fadeUp}>
            <div className="rounded-xl border border-[#ef4444]/20 bg-[#ef4444]/5 p-6">
              <p className="text-sm font-bold text-[#ef4444] uppercase tracking-wider mb-5">
                The old way
              </p>
              <div className="space-y-3">
                {BEFORE.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <span className="text-sm text-[#a1a1aa] leading-relaxed">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-xl border border-[#10b981]/20 bg-[#10b981]/5 p-6">
              <p className="text-sm font-bold text-[#10b981] uppercase tracking-wider mb-5">
                With Homebutler
              </p>
              <div className="space-y-3">
                {AFTER.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <span className="text-sm text-[#e5e7eb] leading-relaxed font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
