import { useNavigate } from "react-router-dom";
import { MdWarning } from "react-icons/md";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-950">
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full mb-6">
          <MdWarning className="w-12 h-12 text-red-600 dark:text-red-300" />
        </div>

        <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">
          403
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Access Denied
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          You don't have permission to access this page. 
          Please contact your administrator if you believe this is an error.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Go Back
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
