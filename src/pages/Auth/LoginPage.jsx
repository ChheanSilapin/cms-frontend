import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form);
      navigate("/");
    } catch (e) {
      setError(e?.response?.data?.message || t("auth.loginFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={submit} className="card p-6 w-96 space-y-3">
        <h1 className="text-lg font-semibold">{t("auth.login")}</h1>
        <input
          className="input w-full"
          placeholder={t("auth.username")}
          autoFocus
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="input w-full"
          placeholder={t("auth.password")}
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={loading} className="btn w-full">
          {loading ? t("auth.signingIn") : t("auth.login")}
        </button>
      </form>
    </div>
  );
}
