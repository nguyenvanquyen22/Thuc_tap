import ClientLayout from '../layouts/client';
import CartPage from '../pages/client/cart';
import CheckoutPage from '../pages/client/checkout';
import HomePage from '../pages/client/home';
import OrderDetail from '../pages/client/order-detail';
import ProductDetailPage from '../pages/client/product-detail';
import ProductsPage from '../pages/client/products';
import ProfilePage from '../pages/client/profile';

const ClientRoutes = {
  path: '/',
  element: <ClientLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
    {
      path: '/checkout',
      element: <CheckoutPage />,
    },
    {
      path: '/products',
      element: <ProductsPage />,
    },
    {
      path: '/products/:id',
      element: <ProductDetailPage />,
    },
    {
      path: '/account',
      element: <ProfilePage />,
    },
    {
      path: '/account/orders/:id',
      element: <OrderDetail />,
    },
  ],
};

export default ClientRoutes;
