import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/about/Hero";
import Feature from "@/components/about/Feature";
import Testimonials from "@/components/about/Testimonials";
import CTA from "@/components/about/CTA";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default About;
