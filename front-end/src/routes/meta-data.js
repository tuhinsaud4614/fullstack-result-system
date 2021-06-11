export const ADMIN_ROUTES = {
  auth: { name: "Auth", path: "/admin/auth" },
  dashboard: { name: "Dashboard", path: "/admin" },
  users: { name: "Users", path: "/admin/users" },
  classes: { name: "Classes", path: "/admin/classes" },
  subjects: { name: "Subjects", path: "/admin/subjects" },
};

export const TEACHER_ROUTES = {
  auth: { name: "Auth", path: "/teacher/auth" },
  home: { name: "Home", path: "/teacher" },
  pupils: { name: "Pupils", path: "/teacher/pupils" },
  test: { name: "Test", path: "/teacher/test" },
};

export const USER_ROUTES = { home: { name: "Home", path: "/" } };
