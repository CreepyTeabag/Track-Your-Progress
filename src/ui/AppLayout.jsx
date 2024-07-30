import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Sidebar from "./Sidebar";
import Main from "./Main";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
