import { useState, useEffect, useCallback } from "react";

interface TerminalLine {
  text: string;
  color?: string;
  delay?: number;
}

interface TerminalScene {
  command: string;
  output: TerminalLine[];
}

interface Props {
  scenes: TerminalScene[];
  className?: string;
  loop?: boolean;
  compact?: boolean;
}

export default function TerminalSim({
  scenes,
  className = "",
  loop = true,
  compact = false,
}: Props) {
  const [displayLines, setDisplayLines] = useState<
    { text: string; color?: string }[]
  >([]);
  const [currentCmd, setCurrentCmd] = useState("");

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const runScenes = useCallback(async () => {
    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        for (const scene of scenes) {
          if (cancelled) return;

          // Type command character by character
          setCurrentCmd("");
          for (let i = 0; i <= scene.command.length; i++) {
            if (cancelled) return;
            setCurrentCmd(scene.command.slice(0, i));
            await sleep(40 + Math.random() * 30);
          }
          await sleep(300);

          // "Execute" — move command to output
          setDisplayLines((prev) => [
            ...prev,
            { text: `$ ${scene.command}`, color: "text-[#a1a1aa]" },
          ]);
          setCurrentCmd("");

          // Print output lines
          for (const line of scene.output) {
            if (cancelled) return;
            await sleep(line.delay ?? 80);
            setDisplayLines((prev) => [
              ...prev,
              { text: line.text, color: line.color },
            ]);
          }

          await sleep(2000);
        }

        if (!loop) break;

        // Reset for loop
        await sleep(1500);
        setDisplayLines([]);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [scenes, loop]);

  useEffect(() => {
    const cleanup = runScenes();
    return () => {
      cleanup.then((fn) => fn?.());
    };
  }, [runScenes]);

  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <span className="terminal-dot bg-[#ef4444]" />
        <span className="terminal-dot bg-[#f59e0b]" />
        <span className="terminal-dot bg-[#10b981]" />
        <span className="ml-auto text-xs text-[#52525b]">Homebutler</span>
      </div>
      <div
        className={`terminal-body overflow-y-auto ${compact ? "text-xs !min-h-0 !p-4" : ""}`}
        style={{ maxHeight: compact ? 280 : 360 }}
      >
        {displayLines.map((line, i) => (
          <div key={i} className={line.color || "text-[#e5e7eb]"}>
            {renderColoredLine(line.text)}
          </div>
        ))}
        {/* Current typing line */}
        <div className="text-[#e5e7eb] flex">
          <span className="text-[#00ADD8]">$</span>
          <span className="ml-2">{currentCmd}</span>
          <span className="cursor text-[#00ADD8] ml-0.5">|</span>
        </div>
      </div>
    </div>
  );
}

function renderColoredLine(text: string) {
  // Parse inline color tokens like {green:text} {red:text} {amber:text} {primary:text}
  const colorMap: Record<string, string> = {
    green: "text-[#10b981]",
    red: "text-[#ef4444]",
    amber: "text-[#f59e0b]",
    primary: "text-[#00ADD8]",
    dim: "text-[#52525b]",
  };

  const regex = /\{(\w+):([^}]+)\}/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const colorKey = match[1];
    const content = match[2];
    parts.push(
      <span key={match.index} className={colorMap[colorKey] || ""}>
        {content}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
