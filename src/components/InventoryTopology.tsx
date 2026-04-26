import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const INVENTORY_OUTPUT = `🏠 Home Network
   Server  demo-lab (10.10.0.12)
   Summary ✅ 6 running · ⚪ 1 stopped · 🌍 3 public ports · 🔒 9 local ports

📦 Containers (7)
   ├─ ✅ monitor · running
   ├─ ✅ media-app · running
   └─ ✅ app-api · running
      ├─ image example/app-api:latest
      └─ exposes :8080 → 8080/tcp

🌐 App Ports (3)
   └─ 🌍 :8080/tcp · app-api

🧩 System Ports (9)
   ├─ 🔒 :22/tcp · sshd
   └─ 🔒 :9100/tcp · metrics-agent`;

const MERMAID_OUTPUT = `graph TD
  home["🏠 Home Network"] --> demo_lab["🖥 demo-lab<br/>10.10.0.12"]
  demo_lab --> api["📦 app-api<br/>running"]
  demo_lab --> port["🌍 :8080/tcp<br/>app-api"]
  api -. exposes .-> port`;

const HIGHLIGHTS = [
  {
    title: "Know what is exposed",
    text: "Public and local ports are separated, so risky listeners stand out immediately.",
  },
  {
    title: "Connect ports to containers",
    text: "Docker-published host ports are linked back to the container that owns them.",
  },
  {
    title: "Export a real topology",
    text: "Generate Mermaid diagrams for GitHub issues, Obsidian notes, docs, and AI prompts.",
  },
];

export default function InventoryTopology() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,173,216,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            Inventory & Topology
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            First, see your homelab.
            <br />
            Then fix it.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Before alerts, backups, or AI actions, homebutler builds a readable map
            of servers, containers, app ports, and system listeners.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <motion.div {...fadeUp} className="terminal glow-primary">
            <div className="terminal-header">
              <span className="terminal-dot bg-[#ef4444]" />
              <span className="terminal-dot bg-[#f59e0b]" />
              <span className="terminal-dot bg-[#10b981]" />
              <span className="ml-auto text-xs text-[#52525b]">
                homebutler inventory scan
              </span>
            </div>
            <pre className="terminal-body !min-h-0 text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
              <code className="text-[#e5e7eb]">{INVENTORY_OUTPUT}</code>
            </pre>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="space-y-3 mb-5">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#18181b] border border-[#27272a] rounded-lg p-4"
                >
                  <p className="text-[#fafafa] font-medium mb-1">{item.title}</p>
                  <p className="text-sm text-[#71717a] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ef4444]" />
                <span className="terminal-dot bg-[#f59e0b]" />
                <span className="terminal-dot bg-[#10b981]" />
                <span className="ml-auto text-xs text-[#52525b]">
                  --format mermaid
                </span>
              </div>
              <pre className="terminal-body !min-h-0 text-xs leading-relaxed whitespace-pre-wrap">
                <code className="text-[#a1a1aa]">{MERMAID_OUTPUT}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
