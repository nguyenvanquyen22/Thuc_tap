import { Grid, Stack, Typography } from '@mui/material';
import FilterProduct from './FilterProduct';
import ListProduct from './ListProduct';

const ProductsPage = () => {
  return (
    <Stack spacing={3} mt={3}>
      <div>
        <div
          style={{
            display: 'inline-block',
            borderBottom: '3px solid #3c4a65',
            paddingBottom: 6,
          }}
        >
          <Typography
            variant='h5'
            color={'#3c4a65'}
            mr={1}
            display={'inline-block'}
          >
            Laptop
          </Typography>
          <Typography fontSize={12} color='#888' display={'inline-block'}>
            (Tổng 64 sản phẩm)
          </Typography>
        </div>
      </div>
      <Grid container>
        <Grid item xs={2}>
          <FilterProduct />
        </Grid>
        <Grid item xs={10}>
          <ListProduct />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProductsPage;
