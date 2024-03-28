import { Stack, Typography } from '@mui/material';
import CustomerTable from './CustomerTable';

const CustomerPage = () => {
  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Danh sách khách hàng
      </Typography>
      <CustomerTable />
    </Stack>
  );
};

export default CustomerPage;
