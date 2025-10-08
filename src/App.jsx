import { BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ProductManagementPage from "./pages/Products/ProductManagementPage";
import AgentManagementPage from "./pages/Agents/AgentManagementPage";
import CustomerManagementPage from "./pages/Customers/CustomerManagementPage";
import TeamManagementPage from "./pages/Team/TeamManagementPage";
import PromotionManagementPage from "./pages/Promotions/PromotionManagementPage";
import BankManagementPage from "./pages/Banks/BankManagementPage";
import ReportPage from "./pages/Reports/ReportPage";
import UserManagementPage from "./pages/Users/UserManagementPage";
import RoleManagementPage from "./pages/Roles/RoleManagementPage";
import PermissionManagementPage from "./pages/Permissions/PermissionManagementPage";



export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/login"}
            element={
                <LoginPage />
            }
          />
          <Route
            path={"/"}
            element={
                <DashboardPage />
            }
          />
          <Route
            path={"/products"}
            element={
                <ProductManagementPage />
            }
          />
          <Route
            path={"/agents"}
            element={
                <AgentManagementPage />
            }
          />
          <Route
            path={"/customers"}
            element={
                <CustomerManagementPage />
            }
          />
          <Route
            path={"/teams"}
            element={

                <TeamManagementPage />

            }
          />
          <Route
            path={"/promotions"}
            element={

                <PromotionManagementPage />

            }
          />
          <Route
            path={"/banks"}
            element={

                <BankManagementPage />

            }
          />
          <Route
            path={"/reports"}
            element={

                <ReportPage />

            }
          />
          <Route
            path={"/users"}
            element={
                <UserManagementPage />
            }
          />
          <Route
            path={"/roles"}
            element={
                <RoleManagementPage />
            }
          />
          <Route
            path={"/permission"}
            element={
                <PermissionManagementPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
