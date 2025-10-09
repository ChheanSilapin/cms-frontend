import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoginPage() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await login(username, password);
      // Clear error on success
      setError("");
    } catch (err) {
      setError(err?.response?.data?.detail || err?.response?.data?.message || t("auth.loginFailed"));
    } finally {
      setLoading(false);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Clear error when user starts typing
    if (error) setError("");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 dark:bg-slate-950">
      <form onSubmit={handleSubmit} className="card p-6 w-96 space-y-4">
        <h1 className="text-xl font-semibold">{t("auth.login")}</h1>
        <input
          className="input w-full"
          placeholder={t("auth.username")}
          value={username}
          onChange={handleUsernameChange}
          disabled={loading}
          required
        />
        
        <div className="relative">
          <input
            className="input w-full pr-10"
            type={showPassword ? "text" : "password"}
            placeholder={t("auth.password")}
            value={password}
            onChange={handlePasswordChange}
            disabled={loading}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50"
            disabled={loading}
            tabIndex={-1}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="w-5 h-5" />
            ) : (
              <AiOutlineEye className="w-5 h-5" />
            )}
          </button>
        </div>
        {error && (
          <div className="p-3 text-sm text-red-800 bg-red-100 border border-red-200 rounded dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">
            {error}
          </div>
        )}
        <button type="submit" className="btn w-full" disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
              {t("auth.loggingIn") || "Logging in..."}
            </span>
          ) : (
            t("auth.login")
          )}
        </button>
      </form>
    </div>
  );
}
