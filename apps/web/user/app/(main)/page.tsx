import FAQs from "@/components/main/home/faqs";
import Features from "@/components/main/home/features";
import Hero from "@/components/main/home/hero";
import Promos from "@/components/main/home/promos";
import Testimonials from "@/components/main/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <FAQs />
      <Promos />
    </>
  );
}
