import api from "./api";

export async function getUser() {
    const {data} = await api.get("/api/users")
    return data;
} 

// no need right now
// export async function getUserById(id) {
//     const {data} = await api.get(`/api/users/${id}`)
//     return data;
// }

export async function createUser(userData) {
    await api.post("/api/users",userData)
} 
export async function updateUser(id,userData) {
    await api.put(`/api/users/${id}`,userData)
} 
export async function deleteUser(id) {
  await api.delete(`/api/users/${id}`)
}


