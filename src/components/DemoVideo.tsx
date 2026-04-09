import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-sm font-medium text-[#00ADD8] tracking-wider uppercase mb-3">
            See it in action
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            See what Homebutler can do.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Monitor, install, backup, self-heal — all from one binary.
            A quick overview of everything Homebutler brings to your homelab.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden border border-[#27272a] glow-primary aspect-video bg-[#0c0c0e]">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 group cursor-pointer"
              >
                <img
                  src="https://img.youtube.com/vi/MFoDiYRH_nE/maxresdefault.jpg"
                  alt="Homebutler demo"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#00ADD8] flex items-center justify-center shadow-[0_0_40px_rgba(0,173,216,0.4)] group-hover:shadow-[0_0_60px_rgba(0,173,216,0.6)] group-hover:scale-110 transition-all">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="#09090b"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="relative z-10 text-sm text-[#a1a1aa] font-medium">
                  Watch overview
                </span>
              </button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/MFoDiYRH_nE?autoplay=1&rel=0"
                title="Homebutler demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
