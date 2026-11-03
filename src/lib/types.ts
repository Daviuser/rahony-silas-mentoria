export type Sender = "visitor" | "rahony";

export interface ChatMessage {
  sender: Sender;
  text: string;
  timestamp?: string;
}

export interface ChatConfig {
  messages: ChatMessage[];
  font: { family: string; size: string; weight: number; spacing: string };
  gap: string;
  sentBubbleColor: string;
  sentTextColor: string;
  receivedBubbleColor: string;
  receivedTextColor: string;
  showTimestamps: boolean;
  showTyping: boolean;
  typingSender: Sender;
  animate: boolean;
  /** Multiplicador de velocidade (1 = normal, 2 = dobro). */
  speed: number;
  transition: { duration: number; easing: string };
}
