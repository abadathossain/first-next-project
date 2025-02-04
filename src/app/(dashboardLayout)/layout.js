import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
