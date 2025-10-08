import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { currency } from "../../utils/formatters";

export default function ChartContainer({
  title,
  subtitle,
  chips = [],
  data = [],
  xKey = "name",
  series = [{ key: "value", color: "#2563eb" }],
  decimals = 0,
}) {
  return (
    <div className="card p-4">
      {(title || chips?.length) && (
        <div className="flex items-center justify-between mb-3">
          <div>
            {title && <div className="text-sm text-gray-700">{title}</div>}
            {subtitle && (
              <div className="text-[11px] text-gray-400">{subtitle}</div>
            )}
          </div>
          {!!chips?.length && (
            <div className="flex items-center gap-2">
              {chips.map((c) => (
                <span key={c.label} className="badge">
                  {c.label}{" "}
                  <span className="font-medium">
                    {typeof c.value === "number"
                      ? currency(c.value, decimals)
                      : c.value}
                  </span>
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            {series.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {series.length > 1 && (
        <div className="mt-3 flex items-center gap-4">
          {series.map((s) => (
            <div
              key={s.key}
              className="flex items-center gap-2 text-xs text-gray-600"
            >
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ backgroundColor: s.color }}
              />
              {s.key.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
