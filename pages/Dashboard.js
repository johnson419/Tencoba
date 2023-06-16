import DashNav from "@/components/DashNav";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Testimonials from "@/components/Testimonials";

const Dashboard = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:w-1/12">
        <Sidebar />
      </div>

      {/* <div className="flex-1 pl-10">
        <div className="sticky top-0">
          <DashNav />
        </div>
        Add your Main Content here
      </div> */}
    </div>
  );
};

export default Dashboard;
