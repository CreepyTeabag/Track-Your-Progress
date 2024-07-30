import { PiGear } from "react-icons/pi";
import SidebarButton from "./SidebarButton";
import { useNavigate } from "react-router-dom";

function SettingsButton() {
  const navigate = useNavigate();

  return (
    <SidebarButton onClick={() => navigate("/settings")}>
      <PiGear />
      <span>Settings</span>
    </SidebarButton>
  );
}

export default SettingsButton;
