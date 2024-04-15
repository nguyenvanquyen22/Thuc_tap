import { Stack, Typography } from '@mui/material';
import ProductTable from './ProductTable';
import CreateProductDrawer from './CreateProductDrawer';
import { useState } from 'react';

const ProductPage = () => {
  const [openNewProduct, setOpenNewProduct] = useState(false);

  return (
    <Stack>
      <Typography variant='h5' my={2} mx={1}>
        Sản phẩm
      </Typography>
      <ProductTable
        onOpenNewProduct={() => {
          setOpenNewProduct(true);
        }}
      />

      <CreateProductDrawer
        open={openNewProduct}
        onClose={() => {
          setOpenNewProduct(false);
        }}
      />
    </Stack>
  );
};

export default ProductPage;
