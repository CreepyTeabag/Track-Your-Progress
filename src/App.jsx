import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Skills from "./pages/Skills";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Skill from "./pages/Skill";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="skills"
            element={<Skills isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route path="skill/:skillId" element={<Skill />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
