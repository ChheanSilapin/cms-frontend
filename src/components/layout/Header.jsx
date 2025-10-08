import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function Header({ onToggleSidebar }) {
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || i18n.language || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const v = !dark;
    setDark(v);
    document.documentElement.classList.toggle("dark", v);
    localStorage.setItem("theme", v ? "dark" : "light");
  };

  const changeLanguage = (lng) => {
    setLang(lng);
    i18n.changeLanguage(lng);
    try {
      document.documentElement.setAttribute("lang", lng);
      localStorage.setItem("lang", lng);
    } catch {}
  };

  return (
    <header className="h-14 border-b bg-white dark:bg-slate-900 dark:border-slate-800 flex items-center justify-between px-4 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800"
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <span className="font-semibold">CMS</span>
      </div>
      <div className="flex items-center gap-3">
        <select
          aria-label="Language"
          className="input w-28 py-1 text-left"
          value={lang}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="km">ខ្មែរ</option>
        </select>
        <button
          onClick={toggleDark}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.04 1.46l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM17 13h3v-2h-3v2zM4.96 18.54l-1.79 1.8 1.41 1.41 1.8-1.79-1.42-1.42zM11 23h2v-3h-2v3zm7.04-4.46l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42z" />
            </svg>
          )}
        </button>
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-800 rounded px-2 py-1"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-slate-700 grid place-items-center text-blue-600 dark:text-blue-300 font-medium">
              {(user?.username || user?.name || "U")[0].toUpperCase()}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {user?.username || user?.name || "User"}
              </div>
              <div className="text-[10px] text-gray-400">Admin</div>
            </div>
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {showUserMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowUserMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-dropdown border border-slate-200 dark:border-slate-700 py-1 z-20">
                <button
                  onClick={async () => {
                    setShowUserMenu(false);
                    await logout();
                    window.location.href = "/login";
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  {t("auth.logout")}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
