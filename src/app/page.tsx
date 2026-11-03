import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Identification } from "@/components/sections/Identification";
import { Opportunity } from "@/components/sections/Opportunity";
import { Learning } from "@/components/sections/Learning";
import { Conversation } from "@/components/sections/Conversation";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Identification />
        <Opportunity />
        <Learning />
        <Conversation />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
