import {useAgent} from "../../hooks/useAgent"


export default function AgentManagementPage(){

  const { agents, loading, error } = useAgent();


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={() => alert("Create User")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + New User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-slate-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Credit US
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Credit KH
              </th>
        
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-gray-700">
            {agents && agents.length > 0 ? (
              agents.map((agent,index) => (
                <tr key={agent.id} className="hover:bg-gray-50 dark:hover:bg-slate-800">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {index +1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {agent.agent_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    {agent.team?.team_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    
                      {agent.products?.product_name}
                    
                  </td>
                  
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    ${agent.credit_us}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    ៛{agent.credit_kh}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 mr-4"
                    >
                      Edit
                    </button>
                    <button

                      className="text-red-600 hover:text-red-900 dark:text-red-400 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                  No agent found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Total Count */}
      {agents && agents.length > 0 && (
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Total: <span className="font-semibold">{agents.length}</span> agetns
        </div>
      )}
    </div>
  );
}

