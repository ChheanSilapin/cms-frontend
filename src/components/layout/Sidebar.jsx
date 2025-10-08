import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Icon from "../atoms/Icon";

export default function Sidebar({ menu = [], isOpen = true, onClose }) {
  const { t } = useTranslation();
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed md:static z-40 inset-y-0 left-0 w-64 border-r bg-white dark:bg-slate-900 dark:border-slate-800 p-3 overflow-y-auto transform transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="px-3 py-2 text-[11px] uppercase tracking-wide text-slate-400">
          {t("nav.menu")}
        </div>
        <nav className="space-y-1">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded text-sm ${
                  isActive
                    ? "bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`
              }
              end={item.to === "/"}
              onClick={onClose}
            >
              <span className="inline-grid place-items-center w-7 h-7 rounded bg-gray-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <Icon name={item.icon} className="w-4 h-4" />
              </span>
              <span>{t(item.labelKey)}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
