import { Stack, Typography } from '@mui/material';
import CouponTable from './CouponTable';

const CouponPage = () => {
  return (
    <Stack>
      <Typography variant='h5' my={2} mx={1}>
        Danh sách mã giảm giá
      </Typography>
      <CouponTable />
    </Stack>
  );
};

export default CouponPage;
