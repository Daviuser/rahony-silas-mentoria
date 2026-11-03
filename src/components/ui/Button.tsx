import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

interface Props {
  label: string;
  message: string;
  variant?: "primary" | "light";
  className?: string;
}

export function WhatsAppButton({ label, message, variant = "primary", className = "" }: Props) {
  const tone = variant === "primary" ? "bg-burn text-ink" : "bg-warm text-ink";
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-sm px-8 py-[18px] text-[.95rem] font-bold tracking-wide transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_34px_rgba(232,116,59,.45)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-warm sm:w-auto ${tone} ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
