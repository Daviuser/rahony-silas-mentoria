import { conversation } from "@/data/content";
import { chatConfig } from "@/data/chat";
import { site } from "@/data/site";
import { ChatBubbles } from "@/components/ui/ChatBubbles";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/Button";

export function Conversation() {
  return (
    <section id="conversa" className="bg-deep px-6 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal as="h2" className="max-w-[15ch] text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-none tracking-tight text-warm">
            {conversation.title}
          </Reveal>
          <Reveal as="p" delay={100} className="mt-6 max-w-[38ch] text-warm/80">{conversation.lead}</Reveal>
          <Reveal delay={180} className="mt-8">
            <WhatsAppButton label={conversation.cta} message={conversation.message} />
          </Reveal>
        </div>
        <div>
          <ChatBubbles config={chatConfig} title={site.name} label={conversation.disclaimer} />
          <p className="mt-4 text-center text-xs text-mute">{conversation.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
