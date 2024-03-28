import { Stack, Typography } from '@mui/material';
import OrderTable from './OrderTable';

const OrderPage = () => {
  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Danh sách đơn hàng
      </Typography>
      <OrderTable />
    </Stack>
  );
};

export default OrderPage;
