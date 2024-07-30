import { PiChartLine } from "react-icons/pi";
import SidebarButton from "./SidebarButton";
import { useNavigate } from "react-router-dom";

function DashboardButton() {
  const navigate = useNavigate();

  return (
    <SidebarButton onClick={() => navigate("/dashboard")}>
      <PiChartLine />
      <span>Dashboard</span>
    </SidebarButton>
  );
}

export default DashboardButton;
