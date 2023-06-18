import BaseLayout from "@/components/BaseLayout";
import SiteTitle from "@/components/SiteTitle";
import Hero from "@/components/Hero";
import SiteTitle from "@/components/SiteTitle";

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
