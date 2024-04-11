import { Stack } from '@mui/material';
import TopBanner from './TopBanner';
import FeaturedProduct from './FeaturedProduct';
import FeaturedCategory from './FeaturedCategory';
import PurchasedCustomer from './PurchasedCustomer';
import SaleEvent from './SaleEvent';

const products = [
  {
    id: 'prod-1',
    title: 'MacBook Air 2023 15 inch',
    image: 'https://macone.vn/wp-content/uploads/2023/06/Midnight-300x250.jpg',
    price: 34890000,
    description: 'Apple M2 8GB RAM 256GB SSD - NEW',
    path: '',
  },
  {
    id: 'prod-2',
    title: 'MacBook Air 2020 13 inch',
    image:
      'https://macone.vn/wp-content/uploads/2020/11/macbook-air-gold-m1-2020-300x250.jpeg',
    price: 21500000,
    description: 'Apple M1 16GB RAM 256GB SSD - Like New',
    path: '',
  },
  {
    id: 'prod-3',
    title: 'Macbook Air 2017 13 inch',
    image:
      'https://macone.vn/wp-content/uploads/2017/12/macbook-air-2017-mqd32-300x279.png',
    price: 32990000,
    description: 'Core i5 8GB RAM 256GB SSD - Like New',
    path: '',
  },
  {
    id: 'prod-4',
    title: 'MacBook Air 2019 13 inch',
    image:
      'https://macone.vn/wp-content/uploads/2019/07/gold_19a9226357a74414bea5ed7b5c9f2c0b-e1605251495529-300x279.jpg',
    price: 200000000,
    description: 'Core i5 16GB RAM 256GB SSD - Like New',
    path: '',
  },
];

const HomePage = () => {
  return (
    <Stack spacing={4}>
      <TopBanner />
      <SaleEvent products={products} />
      <FeaturedCategory />
      <FeaturedProduct title='Sản phẩm bán chạy' products={products} />
      <FeaturedProduct title='Sản phẩm mới' products={products} />
      <PurchasedCustomer />
    </Stack>
  );
};

export default HomePage;
