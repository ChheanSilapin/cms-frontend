import api from "./api";

export async function getSummary() {
  try {
    const { data } = await api.get("/api/customer");
    return data;
  } catch (e) {
    console.warn(
      "Dashboard API not available, using fallback data:",
      e.message
    );
    
    return {
      customers: 0,
      banks: 0,
      transactions: { khr: 0, usd: 0 },
      agent: { khr: 0, usd: 0 },
      chart: [
        { name: "Jan", khr: 0, usd: 0 },
        { name: "Feb", khr: 0, usd: 0 },
        { name: "Mar", khr: 0, usd: 0 },
        { name: "Apr", khr: 0, usd: 0 },
        { name: "May", khr: 0, usd: 0 },
        { name: "Jun", khr: 0, usd: 0 },
      ],
    };
  }
}
