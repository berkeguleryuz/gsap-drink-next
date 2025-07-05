import Nav from "@/components/Nav";
import HeroSection from "@/sections/HeroSection";
import MessageSection from "@/sections/MessageSection";
import SlidingSection from "@/sections/SlidingSection";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import NutritionSection from "@/sections/NutritionSection";
import BenefitSection from "@/sections/BenefitSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <ScrollSmootherWrapper>
        <HeroSection />
        <MessageSection />
        <SlidingSection />
        <NutritionSection />
        <div>
          <BenefitSection />
          <TestimonialsSection />
        </div>
        <FooterSection />
      </ScrollSmootherWrapper>
    </main>
  );
}
