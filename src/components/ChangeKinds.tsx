import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const KINDS = [
  {
    kind: "gone",
    color: "#ef4444",
    means: "It was there last time and is not now.",
    after: "docker rm, a service stopping, a port closing",
  },
  {
    kind: "new",
    color: "#10b981",
    means: "It was not there last time and is now.",
    after: "starting anything",
  },
  {
    kind: "replaced",
    color: "#f59e0b",
    means: "Same name, different thing underneath.",
    after: "docker compose up -d — the name and the count never move",
  },
  {
    kind: "image",
    color: "#f59e0b",
    means: "Same container, different image.",
    after: "pulling a new tag",
  },
  {
    kind: "state",
    color: "#f59e0b",
    means: "Same container, running where it was stopped, or the reverse.",
    after: "a crash, or bringing something back up",
  },
  {
    kind: "port",
    color: "#f59e0b",
    means: "Same port, a different process answering on it.",
    after: "one service taking over another's port",
  },
  {
    kind: "disk",
    color: "#00ADD8",
    means: "A mount moved by more than half a gigabyte.",
    after: "anything that writes",
  },
  {
    kind: "skipped",
    color: "#52525b",
    means: "The comparison could not be made.",
    after: "Docker was down when either snapshot was taken",
  },
];

export default function ChangeKinds() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            Reading a change
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Six containers before.
            <br />
            Six after. One of them is different.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Every line is three columns: what kind of change, what it happened to,
            and what exactly happened. The kind is one of eight words, and it is the
            same word in{" "}
            <code className="text-[#00ADD8] bg-[#18181b] px-1.5 py-0.5 rounded text-sm">
              --json
            </code>{" "}
            — so an agent branches on it without reading prose.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-4xl mx-auto space-y-2 mb-10">
          {KINDS.map((k, i) => (
            <motion.div
              key={k.kind}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="grid md:grid-cols-[7rem_1fr_1fr] gap-x-5 gap-y-1 items-baseline bg-[#18181b] border border-[#27272a] rounded-lg px-5 py-3.5"
            >
              <code
                className="text-sm font-medium"
                style={{ color: k.color }}
              >
                {k.kind}
              </code>
              <p className="text-sm text-[#e5e7eb] leading-relaxed">{k.means}</p>
              <p className="text-xs text-[#71717a] leading-relaxed">
                You would see it after {k.after}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            {...fadeUp}
            className="rounded-xl border border-[#f59e0b]/25 bg-[#f59e0b]/5 p-6"
          >
            <p className="text-sm font-bold text-[#f59e0b] uppercase tracking-wider mb-3">
              Why replaced exists
            </p>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              A container recreated under the same name leaves every count
              identical. A report that compares counts answers{" "}
              <span className="text-[#e5e7eb]">"no significant changes"</span>{" "}
              while the thing you were running has been swapped out underneath you.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-[#27272a] bg-[#18181b] p-6"
          >
            <p className="text-sm font-bold text-[#a1a1aa] uppercase tracking-wider mb-3">
              Why skipped exists
            </p>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              Homebutler says it could not compare rather than reporting that
              nothing changed. An all-clear it cannot stand behind is worse than no
              answer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
