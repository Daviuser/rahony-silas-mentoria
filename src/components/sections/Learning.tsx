import { learning } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Learning() {
  return (
    <section id="aprendizado" className="bg-gradient-to-b from-ink to-[#0b2f3c] px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="max-w-[15ch] text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-none tracking-tight text-warm">
          {learning.title}
        </Reveal>
        <ol className="mt-14">
          {learning.items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70} className="grid grid-cols-[44px_1fr] items-baseline border-b border-warm/15 py-6 text-[clamp(1.3rem,3vw,2.4rem)] text-warm transition-colors hover:text-amber md:grid-cols-[90px_1fr]">
              <span className="text-base font-light text-burn">{i + 1}</span>
              {item}
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 text-sm text-mute">{learning.note}</p>
      </div>
    </section>
  );
}
