import Sidebar from "../../components/shares/SideBar";

const DashboardLayout = async ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};
// role={role}

export default DashboardLayout;
