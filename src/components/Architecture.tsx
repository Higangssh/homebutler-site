import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const LAYERS = [
  {
    label: "Interface Layer",
    items: ["Telegram", "Claude", "ChatGPT", "Cursor", "Web UI", "TUI"],
    color: "#a1a1aa",
    borderColor: "#3f3f46",
  },
  {
    label: "AI Agent Layer",
    items: ["MCP Protocol", "15 Tools", "Natural Language"],
    color: "#00ADD8",
    borderColor: "#00ADD8",
  },
  {
    label: "homebutler Core",
    items: [
      "Status",
      "Install",
      "Backup",
      "Alerts",
      "Self-Heal",
      "Multi-Server",
    ],
    color: "#10b981",
    borderColor: "#10b981",
  },
];

export default function Architecture() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Three interfaces, one core.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Chat, AI, or CLI — they all go through homebutler. One binary powers
            everything.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="max-w-2xl mx-auto space-y-4"
        >
          {LAYERS.map((layer, i) => (
            <div key={layer.label}>
              <div
                className="rounded-xl border p-6"
                style={{ borderColor: layer.borderColor + "40" }}
              >
                <p
                  className="text-sm font-semibold mb-3 tracking-wider uppercase"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-md border"
                      style={{
                        color: layer.color,
                        borderColor: layer.borderColor + "30",
                        backgroundColor: layer.borderColor + "10",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < LAYERS.length - 1 && (
                <div className="flex justify-center py-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#3f3f46"
                    strokeWidth="1.5"
                  >
                    <path d="M10 4v12M6 12l4 4 4-4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
