import AdminLayout from '../layouts/admin';
import DashboardPage from '../pages/admin/dashboard';
import CategoryPage from '../pages/admin/category';
import NewCategoryPage from '../pages/admin/category/new-category';
import EditCategoryPage from '../pages/admin/category/edit-category';
import CouponPage from '../pages/admin/coupon';
import NewCouponPage from '../pages/admin/coupon/new-coupon';
import EditCouponPage from '../pages/admin/coupon/edit-coupon';
import CustomerPage from '../pages/admin/custormer';
import OrderPage from '../pages/admin/order';
import ProductPage from '../pages/admin/product';
import NewProductPage from '../pages/admin/product/new-product';
import EditProductPage from '../pages/admin/product/edit-product';
import CollectionPage from '../pages/admin/collection';
import NewCollectionPage from '../pages/admin/collection/new-collection';
import EditCollectionPage from '../pages/admin/collection/edit-collection';
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
      path: 'categories/edit/:id',
      element: <EditCategoryPage />,
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
      path: 'coupons/edit/:id',
      element: <EditCouponPage />,
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
      path: 'products/edit/:id',
      element: <EditProductPage />,
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
      path: 'collections/edit/:id',
      element: <EditCollectionPage />,
    },
    {
      path: 'settings',
      element: <SettingPage />,
    },
  ],
};

export default AdminRoutes;
