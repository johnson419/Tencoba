import Navbar from "@/components/Navbar";
import Hero from "@/components/homepage/Hero";
import Feature from "@/components/homepage/Feature";
import Testimonials from "@/components/homepage/Testimonials";
import CTA from "@/components/homepage/CTA";
import Footer from "@/components/Footer";
import SiteTitle from "@/components/SiteTitle";

const Landing = () => {
  return (
    <>
      <SiteTitle/>
      <div>
        <Navbar />
        <Hero />
        <Feature />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
