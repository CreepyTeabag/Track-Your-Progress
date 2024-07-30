import { useState } from "react";

import ThemeButton from "./ThemeButton";
import AvatarButton from "./AvatarButton";
import DashboardButton from "./DashboardButton";
import SettingsButton from "./SettingsButton";
import styles from "./Sidebar.module.css";
import SkillsButton from "./SkillsButton";
import ToggleSidebarButton from "./ToggleSidebarButton";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${styles.sidebar} ${isOpen ? "sidebarOpen" : ""}`}>
      <AvatarButton />
      <DashboardButton />
      <SkillsButton />
      <ThemeButton />
      <SettingsButton />

      <ToggleSidebarButton isOpen={isOpen} onClick={toggleSidebar} />
    </div>
  );
}

export default Sidebar;
