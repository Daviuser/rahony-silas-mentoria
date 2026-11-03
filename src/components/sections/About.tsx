import Image from "next/image";
import { about } from "@/data/content";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="mentor" className="bg-warm px-6 py-24 text-ink md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="bg-ink p-3">
          <Image src="/images/monogram-rs.webp" alt="Monograma RS de Rahony Silas" width={460} height={280} sizes="(min-width:768px) 560px, 100vw" className="h-auto w-full" />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-tight tracking-tight">{about.title}</h2>
          <p className="mt-5 max-w-[46ch] text-[#33474f]">{about.text}</p>
          <p className="mt-7 text-2xl font-light text-rust">{about.quote}</p>
          <p className="mt-5">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-rust underline-offset-4 hover:underline">
              {site.instagramHandle}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
