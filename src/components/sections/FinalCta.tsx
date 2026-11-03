import { finalCta } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="final-cta grid min-h-[85vh] items-center px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal as="h2" className="max-w-[16ch] text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-none tracking-tight text-warm">
          {finalCta.title}
        </Reveal>
        <Reveal as="p" delay={100} className="mb-10 mt-8 max-w-[40ch] text-xl text-warm/90">{finalCta.text}</Reveal>
        <Reveal delay={180}>
          <WhatsAppButton variant="light" label={finalCta.cta} message={finalCta.message} />
        </Reveal>
      </div>
    </section>
  );
}
