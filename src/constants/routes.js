export const ROUTES = {
  login: "/login",
  dashboard: "/",
  products: "/products",
  agents: "/agents",
  customers: "/customers",
  teams: "/teams",
  promotions: "/promotions",
  banks: "/banks",
  reports: "/reports",
  users: "/users",
  roles: "/roles",
  permissions: "/permissions",
};

export const MENU = [
  { labelKey: "nav.dashboard", to: ROUTES.dashboard, icon: "dashboard" },
  { labelKey: "nav.team", to: ROUTES.teams, icon: "team" },
  { labelKey: "nav.product", to: ROUTES.products, icon: "product" },
  { labelKey: "nav.agent", to: ROUTES.agents, icon: "agent" },
  { labelKey: "nav.promotion", to: ROUTES.promotions, icon: "promotion" },
  { labelKey: "nav.bank", to: ROUTES.banks, icon: "bank" },
  { labelKey: "nav.customer", to: ROUTES.customers, icon: "customer" },
  { labelKey: "nav.report", to: ROUTES.reports, icon: "report" },
  { labelKey: "nav.user", to: ROUTES.users, icon: "user" },
  { labelKey: "nav.role", to: ROUTES.roles, icon: "role" },
  { labelKey: "nav.permission", to: ROUTES.permissions, icon: "permission" },
];
