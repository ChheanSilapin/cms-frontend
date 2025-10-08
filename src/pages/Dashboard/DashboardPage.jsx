import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{t("dashboard.title")}</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-4">
      </div>
      <div className="grid gap-4 grid-cols-1 mt-4">
        <div>
        </div>
      </div>
    </div>
  );
}
