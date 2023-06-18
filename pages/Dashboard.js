import BaseLayout from "@/components/BaseLayout";
import Head from "@/components/Head";
import Hero from "@/components/Hero";

function Dashboard() {
  return (
    <>
      <Head />
      <BaseLayout>
        <Hero />
        <Hero />
      </BaseLayout>
    </>
  );
}

export default Dashboard;
