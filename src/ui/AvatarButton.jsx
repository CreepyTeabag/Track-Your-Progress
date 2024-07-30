import { useNavigate } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { PiScanSmiley } from "react-icons/pi";

function AvatarButton() {
  const navigate = useNavigate();

  return (
    <SidebarButton onClick={() => navigate("/account")}>
      <PiScanSmiley />
      <span>Account</span>
    </SidebarButton>
  );
}

export default AvatarButton;
