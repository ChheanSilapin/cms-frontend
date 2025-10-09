
import { useEffect, useState } from "react";
import { getAgent } from '../services/agentService';

export function useAgent(){
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const agentData = await getAgent();
        setAgents(agentData);
      } catch (err) {
        setError('Failed to load agent');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return { agents, loading, error };
}