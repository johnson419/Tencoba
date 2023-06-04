import DashNav from "@/components/DashNav";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <DashNav />
        {/* Main content of the dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
