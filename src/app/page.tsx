import Navbar from "@/components/sections/Navbar";
import Banner from "@/components/sections/Banner";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#E3E2DE] text-[#141414]">
      <Navbar />
      <Banner />
      <HowItWorks />
      <Footer />
    </main>
  );
}
