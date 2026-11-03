import Image from "next/image";
import { hero } from "@/data/content";
import { FlickerText } from "@/components/ui/FlickerText";
import { WhatsAppButton } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="topo" className="bg-ink">
      <Image
        src="/images/brand-banner.webp"
        alt="Rahony Silas, mentoria em revenda de perfumes"
        width={1600}
        height={900}
        priority
        sizes="100vw"
        className="hero-banner block h-auto w-full"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 md:pb-28">
        <FlickerText text={hero.highlight} className="mb-12 max-w-[24ch] text-[clamp(1.4rem,3.4vw,2.8rem)] font-extrabold leading-[1.15] tracking-tight md:mb-16" />
        <div className="grid items-end gap-6 md:grid-cols-[1.1fr_.9fr] md:gap-10">
          <h1 className="max-w-[15ch] text-[clamp(1.9rem,4.4vw,3.6rem)] font-extrabold leading-none tracking-tight text-warm">{hero.title}</h1>
          <div>
            <p className="mb-7 max-w-[36ch] text-lg text-warm/80">{hero.subtitle}</p>
            <WhatsAppButton label={hero.cta} message={hero.message} />
          </div>
        </div>
      </div>
    </section>
  );
}
