import { useRoutes } from 'react-router-dom';

import ClientRoutes from './ClientRoutes';
import AdminRoutes from './AdminRoutes';

export default function Routes() {
  return useRoutes([ClientRoutes, AdminRoutes]);
}
