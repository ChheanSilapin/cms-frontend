import api from "./api";

export const list = (path, params) =>
  api.get(path, { params }).then((r) => r.data);
export const get = (path, id) => api.get(`${path}/${id}`).then((r) => r.data);
export const create = (path, data) => api.post(path, data).then((r) => r.data);
export const update = (path, id, data) =>
  api.put(`${path}/${id}`, data).then((r) => r.data);
export const remove = (path, id) =>
  api.delete(`${path}/${id}`).then((r) => r.data);
