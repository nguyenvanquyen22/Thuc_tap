import AdminLayout from '../layouts/admin';

const AdminRoutes = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    {
      path: 'dashboard',
      element: <>Dashboard</>,
    },
  ],
};

export default AdminRoutes;
