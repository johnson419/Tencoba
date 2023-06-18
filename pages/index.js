import Head from "next/head";
import Head from "@/components/SiteTitle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <>
      <Head/>
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
