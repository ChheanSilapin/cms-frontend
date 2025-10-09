
import { useEffect, useState } from "react";
import { getUser } from '../services/userService';

export function useUser(){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userData = await getUser();
        setUsers(userData);
      } catch (err) {
        setError('Failed to load users.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return { users, loading, error };
}