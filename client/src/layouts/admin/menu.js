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
import {} from '@ant-design/icons';

export const menu = [
  {
    id: 'quick-links',
    title: 'Quick links',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: Home,
      },
      {
        id: 'new-product',
        title: 'New Product',
        icon: Inventory,
      },
      {
        id: 'new-coupon',
        title: 'New Coupon',
        icon: Redeem,
      },
    ],
  },
  {
    id: 'catalog',
    title: 'Catalog',
    children: [
      {
        id: 'products',
        title: 'Products',
        icon: Inventory,
      },
      {
        id: 'categories',
        title: 'Categories',
        icon: Link,
      },
      {
        id: 'collections',
        title: 'Collections',
        icon: Sell,
      },
    ],
  },
  {
    id: 'sale',
    title: 'Sale',
    children: [
      {
        id: 'orders',
        title: 'Orders',
        icon: ViewInAr,
      },
    ],
  },
  {
    id: 'customer',
    title: 'Customer',
    children: [
      {
        id: 'custormers',
        title: 'Customers',
        icon: Group,
      },
    ],
  },
  {
    id: 'promotion',
    title: 'Promotion',
    children: [
      {
        id: 'coupons',
        title: 'Coupons',
        icon: Redeem,
      },
    ],
  },
  {
    id: 'setting',
    title: 'Setting',
    children: [
      {
        id: 'settings',
        title: 'Settings',
        icon: Settings,
      },
    ],
  },
];
