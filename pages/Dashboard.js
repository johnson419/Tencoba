import BaseLayout from "@/components/BaseLayout";
import DashNav from "@/components/DashNav";
import Hero from "@/components/Hero";

function Dashboard() {
  return (
    <BaseLayout>
      <DashNav />
      <Hero />
      <Hero />
    </BaseLayout>
  );
}

export default Dashboard;
