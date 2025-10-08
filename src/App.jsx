import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ROUTES, MENU } from "./constants/routes";
import PageLayout from "./components/layout/PageLayout";
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

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) return <Navigate to={ROUTES.login} replace />;

  // Render protected content
  return <PageLayout menu={MENU}>{children}</PageLayout>;
}

function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to dashboard if already authenticated
  if (user) return <Navigate to={ROUTES.dashboard} replace />;

  // Render login page
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.login}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.dashboard}
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.products}
            element={
              <PrivateRoute>
                <ProductManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.agents}
            element={
              <PrivateRoute>
                <AgentManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.customers}
            element={
              <PrivateRoute>
                <CustomerManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.teams}
            element={
              <PrivateRoute>
                <TeamManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.promotions}
            element={
              <PrivateRoute>
                <PromotionManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.banks}
            element={
              <PrivateRoute>
                <BankManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.reports}
            element={
              <PrivateRoute>
                <ReportPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.users}
            element={
              <PrivateRoute>
                <UserManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.roles}
            element={
              <PrivateRoute>
                <RoleManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.permissions}
            element={
              <PrivateRoute>
                <PermissionManagementPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
