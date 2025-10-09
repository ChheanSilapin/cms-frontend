import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
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
import Unauthorized from "./pages/Unauthorized";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";

function AppContent() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if logged in and on login page
    if (user && location.pathname === "/login") {
      navigate("/", { replace: true });
    }
  }, [user, location.pathname, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <PageLayout>
      <Routes>
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/403" element={<Unauthorized />} />
        <Route path="/" element={<DashboardPage />} />
        
        <Route path="/products" element={
          <ProtectedRoute permission="products:read">
            <ProductManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/agents" element={
          <ProtectedRoute permission="agents:read">
            <AgentManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/customers" element={
          <ProtectedRoute permission="customer:read">
            <CustomerManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/teams" element={
          <ProtectedRoute permission="teams:read">
            <TeamManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/promotions" element={
          <ProtectedRoute permission="promotions:read">
            <PromotionManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/banks" element={
          <ProtectedRoute permission="banks:read">
            <BankManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/reports" element={
          <ProtectedRoute permission="reportsread">
            <ReportPage />
          </ProtectedRoute>
        } />
        
        <Route path="/users" element={
          <ProtectedRoute permission="users:read">
            <UserManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/roles" element={
          <ProtectedRoute permission="roles:read">
            <RoleManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="/permissions" element={
          <ProtectedRoute>
            <PermissionManagementPage />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageLayout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}
