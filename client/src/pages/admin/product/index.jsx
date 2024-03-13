import { Stack, Typography } from '@mui/material';
import ProductTable from './ProductTable';

const ProductPage = () => {
  return (
    <Stack>
      <Typography variant='h5' my={2} mx={1}>
        Sản phẩm
      </Typography>
      <ProductTable />
    </Stack>
  );
};

export default ProductPage;
