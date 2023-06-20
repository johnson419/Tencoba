import Hero from "@/components/homepage/Hero";
import SiteTitle from "@/components/SiteTitle";
import BaseLayout from "@/components/BaseLayout";

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
