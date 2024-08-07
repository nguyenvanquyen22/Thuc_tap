import { Stack, Typography } from '@mui/material';
import CategoryTable from './CategoryTable';
import CreateCategoryDrawer from './CreateCategoryDrawer';
import { useState } from 'react';

const CategoryPage = () => {
  const [openNewCategory, setOpenNewCategory] = useState(false);

  return (
    <Stack>
      <Typography variant='h5' my={2} mx={1}>
        Loại sản phẩm
      </Typography>
      <CategoryTable
        onOpenNew={() => {
          setOpenNewCategory(true);
        }}
      />

      <CreateCategoryDrawer
        open={openNewCategory}
        onClose={() => {
          setOpenNewCategory(false);
        }}
      />
    </Stack>
  );
};

export default CategoryPage;
