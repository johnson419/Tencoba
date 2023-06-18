import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

function Dashboard() {
  return (
    <>
      <div>
        <Head>
          <title>TENCOBA</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logoup.png" />
        </Head>
      </div>
      <BaseLayout>
        <Hero />
        <Hero />
      </BaseLayout>
    </>
  );
}

export default Dashboard;
