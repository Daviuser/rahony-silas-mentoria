"use client";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-300 ${solid ? "bg-ink/90 backdrop-blur" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-6 py-4">
        <a href="#topo" className="text-xl font-extrabold tracking-tight text-warm">
          Rahony <span className="font-light">Silas</span>
        </a>
        <span className="h-6 w-px bg-warm/60" aria-hidden="true" />
        <span className="text-xs font-light tracking-[.4em] text-warm">{site.product.toUpperCase()}</span>
        <nav aria-label="Principal" className="ml-auto hidden gap-8 text-sm font-medium text-warm/80 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-amber">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
