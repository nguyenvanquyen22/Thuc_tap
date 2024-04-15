import AdminLayout from '../layouts/admin';
import DashboardPage from '../pages/admin/dashboard';
import CategoryPage from '../pages/admin/category';
import NewCategoryPage from '../pages/admin/new-category';
import CouponPage from '../pages/admin/coupon';
import NewCouponPage from '../pages/admin/new-coupon';
import CustomerPage from '../pages/admin/custormer';
import OrderPage from '../pages/admin/order';
import ProductPage from '../pages/admin/product';
import NewProductPage from '../pages/admin/new-product';
import CollectionPage from '../pages/admin/collection';
import NewCollectionPage from '../pages/admin/new-collection';
import SettingPage from '../pages/admin/setting';

const AdminRoutes = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    {
      path: '',
      element: <DashboardPage />,
    },
    {
      path: 'categories',
      element: <CategoryPage />,
    },
    {
      path: 'categories/new',
      element: <NewCategoryPage />,
    },
    {
      path: 'coupons',
      element: <CouponPage />,
    },
    {
      path: 'coupons/new',
      element: <NewCouponPage />,
    },
    {
      path: 'customers',
      element: <CustomerPage />,
    },
    {
      path: 'orders',
      element: <OrderPage />,
    },
    {
      path: 'products',
      element: <ProductPage />,
    },
    {
      path: 'products/new',
      element: <NewProductPage />,
    },
    {
      path: 'collections',
      element: <CollectionPage />,
    },
    {
      path: 'collections/new',
      element: <NewCollectionPage />,
    },
    {
      path: 'settings',
      element: <SettingPage />,
    },
  ],
};

export default AdminRoutes;
