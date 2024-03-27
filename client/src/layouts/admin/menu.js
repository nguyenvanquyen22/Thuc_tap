import {
  Group,
  Home,
  Inventory,
  Link,
  Redeem,
  Sell,
  Settings,
  ViewInAr,
} from '@mui/icons-material';

export const menu = [
  {
    id: 'quick-links',
    title: '',
    children: [
      {
        id: 'dashboard',
        title: 'Bảng điều khiển',
        path: '/admin',
        icon: Home,
      },
    ],
  },
  {
    id: 'catalog',
    title: 'Mục lục',
    children: [
      {
        id: 'products',
        title: 'Sản phẩm',
        path: '/admin/products',
        icon: Inventory,
      },
      {
        id: 'categories',
        title: 'Loại sản phẩm',
        path: '/admin/categories',
        icon: Link,
      },
      {
        id: 'collections',
        title: 'Bộ sưu tập',
        path: '/admin/collections',
        icon: Sell,
      },
    ],
  },
  {
    id: 'sale',
    title: 'Bán hàng',
    children: [
      {
        id: 'orders',
        title: 'Đơn hàng',
        path: '/admin/orders',
        icon: ViewInAr,
      },
    ],
  },
  {
    id: 'customer',
    title: 'Khách hàng',
    children: [
      {
        id: 'custormers',
        title: 'Khách hàng',
        path: '/admin/customers',
        icon: Group,
      },
    ],
  },
  {
    id: 'promotion',
    title: 'Khuyến mãi',
    children: [
      {
        id: 'coupons',
        title: 'Mã giảm giá',
        path: '/admin/coupons',
        icon: Redeem,
      },
    ],
  },
  {
    id: 'setting',
    title: 'Cấu hình',
    children: [
      {
        id: 'settings',
        title: 'Cài đặt trang',
        path: '/admin/settings',
        icon: Settings,
      },
    ],
  },
];
