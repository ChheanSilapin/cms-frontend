import { currency } from "../../utils/formatters";

export default function StatCard({
  title,
  subtitle,
  value,
  metrics = [],
  trend,
  icon,
  tone = "blue",
  decimals = 0,
}) {
  const renderValue = () => {
    if (metrics?.length) {
      return (
        <div className="flex items-center gap-2 flex-wrap">
          {metrics.map((m) => (
            <span key={m.label} className="badge">
              {m.label}{" "}
              <span className="font-medium">
                {typeof m.value === "number"
                  ? currency(m.value, decimals)
                  : m.value}
              </span>
            </span>
          ))}
        </div>
      );
    }
    return (
      <div className="text-2xl font-semibold">
        {typeof value === "number" ? currency(value, decimals) : value}
      </div>
    );
  };

  const trendClass = trend?.startsWith("-")
    ? "text-red-500"
    : "text-emerald-500";

  const toneClass =
    {
      blue: "bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-300",
      emerald:
        "bg-emerald-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-300",
      amber: "bg-amber-50 text-amber-600 dark:bg-slate-800 dark:text-amber-300",
      rose: "bg-rose-50 text-rose-600 dark:bg-slate-800 dark:text-rose-300",
    }[tone] || "bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-300";

  return (
    <div className="card p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {title}
          </div>
          {subtitle && (
            <div className="text-[11px] text-gray-400 mt-0.5">{subtitle}</div>
          )}
        </div>
        {icon && (
          <div
            className={`w-9 h-9 grid place-items-center rounded-lg ${toneClass}`}
          >
            {icon}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center gap-2">
        {renderValue()}
        {trend && <span className={`text-xs ${trendClass}`}>{trend}</span>}
      </div>
    </div>
  );
}
