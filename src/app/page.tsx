import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import BestIn from "@/components/BestIn";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ServiceCategories from "@/components/ServiceCategories";
import WorkProgress from "@/components/WorkProgress";
import ServingAreas from "@/components/ServingAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <BestIn />
      <Services />
      <WhyUs />
      <Reviews />
      <ServiceCategories />
      <WorkProgress />
      <ServingAreas />
      <Contact />
      <Footer />
    </main>
  );
}
