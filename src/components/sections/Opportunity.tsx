import Image from "next/image";
import { opportunity } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Opportunity() {
  return (
    <section id="oportunidade" className="overflow-hidden bg-ink px-6 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_.8fr] md:gap-20">
        <div>
          <Reveal as="h2" className="max-w-[15ch] text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-none tracking-tight text-warm">
            {opportunity.title}
          </Reveal>
          <Reveal as="p" delay={120} className="mt-10 max-w-[28ch] text-2xl font-light leading-snug text-amber">{opportunity.lead}</Reveal>
          <Reveal as="p" delay={200} className="mt-5 max-w-[40ch] text-mute">{opportunity.text}</Reveal>
        </div>
        <Reveal className="mx-auto w-full max-w-sm">
          <Image src="/images/perfume-bottle.webp" alt="Frasco de perfume iluminado em tons de âmbar" width={489} height={752} sizes="(min-width:768px) 380px, 80vw" className="h-auto w-full" />
        </Reveal>
      </div>
    </section>
  );
}
