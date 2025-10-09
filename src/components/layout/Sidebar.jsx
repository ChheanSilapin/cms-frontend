import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import Icon from "../atoms/Icon";

const menu = [
  { label: "nav.dashboard", to: "/", icon: "dashboard" },
  { label: "nav.team", to: "/teams", icon: "team", permission: "teams:read" },
  { label: "nav.product", to: "/products", icon: "product", permission: "products:read" },
  { label: "nav.agent", to: "/agents", icon: "agent", permission: "agents:read" },
  { label: "nav.promotion", to: "/promotions", icon: "promotion", permission: "promotion:read" },
  { label: "nav.bank", to: "/banks", icon: "bank", permission: "banks:read" },
  { label: "nav.customer", to: "/customers", icon: "customer", permission: "customer:read" },
  { label: "nav.report", to: "/reports", icon: "report", permission: "reports:read" },
  { label: "nav.user", to: "/users", icon: "user", permission: "users:read" },
  { label: "nav.role", to: "/roles", icon: "role", permission: "roles:read" },
  { label: "nav.permission", to: "/permissions", icon: "permission" },
];

export default function Sidebar({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { hasPermission } = useAuth();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 md:hidden z-30" onClick={onClose} />
      )}
      <aside
        className={`fixed md:static z-40 inset-y-0 left-0 w-64 border-r bg-white dark:bg-slate-900 dark:border-slate-800 p-3 overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="px-3 py-2 text-xs uppercase text-slate-400">{t("nav.menu")}</div>
        <nav className="space-y-1">
          {menu.map((item) => {
            // Hide menu item if user doesn't have permission
            if (item.permission && !hasPermission(item.permission)) {
              return null;
            }
            
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded text-sm ${
                    isActive
                      ? "bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
                  }`
                }
              >
                <Icon name={item.icon} className="w-4 h-4" />
                <span>{t(item.label)}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
