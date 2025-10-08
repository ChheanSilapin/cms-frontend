export default function Table({ columns = [], rows = [], keyField = "id" }) {
  return (
    <div className="card overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 text-left">
            {columns.map((c) => (
              <th key={c.key} className="p-2 text-sm font-medium text-gray-700">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[keyField] ?? i} className="odd:bg-white even:bg-gray-50">
              {columns.map((c) => (
                <td key={c.key} className="p-2 text-sm">
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
          {!rows.length && (
            <tr>
              <td className="p-4 text-sm text-gray-500" colSpan={columns.length}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

