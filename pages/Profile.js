import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/about/Hero";
import SiteTitle from "@/components/SiteTitle";

const Profile = () => {
  return (
    <>
      <SiteTitle />
      <BaseLayout>
        <Hero />
      </BaseLayout>
    </>
  );
};

export default Profile;
