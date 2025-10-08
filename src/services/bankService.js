import { list, get, create, update, remove } from "./crudService";
const base = "/api/banks";
export default {
  list: (params) => list(base, params),
  get: (id) => get(base, id),
  create: (d) => create(base, d),
  update: (id, d) => update(base, id, d),
  remove: (id) => remove(base, id),
};
