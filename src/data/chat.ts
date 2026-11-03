import type { ChatConfig } from "@/lib/types";

export const chatConfig: ChatConfig = {
  messages: [
    { sender: "visitor", text: "Rahony, tenho vontade de trabalhar com perfumes, mas nunca vendi nada. Será que consigo começar?", timestamp: "09:41" },
    { sender: "rahony", text: "Minha mentoria foi pensada justamente para quem deseja conhecer o mercado de revenda de perfumes e aprender a dar os primeiros passos.", timestamp: "09:42" },
    { sender: "visitor", text: "Mesmo começando sem experiência?", timestamp: "09:42" },
    { sender: "rahony", text: "Sim! A proposta é ajudar você a entender como começar nesse mercado, mesmo que ainda não tenha experiência.", timestamp: "09:43" },
    { sender: "visitor", text: "Quero saber mais sobre a mentoria. Como faço?", timestamp: "09:43" },
    { sender: "rahony", text: "Me chama no WhatsApp! Vou te explicar melhor como funciona.", timestamp: "09:44" },
  ],
  font: { family: "var(--font-manrope), system-ui, sans-serif", size: "1rem", weight: 400, spacing: "0" },
  gap: "10px",
  sentBubbleColor: "#b84a17",
  sentTextColor: "#ffffff",
  receivedBubbleColor: "#1c3a46",
  receivedTextColor: "#f6ede4",
  showTimestamps: true,
  showTyping: true,
  typingSender: "rahony",
  animate: true,
  speed: 1,
  transition: { duration: 0.4, easing: "cubic-bezier(.34,1.56,.64,1)" },
};
