import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIMELINE = [
  {
    time: "03:14:22",
    icon: "🔴",
    title: "disk-full triggered",
    detail: "nas-01 disk at 91.2%",
    color: "#ef4444",
  },
  {
    time: "03:14:23",
    icon: "⚡",
    title: "Executing action",
    detail: "docker system prune -f",
    color: "#f59e0b",
  },
  {
    time: "03:14:28",
    icon: "📦",
    title: "Reclaimed 4.2 GB",
    detail: "Removed unused images, volumes, networks",
    color: "#00ADD8",
  },
  {
    time: "03:14:29",
    icon: "✅",
    title: "Resolved",
    detail: "Disk usage: 91% → 66%",
    color: "#10b981",
  },
  {
    time: "03:14:30",
    icon: "📨",
    title: "Notification sent",
    detail: "Telegram alert delivered",
    color: "#10b981",
  },
];

export default function SelfHealing() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= TIMELINE.length) {
      const resetTimer = setTimeout(() => setVisibleCount(0), 4000);
      return () => clearTimeout(resetTimer);
    }
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 1200);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#10b981] tracking-wider uppercase mb-3">
            Self-Healing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Your homelab fixes itself
            <br />
            while you sleep.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Define rules in YAML. Homebutler watches your servers and takes action
            automatically — restart containers, prune disk, or run custom scripts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: YAML config */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-[#a1a1aa] mb-3">
              alerts.yaml
            </p>
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ef4444]" />
                <span className="terminal-dot bg-[#f59e0b]" />
                <span className="terminal-dot bg-[#10b981]" />
                <span className="ml-auto text-xs text-[#52525b]">
                  ~/.homebutler/alerts.yaml
                </span>
              </div>
              <pre className="terminal-body !min-h-0 text-xs leading-relaxed">
                <code className="text-[#e5e7eb]">
                  <span className="text-[#00ADD8]">rules</span>
                  {`:\n`}
                  <span className="text-[#52525b]">  -</span>
                  {` `}
                  <span className="text-[#00ADD8]">name</span>
                  {`: `}
                  <span className="text-[#10b981]">disk-full</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">metric</span>
                  {`: `}
                  <span className="text-[#10b981]">disk</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">threshold</span>
                  {`: `}
                  <span className="text-[#f59e0b]">85</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">action</span>
                  {`: `}
                  <span className="text-[#10b981]">exec</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">exec</span>
                  {`: `}
                  <span className="text-[#10b981]">"docker system prune -f"</span>
                  {`\n\n`}
                  <span className="text-[#52525b]">  -</span>
                  {` `}
                  <span className="text-[#00ADD8]">name</span>
                  {`: `}
                  <span className="text-[#10b981]">container-down</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">metric</span>
                  {`: `}
                  <span className="text-[#10b981]">container</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">watch</span>
                  {`: `}
                  <span className="text-[#10b981]">[uptime-kuma, vaultwarden]</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">action</span>
                  {`: `}
                  <span className="text-[#10b981]">restart</span>
                  {`\n`}
                  {`    `}
                  <span className="text-[#00ADD8]">cooldown</span>
                  {`: `}
                  <span className="text-[#10b981]">5m</span>
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Right: animated timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-medium text-[#a1a1aa] mb-3">
              What happens at 3 AM:
            </p>
            <div className="space-y-3">
              <AnimatePresence>
                {TIMELINE.slice(0, visibleCount).map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3 bg-[#18181b] border border-[#27272a] rounded-lg p-3"
                  >
                    <span className="text-lg mt-0.5 shrink-0">{event.icon}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#52525b]">
                          {event.time}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: event.color }}
                        >
                          {event.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#71717a] mt-0.5">
                        {event.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {visibleCount < TIMELINE.length && (
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-[#00ADD8] animate-pulse" />
                  <span className="text-xs text-[#52525b]">Monitoring...</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
