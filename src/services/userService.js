import { list, get, create, update, remove } from "./crudService";
import api from "./api";

export const users = {
  list: (params) => list("/api/users", params),
  get: (id) => get("/api/users", id),
  me: () => api.get("/api/me").then((r) => r.data),
  create: (d) => create("/api/users", d),
  update: (id, d) => update("/api/users", id, d),
  changePassword: (id, data) =>
    api.put(`/api/users/${id}/password`, data).then((r) => r.data),
  remove: (id) => remove("/api/users", id),
};

export const roles = {
  list: (params) => list("/api/roles", params),
  get: (id) => get("/api/roles", id),
  create: (d) => create("/api/roles", d),
  update: (id, d) => update("/api/roles", id, d),
  remove: (id) => remove("/api/roles", id),
};

export const permissions = {
  list: (params) => list("/api/permissions", params),
  get: (id) => get("/api/permissions", id),
  create: (d) => create("/api/permissions", d),
  update: (id, d) => update("/api/permissions", id, d),
  remove: (id) => remove("/api/permissions", id),
};

export default { users, roles, permissions };
