import { motion } from "framer-motion";
import TerminalSim from "./TerminalSim";
import ChatMockup from "./ChatMockup";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const DRILL_SCENES = [
  {
    command: "homebutler backup drill uptime-kuma",
    output: [
      { text: "", delay: 200 },
      { text: "  Backup:     backup_2026-04-04.tar.gz", delay: 150 },
      { text: "  Size:       18.6 MB", delay: 100 },
      {
        text: "  Integrity:  {green:tar valid (847 files)}",
        delay: 200,
      },
      {
        text: "  Boot:       {green:container started in 8s}",
        delay: 400,
      },
      {
        text: "  Health:     {green:HTTP 200}",
        delay: 300,
      },
      { text: "", delay: 100 },
      { text: "  {green:DRILL PASSED}", delay: 200 },
    ],
  },
];

const MCP_SCENES = [
  {
    command: 'claude: "Why is Plex not working?"',
    output: [
      { text: "", delay: 300 },
      { text: "  {primary:→ mcp} homebutler docker list", delay: 400 },
      { text: "  {dim:  plex          } {red:exited (137)}  3h ago", delay: 200 },
      { text: "  {dim:  uptime-kuma   } {green:running}      4d", delay: 150 },
      { text: "  {dim:  vaultwarden   } {green:running}      4d", delay: 150 },
      { text: "", delay: 200 },
      { text: '  {primary:→ mcp} homebutler docker restart plex', delay: 500 },
      { text: "  Container restarted.", delay: 400 },
      { text: "", delay: 200 },
      { text: '  {primary:→ mcp} homebutler docker list --filter plex', delay: 300 },
      { text: "  {dim:  plex          } {green:running}      2s", delay: 200 },
      { text: "", delay: 100 },
      { text: '  {green:Plex is back online.} It crashed due to OOM.', delay: 200 },
      { text: "  Recommend increasing memory limit.", delay: 150 },
    ],
  },
];

const SUPPORTED_APPS = [
  "uptime-kuma",
  "vaultwarden",
  "pi-hole",
  "jellyfin",
  "gitea",
  "plex",
  "portainer",
  "nginx-proxy-manager",
  "nextcloud",
  "home-assistant",
  "grafana",
  "prometheus",
  "wireguard",
  "immich",
  "freshrss",
];

export default function KillingScenarios() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeUp} className="text-center mb-20">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            Real scenarios
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Not features. Stories.
          </h2>
        </motion.div>

        {/* Scenario 1: Disk full */}
        <div className="mb-32">
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-2 gap-12 items-center mb-8"
          >
            <div>
              <p className="text-sm font-medium text-[#f59e0b] tracking-wider uppercase mb-3">
                Scenario 01
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
                3 AM. Your disk is 91% full.
              </h3>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                Alert fires. You check from bed. AI runs{" "}
                <code className="text-[#00ADD8] bg-[#18181b] px-1.5 py-0.5 rounded text-sm">
                  docker prune
                </code>
                . Disk drops to 66%. All from your phone. No SSH, no laptop, no
                dashboard login.
              </p>
            </div>
            <div className="flex justify-center">
              <ChatMockup />
            </div>
          </motion.div>
        </div>

        {/* Scenario 2: Backup Drill */}
        <div className="mb-32">
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-sm font-medium text-[#10b981] tracking-wider uppercase mb-3">
                Scenario 02
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
                Your backup exists.
                <br />
                But does it work?
              </h3>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                Having a backup and being able to restore are different things.{" "}
                <span className="text-[#fafafa] font-medium">Backup Drill</span>{" "}
                boots your backup in an isolated container and proves it actually
                responds.
              </p>
            </div>
            <div className="glow-green">
              <TerminalSim scenes={DRILL_SCENES} loop compact />
            </div>
          </motion.div>
        </div>

        {/* Scenario 3: AI fixes Plex */}
        <div className="mb-32">
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
                Scenario 03
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
                "Why is Plex
                <br />
                not working?"
              </h3>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                Ask your AI in natural language. It calls Homebutler's MCP tools
                automatically — diagnoses the problem, restarts the container,
                confirms it's back. You never type a single command.
              </p>
            </div>
            <div className="glow-primary">
              <TerminalSim scenes={MCP_SCENES} loop compact />
            </div>
          </motion.div>
        </div>

        {/* Scenario 4: Future vision */}
        <div>
          <motion.div
            {...fadeUp}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <p className="text-sm font-medium text-[#a1a1aa] tracking-wider uppercase mb-3">
              Coming soon
            </p>
            <h3 className="text-2xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
              You did nothing.
              <br />
              <span className="gradient-text-primary">And everything worked.</span>
            </h3>
            <p className="text-[#a1a1aa] text-lg leading-relaxed">
              AI agents run health checks every night. Disk filling up? Pruned.
              Container crashed? Restarted. Backup expired? Refreshed and drilled.
              You wake up to a one-line summary:{" "}
              <span className="text-[#10b981] font-medium">
                "All systems nominal."
              </span>
            </p>
          </motion.div>

          {/* App grid */}
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <p className="text-center text-sm text-[#52525b] mb-4">
              15+ apps ready to deploy with one command
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUPPORTED_APPS.map((app) => (
                <span
                  key={app}
                  className="text-xs text-[#a1a1aa] bg-[#18181b] border border-[#27272a] rounded-md px-3 py-1.5 hover:border-[#3f3f46] hover:text-[#e5e7eb] transition-colors"
                >
                  {app}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
