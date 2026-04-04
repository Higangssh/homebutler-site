import { motion } from "framer-motion";
import TerminalSim from "./TerminalSim";

const HERO_SCENES = [
  {
    command: "homebutler status",
    output: [
      { text: "", delay: 100 },
      {
        text: "  {primary:SERVER}        {primary:STATUS}    {primary:CPU}    {primary:MEM}     {primary:DISK}",
        delay: 50,
      },
      {
        text: "  nas-01         {green:online}    12%    4.2/16G  {green:42%}",
        delay: 60,
      },
      {
        text: "  pi-cluster     {green:online}     8%    1.8/4G   {green:61%}",
        delay: 60,
      },
      {
        text: "  media-srv      {green:online}    34%    8.1/32G  {amber:78%}",
        delay: 60,
      },
      { text: "", delay: 80 },
      { text: "  {green:3 servers online} | 15 apps running", delay: 100 },
    ],
  },
  {
    command: "homebutler backup drill --all",
    output: [
      { text: "", delay: 200 },
      {
        text: "  {primary:Drilling} uptime-kuma ...",
        delay: 400,
      },
      {
        text: "  Integrity: {green:tar valid (847 files)}",
        delay: 200,
      },
      { text: "  Boot:      {green:container started in 8s}", delay: 300 },
      { text: "  Health:    {green:HTTP 200}", delay: 200 },
      { text: "  {green:DRILL PASSED}", delay: 100 },
      { text: "", delay: 100 },
      {
        text: "  {primary:Drilling} vaultwarden ...",
        delay: 400,
      },
      { text: "  Integrity: {green:tar valid (234 files)}", delay: 200 },
      { text: "  Boot:      {green:container started in 5s}", delay: 300 },
      { text: "  Health:    {green:HTTP 200}", delay: 200 },
      { text: "  {green:DRILL PASSED}", delay: 100 },
      { text: "", delay: 100 },
      {
        text: "  {green:2/2 drills passed.} Your backups work.",
        delay: 150,
      },
    ],
  },
  {
    command: "homebutler install jellyfin",
    output: [
      { text: "", delay: 200 },
      { text: "  Checking Docker...       {green:OK}", delay: 300 },
      { text: "  Checking port 8096...    {green:available}", delay: 200 },
      { text: "  Pulling jellyfin:latest...", delay: 400 },
      { text: "  Generating docker-compose.yml...", delay: 300 },
      { text: "  Starting container...", delay: 500 },
      { text: "", delay: 100 },
      {
        text: "  {green:jellyfin is running} at http://localhost:8096",
        delay: 150,
      },
    ],
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,173,216,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <a
            href="https://github.com/Higangssh/homebutler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#a1a1aa] border border-[#27272a] rounded-full px-4 py-1.5 hover:border-[#3f3f46] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            v0.13.0 — Now with Backup Drill
          </a>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-5xl md:text-7xl font-extrabold tracking-tight gradient-text leading-[1.1] mb-6"
        >
          Your homelab,
          <br />
          one binary away.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Monitor, control, backup, and self-heal your servers — from chat, AI,
          or terminal. Single binary. Zero dependencies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mb-16"
        >
          <a
            href="#install"
            className="inline-flex items-center gap-2 bg-[#00ADD8] hover:bg-[#00ADD8]/90 text-[#09090b] font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,173,216,0.3)]"
          >
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="https://github.com/Higangssh/homebutler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#27272a] hover:border-[#3f3f46] text-[#e5e7eb] font-medium px-6 py-3 rounded-lg transition-all hover:bg-[#18181b]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub
          </a>
        </motion.div>

        {/* Terminal simulation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto glow-primary"
        >
          <TerminalSim scenes={HERO_SCENES} loop />
        </motion.div>
      </div>
    </section>
  );
}
