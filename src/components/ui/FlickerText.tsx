"use client";
import { useEffect, useRef, useState } from "react";

type Phase = "pre" | "go" | "static";

interface Props {
  text: string;
  className?: string;
}

/**
 * Texto que começa em contorno, oscila e se preenche progressivamente.
 * Roda uma vez, ao entrar na tela. Respeita prefers-reduced-motion.
 * Os atrasos são determinísticos (sem Math.random) para evitar divergência de hidratação.
 */
export function FlickerText({ text, className = "" }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [phase, setPhase] = useState<Phase>("pre");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("static");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("go");
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let index = 0;
  return (
    <p ref={ref} aria-label={text} className={`flicker flicker-${phase} ${className}`}>
      {text.split(" ").map((word, w) => (
        <span key={w} aria-hidden="true" className="flicker-word">
          {Array.from(word).map((char, c) => {
            const delay = ((index++ * 37) % 16) / 10;
            return (
              <span key={c} className="flicker-char" style={{ animationDelay: `${delay}s` }}>
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
