import api from "./api";

export async function login({ username, password }) {
  const { data } = await api.post("/api/login", { username, password });
  // Expecting { token, user }
  return data ?? { token: "dev-token", user: { username } };
}

export async function me() {
  const { data } = await api.get("/api/me");
  return data;
}

export async function logout() {
  try {
    await api.post("/api/logout");
  } catch (error) {
    console.error("Logout API error:", error);
  }
}
