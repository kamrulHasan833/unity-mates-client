import { Outlet } from "react-router-dom";
import SectionWrapperLarge from "../../Components/Shared/SectionWrapperLarge";
import Sidebar from "../../Layouts/Sidebar";

const Dashboard = () => {
  return (
    <>
      <SectionWrapperLarge>
        <div className="lg:flex">
          <div className="flex-grow-0">
            <Sidebar />
            <div className="w-[320px] hidden xl:block h-screen"></div>
          </div>
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </SectionWrapperLarge>
    </>
  );
};

export default Dashboard;
