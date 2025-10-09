import api from "./api";

export async function getAgent() {
    const {data} = await api.get("/api/agents")
    return data;
} 

export async function createCustomer(userData) {
    await api.post("/api/agnets",userData)
} 
export async function updateCustomer(id,userData) {
    await api.put(`/api/agnets/${id}`,userData)
} 
export async function deleteCustomer(id) {
  await api.delete(`/api/agnets/${id}`)
}


