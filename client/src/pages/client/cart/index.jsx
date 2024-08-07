import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductView from './ProductView';
import CartSummary from './CartSummary';

const CartPage = () => {
  return (
    <Grid container mt={3} spacing={0}>
      <Grid item xs={12} mb={2}>
        <Typography variant='h5'>Giỏ hàng</Typography>
      </Grid>
      <Grid item xs={9}>
        <ProductView />
      </Grid>
      <Grid item xs={3}>
        <CartSummary />
      </Grid>
    </Grid>
  );
};

export default CartPage;
