import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Medal from "@/components/sections/Medal";
import PricingLots from "@/components/sections/PricingLots";
import FoundersWall from "@/components/sections/FoundersWall";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#E3E2DE] text-[#141414]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Medal />
      <PricingLots />
      <FoundersWall />
      <Faq />
      <Footer />
    </main>
  );
}
