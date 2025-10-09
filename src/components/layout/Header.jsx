import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { HiMenu } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

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
          <HiMenu className="w-5 h-5" />
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
            <MdDarkMode className="w-5 h-5" />
          ) : (
            <MdLightMode className="w-5 h-5" />
          )}
        </button>
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-800 rounded px-2 py-1"
          >
            
            <div className="hidden md:block text-left">
              <div className="text-md text-gray-600 dark:text-gray-300">
                {user.username}
              </div>
            </div>
            <IoChevronDown className="w-4 h-4 text-gray-400" />
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
