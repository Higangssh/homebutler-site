import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const DOCTOR_OUTPUT = `🩺 Homebutler Doctor — homelab

⚠️  Status: WARN  · pass 9 / warn 4 / fail 1

⚠️  [watch] 1 target(s) on the watch list and no service installed to check them
   Nothing is polling them, so a restart records no incident and sends no
   notification. This checks whether a service is installed, not whether it
   is running.
   → Install the watch service so monitoring survives logout and reboot.
   $ homebutler watch install

⚠️  [notifications] Notifications are configured and switched off for watch
⚠️  [proxmox] Proxmox endpoint "pve1" accepts any certificate
⚠️  [docker] portainer mounts the Docker socket
❌ [config] Config holds plaintext secrets and is readable by others (0644)`;

const CARDS = [
  {
    title: "Every finding names the next command",
    text: "A check that tells you something is wrong and stops there has moved the problem, not solved it. --strict exits non-zero, so this runs from cron and only speaks up when the answer changed.",
  },
  {
    title: "config validate reads what you actually wrote",
    text: "The two ways config goes wrong are both silent: an unrecognised key is dropped without a word, and a --config path that does not exist falls back to defaults. Both are findings, with the line number.",
  },
  {
    title: "Proxmox endpoints, checked with the read token",
    text: "Each configured endpoint gets one finding from the same read-only call proxmox status makes, so the two never disagree about what a token can reach. The suggested fix names PVEAuditor, never Administrator.",
  },
];

export default function Doctor() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-sm font-medium text-[#f59e0b] tracking-wider uppercase mb-3">
            Preflight
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Things it already knew,
            <br />
            and never said.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            A watch list with nothing installed to poll it. Notifications
            configured and switched off. A container holding the Docker socket —
            host root wearing a container's clothes. An endpoint left accepting any
            certificate after a debugging session.{" "}
            <code className="text-[#00ADD8] bg-[#18181b] px-1.5 py-0.5 rounded text-sm">
              homebutler doctor
            </code>{" "}
            is read-only and says all of it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <motion.div {...fadeUp} className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot bg-[#ef4444]" />
              <span className="terminal-dot bg-[#f59e0b]" />
              <span className="terminal-dot bg-[#10b981]" />
              <span className="ml-auto text-xs text-[#52525b]">
                homebutler doctor
              </span>
            </div>
            <pre className="terminal-body !min-h-0 text-xs md:text-sm leading-relaxed whitespace-pre overflow-x-auto">
              <code className="text-[#e5e7eb]">{DOCTOR_OUTPUT}</code>
            </pre>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-[#18181b] border border-[#27272a] rounded-lg p-4"
              >
                <p className="text-[#fafafa] font-medium mb-1">{card.title}</p>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
