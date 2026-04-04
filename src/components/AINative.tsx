import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const MCP_CONFIG = `{
  "mcpServers": {
    "homebutler": {
      "command": "homebutler",
      "args": ["mcp"]
    }
  }
}`;

const AI_TOOLS = [
  { name: "Claude", desc: "Desktop & API" },
  { name: "ChatGPT", desc: "via MCP bridge" },
  { name: "Cursor", desc: "IDE integration" },
  { name: "Terminal", desc: "CLI & TUI" },
];

export default function AINative() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            AI-Native
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Built for AI. From day one.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Your AI assistant calls homebutler tools directly through MCP. 15
            tools, zero glue code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* MCP config */}
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-[#a1a1aa] mb-3">
              Add to your MCP config:
            </p>
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ef4444]" />
                <span className="terminal-dot bg-[#f59e0b]" />
                <span className="terminal-dot bg-[#10b981]" />
                <span className="ml-auto text-xs text-[#52525b]">
                  mcp.json
                </span>
              </div>
              <pre className="terminal-body !min-h-0 text-sm">
                <code className="text-[#e5e7eb]">{MCP_CONFIG}</code>
              </pre>
            </div>
          </motion.div>

          {/* Works with */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-sm font-medium text-[#a1a1aa] mb-3">
              Works with:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {AI_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-[#18181b] border border-[#27272a] rounded-lg p-4 hover:border-[#3f3f46] transition-colors"
                >
                  <p className="text-[#fafafa] font-medium mb-1">
                    {tool.name}
                  </p>
                  <p className="text-xs text-[#52525b]">{tool.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#18181b] border border-[#27272a] rounded-lg p-5">
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                <span className="text-[#fafafa] font-medium">
                  15 MCP tools
                </span>{" "}
                — server status, app install, backup, alerts, Docker management,
                system metrics, and more. Your AI has full homelab control.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
