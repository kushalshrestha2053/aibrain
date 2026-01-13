import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <WhatWeBuild />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}

