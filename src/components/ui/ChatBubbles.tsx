"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { ChatConfig } from "@/lib/types";

interface Props {
  config: ChatConfig;
  title: string;
  label: string;
}

/** Conversa animada inspirada no iMessage. Toda a aparência e a velocidade vêm de `config`. */
export function ChatBubbles({ config, title, label }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState<ChatConfig["typingSender"] | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!config.animate || reduce) {
      setCount(config.messages.length);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms / config.speed));
      });

    const run = async () => {
      for (let i = 0; i < config.messages.length; i++) {
        const message = config.messages[i];
        if (config.showTyping && message.sender === config.typingSender) {
          setTyping(message.sender);
          await wait(1100);
          if (cancelled) return;
          setTyping(null);
        } else {
          await wait(600);
        }
        if (cancelled) return;
        setCount(i + 1);
        await wait(700);
        if (cancelled) return;
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          void run();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(root);

    return () => {
      cancelled = true;
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [config]);

  const style = {
    "--chat-sent": config.sentBubbleColor,
    "--chat-sent-text": config.sentTextColor,
    "--chat-recv": config.receivedBubbleColor,
    "--chat-recv-text": config.receivedTextColor,
    "--chat-gap": config.gap,
    "--chat-font": config.font.family,
    "--chat-size": config.font.size,
    "--chat-weight": config.font.weight,
    "--chat-spacing": config.font.spacing,
    "--chat-duration": `${config.transition.duration / config.speed}s`,
    "--chat-ease": config.transition.easing,
  } as CSSProperties;

  return (
    <div ref={rootRef} className="chat-phone" style={style}>
      <div className="chat-title">{title}</div>
      <div className="chat-list" role="log" aria-label={label}>
        {config.messages.slice(0, count).map((m, i) => (
          <div key={i} className={`chat-msg ${m.sender === "visitor" ? "is-sent" : "is-received"}`}>
            <div className="chat-bubble">{m.text}</div>
            {config.showTimestamps && m.timestamp && <span className="chat-time">{m.timestamp}</span>}
          </div>
        ))}
        {typing && (
          <div className={`chat-msg chat-typing ${typing === "visitor" ? "is-sent" : "is-received"}`} aria-hidden="true">
            <div className="chat-bubble"><i /><i /><i /></div>
          </div>
        )}
      </div>
    </div>
  );
}
