import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Personas } from "@/components/sections/Personas";
import { Philosophy } from "@/components/sections/Philosophy";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { PWA } from "@/components/sections/PWA";
import { Security } from "@/components/sections/Security";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Ecosystem />
        <Features />
        <Personas />
        <PWA />
        <Security />
        <Pricing />
        <Philosophy />
        <FinalCTA />
      </main>
      <Footer />
      <div className="noise" aria-hidden="true" />
    </>
  );
}
