import { Stack, Typography } from '@mui/material';
import CategoryTable from './CategoryTable';

const CategoryPage = () => {
  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Loại sản phẩm
      </Typography>
      <CategoryTable />
    </Stack>
  );
};

export default CategoryPage;
