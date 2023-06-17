import Sidebar from "./Sidebar";

export default function BaseLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6">
        {children}
      </div>
    </div>
  );
}
