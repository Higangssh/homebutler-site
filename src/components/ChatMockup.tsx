import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: number;
  type: "bot" | "user";
  name?: string;
  content: React.ReactNode;
  time: string;
  delay: number; // ms before appearing
}

const messages: ChatMessage[] = [
  {
    id: 1,
    type: "bot",
    name: "homebutler",
    content: (
      <div className="font-mono text-[12.5px] leading-relaxed rounded-lg p-3 bg-[#1a1a2e] border-l-[3px] border-l-[#ef4444]">
        <div className="text-[#ef4444] font-semibold mb-1">🔴 ALERT — disk-full</div>
        <div><span className="text-[#71717a]">Server:</span> nas-01</div>
        <div><span className="text-[#71717a]">Disk:</span> <span className="text-[#ef4444]">91.2%</span> <span className="text-[#71717a]">(threshold: 85%)</span></div>
        <div><span className="text-[#71717a]">Mount:</span> /dev/sda1</div>
        <div className="mt-2"><span className="text-[#f59e0b]">→ Executing playbook...</span></div>
        <div><span className="text-[#00ADD8]">$ docker system prune -f</span></div>
      </div>
    ),
    time: "3:14 AM",
    delay: 800,
  },
  {
    id: 2,
    type: "user",
    content: <span>status</span>,
    time: "3:15 AM",
    delay: 2500,
  },
  {
    id: 3,
    type: "bot",
    name: "homebutler",
    content: (
      <div className="font-mono text-[12.5px] leading-relaxed rounded-lg p-3 bg-[#0f2922] border-l-[3px] border-l-[#10b981]">
        <div className="text-[#10b981] font-semibold mb-1">✅ RESOLVED — disk-full</div>
        <div><span className="text-[#71717a]">Reclaimed:</span> 4.2 GB</div>
        <div><span className="text-[#71717a]">Disk now:</span> <span className="text-[#10b981]">66%</span></div>
        <div><span className="text-[#71717a]">Duration:</span> 7s</div>
        <div className="mt-2 text-[#71717a] text-[11px]">SERVER STATUS</div>
        <div>nas-01 &nbsp;&nbsp;&nbsp;<span className="text-[#10b981]">●</span> cpu 3% &nbsp;mem 41% &nbsp;disk <span className="text-[#10b981]">66%</span></div>
        <div>pi-cluster <span className="text-[#10b981]">●</span> cpu 8% &nbsp;mem 45% &nbsp;disk 52%</div>
        <div>media-srv &nbsp;<span className="text-[#10b981]">●</span> cpu 2% &nbsp;mem 38% &nbsp;disk 41%</div>
      </div>
    ),
    time: "3:15 AM",
    delay: 4200,
  },
  {
    id: 4,
    type: "user",
    content: <span>👍</span>,
    time: "3:15 AM",
    delay: 6000,
  },
];

export default function ChatMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;
    setHasStarted(true);

    messages.forEach((msg, i) => {
      setTimeout(() => {
        setVisibleCount(i + 1);
      }, msg.delay);
    });

    // Reset and replay after all messages shown
    const totalTime = messages[messages.length - 1].delay + 4000;
    const interval = setInterval(() => {
      setVisibleCount(0);
      messages.forEach((msg, i) => {
        setTimeout(() => {
          setVisibleCount(i + 1);
        }, msg.delay);
      });
    }, totalTime);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#27272a] bg-[#0e1621] shadow-2xl">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#17212b] border-b border-[#27272a]">
        <div className="w-8 h-8 rounded-full bg-[#00ADD8] flex items-center justify-center text-[11px] font-bold text-white">
          HB
        </div>
        <div>
          <div className="text-[13px] font-semibold text-[#e8e8e8]">homebutler</div>
          <div className="text-[11px] text-[#6ab2f2]">online</div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 min-h-[380px] flex flex-col gap-2">
        <AnimatePresence>
          {messages.slice(0, visibleCount).map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[340px] px-3 py-2 rounded-xl text-[14px] leading-relaxed ${
                  msg.type === "bot"
                    ? "bg-[#182533] text-[#e8e8e8] rounded-bl-sm"
                    : "bg-[#2b5278] text-[#e8e8e8] rounded-br-sm"
                }`}
              >
                {msg.name && (
                  <div className="text-[13px] font-semibold text-[#6ab2f2] mb-0.5">
                    {msg.name}
                  </div>
                )}
                {msg.content}
                <div className="text-[11px] text-white/40 text-right mt-1">
                  {msg.time}
                  {msg.type === "user" && " ✓✓"}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
