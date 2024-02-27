import ClientLayout from '../layouts/client';
import HomePage from '../pages/client/home';

const ClientRoutes = {
  path: '/',
  element: <ClientLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
  ],
};

export default ClientRoutes;
