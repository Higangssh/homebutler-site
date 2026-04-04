import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

interface Method {
  id: string;
  label: string;
  command: string;
}

const METHODS: Method[] = [
  {
    id: "curl",
    label: "curl",
    command:
      "curl -fsSL https://raw.githubusercontent.com/Higangssh/homebutler/main/install.sh | sh",
  },
  {
    id: "brew",
    label: "Homebrew",
    command: "brew install homebutler",
  },
  {
    id: "npm",
    label: "npm",
    command: "npm install -g homebutler",
  },
  {
    id: "go",
    label: "Go",
    command: "go install github.com/Higangssh/homebutler@latest",
  },
];

export default function Install() {
  const [active, setActive] = useState("curl");
  const [copied, setCopied] = useState(false);

  const current = METHODS.find((m) => m.id === active)!;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(current.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            Install
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Up and running in seconds.
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-1 mb-4 bg-[#18181b] rounded-lg p-1 border border-[#27272a]">
            {METHODS.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setActive(m.id);
                  setCopied(false);
                }}
                className={`flex-1 text-sm py-2 px-3 rounded-md transition-all font-medium ${
                  active === m.id
                    ? "bg-[#27272a] text-[#fafafa]"
                    : "text-[#a1a1aa] hover:text-[#e5e7eb]"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Command block */}
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot bg-[#ef4444]" />
              <span className="terminal-dot bg-[#f59e0b]" />
              <span className="terminal-dot bg-[#10b981]" />
              <span className="ml-auto">
                <button
                  onClick={handleCopy}
                  className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.5"
                      >
                        <path d="M3 7l3 3 5-6" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect x="4" y="4" width="8" height="8" rx="1.5" />
                        <path d="M10 4V2.5A1.5 1.5 0 008.5 1h-6A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </span>
            </div>
            <div className="terminal-body !min-h-0">
              <div className="flex">
                <span className="text-[#00ADD8] select-none">$ </span>
                <code className="text-[#e5e7eb] ml-2 break-all">
                  {current.command}
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
