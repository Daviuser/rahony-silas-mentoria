import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-8 text-center text-sm text-mute">
      <p>
        {site.name} ·{" "}
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
          {site.instagramHandle}
        </a>{" "}
        · {site.whatsappDisplay}
      </p>
    </footer>
  );
}
