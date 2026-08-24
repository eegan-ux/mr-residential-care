import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ReferralCTA from "@/components/ReferralCTA";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <ReferralCTA />
      <Careers />
      <Footer />
    </main>
  );
}
