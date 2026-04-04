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
            {/* Left: text */}
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

            {/* Right: live chat simulation */}
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
            {/* Left: text */}
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

            {/* Right: terminal simulation */}
            <div className="glow-green">
              <TerminalSim scenes={DRILL_SCENES} loop compact />
            </div>
          </motion.div>
        </div>

        {/* Scenario 3: One binary install */}
        <div>
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-2 gap-12 items-center mb-10"
          >
            {/* Left: text */}
            <div>
              <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
                Scenario 03
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-[#fafafa] mb-4 leading-tight">
                One binary. 15 apps.
                <br />
                Zero config.
              </h3>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                Deploy self-hosted apps in seconds. Pre-checks Docker, ports,
                and conflicts automatically. Generates{" "}
                <code className="text-[#00ADD8] bg-[#18181b] px-1.5 py-0.5 rounded text-sm">
                  docker-compose.yml
                </code>{" "}
                for you.
              </p>
            </div>

            {/* Right: install GIF */}
            <div className="rounded-xl overflow-hidden border border-[#27272a] glow-primary">
              <img
                src="/images/install-demo.gif"
                alt="homebutler install demo"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* App grid */}
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
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


