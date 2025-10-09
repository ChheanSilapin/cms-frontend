import api from "./api";

export async function getCustomer() {
    const {data} = await api.get("/api/customers")
    return data;
} 

// no need right now
// export async function getUserById(id) {
//     const {data} = await api.get(`/api/users/${id}`)
//     return data;
// }

export async function createCustomer(userData) {
    await api.post("/api/customers",userData)
} 
export async function updateCustomer(id,userData) {
    await api.put(`/api/customers/${id}`,userData)
} 
export async function deleteCustomer(id) {
  await api.delete(`/api/customers/${id}`)
}


