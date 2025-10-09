import { useTranslation } from "react-i18next";
import StatCard from "../../components/molecules/StatCard";
import ChartContainer from "../../components/organisms/ChartContainer";
import Icon from "../../components/atoms/Icon";

export default function DashboardPage() {
  const { t } = useTranslation();
  const chart =  [
    { name: "Jan", khr: 0, usd: 0 },
    { name: "Feb", khr: 0, usd: 0 },
    { name: "Mar", khr: 0, usd: 0 },
  ];
  const tx = chart.transactions || { khr: 0, usd: 0 };
  const ag = chart.agent || { khr: 0, usd: 0 };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{t("dashboard.title")}</h1>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-4">
        <StatCard
          title={t("dashboard.totalCustomers")}
          subtitle={t("customers.totalCustomers")}
          value={chart.customers ?? 0}
          icon={<Icon name="users" className="w-5 h-5" />}
          tone="blue"
        />
        <StatCard
          title={t("dashboard.activeBanks")}
          subtitle={t("dashboard.totalBank")}
          value={chart.banks ?? 0}
          icon={<Icon name="bank" className="w-5 h-5" />}
          tone="emerald"
        />
        <StatCard
          title={t("dashboard.totalTransactions")}
          subtitle={`${t("dashboard.khr")}, ${t("dashboard.usd")}`}
          metrics={[
            { label: t("dashboard.khr"), value: tx.khr },
            { label: t("dashboard.usd"), value: tx.usd },
          ]}
          icon={<Icon name="transactions" className="w-5 h-5" />}
          tone="amber"
          decimals={2}
        />
        <StatCard
          title={t("dashboard.agent")}
          subtitle={`${t("dashboard.khr")}, ${t("dashboard.usd")}`}
          metrics={[
            { label: t("dashboard.khr"), value: ag.khr },
            { label: t("dashboard.usd"), value: ag.usd },
          ]}
          icon={<Icon name="receipt" className="w-5 h-5" />}
          tone="rose"
          decimals={2}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 mt-4">
        <div>
          <ChartContainer
            title={t("dashboard.transactionVolume")}
            subtitle={t("dashboard.monthlyTransactionTrends")}
            chips={[
              { label: t("dashboard.khr"), value: tx.khr },
              { label: t("dashboard.usd"), value: tx.usd },
            ]}
            data={chart}
            xKey="name"
            series={[
              { key: "khr", color: "#6366F1" },
              { key: "usd", color: "#10B981" },
            ]}
            decimals={2}
          />
        </div>
      </div>

    </div>
  );
}
