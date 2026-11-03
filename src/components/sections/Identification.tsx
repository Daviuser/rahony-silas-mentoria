import { identification } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Identification() {
  return (
    <section className="bg-warm px-6 py-24 text-ink md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="max-w-[16ch] text-[clamp(2rem,5vw,4rem)] font-extrabold leading-none tracking-tight">
          {identification.title}
        </Reveal>
        <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
          {identification.items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 80} className="border-t border-copper py-7 text-[clamp(1.3rem,2.4vw,2rem)] font-light leading-tight transition-[padding,color] duration-300 hover:pl-4 hover:text-rust">
              {item}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
