import { Grid } from '@mui/material';
import DeliveryInformation from './DeliveryInformation';
import CartPayment from './CartPayment';

const products = [
  {
    id: 'SP123',
    title: 'Vỏ Case ASUS A21 BLK  (Mid Tower / Màu Đen)',
    image:
      'https://hanoicomputercdn.com/media/product/250_75357_vo_case_asus_a21_15.png',
    quantity: 1,
    price: 1500000,
  },
  {
    id: 'SP124',
    title: 'Vỏ Case ASUS A21 BLK  (Mid Tower / Màu Đen)',
    image:
      'https://hanoicomputercdn.com/media/product/250_75357_vo_case_asus_a21_15.png',
    quantity: 1,
    price: 1500000,
  },
  {
    id: 'SP125',
    title: 'Vỏ Case ASUS A21 BLK  (Mid Tower / Màu Đen)',
    image:
      'https://hanoicomputercdn.com/media/product/250_75357_vo_case_asus_a21_15.png',
    quantity: 1,
    price: 1500000,
  },
];

const CheckoutPage = () => {
  return (
    <Grid container bgcolor={'#fff'} borderRadius={1} p={3}>
      <Grid item xs={8}>
        <DeliveryInformation products={products} />
      </Grid>
      <Grid item xs={4}>
        <CartPayment products={products} />
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;
