import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Contact } from "@/components/sections/Contact";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { Philosophy } from "@/components/sections/Philosophy";
import { PilotBoxes } from "@/components/sections/PilotBoxes";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { PWA } from "@/components/sections/PWA";
import { Security } from "@/components/sections/Security";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-w-0 overflow-x-clip">
        <Hero />
        <PilotBoxes />
        <Problem />
        <Ecosystem />
        <Features />
        <Personas />
        <PWA />
        <Security />
        <HowItWorks />
        <Pricing />
        <Philosophy />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <div className="noise" aria-hidden="true" />
    </>
  );
}
