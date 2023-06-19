import DashNav from "@/components/DashNav";
import Hero from "@/components/homepage/Hero";
import Sidebar from "@/components/Sidebar";
import Testimonials from "@/components/homepage/Testimonials";

function Dashboard() {
  return (
    <>
      <SiteTitle />
      <BaseLayout>
        <Hero />
        <Hero />
      </BaseLayout>
    </>
  );
}

export default Dashboard;
