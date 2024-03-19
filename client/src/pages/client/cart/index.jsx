import Typography from '@mui/material/Typography';
import ProductView from './ProductView';
import CartSummary from './CartSummary';
import { Stack } from '@mui/material';

const CartPage = () => {
  return (
    <Stack bgcolor={'#fff'} p={3} spacing={3} my={3} borderRadius={1}>
      <Typography variant='h5'>Giỏ hàng</Typography>
      <ProductView />
      <CartSummary />
    </Stack>
  );
};

export default CartPage;
