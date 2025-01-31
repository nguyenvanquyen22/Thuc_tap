import { Stack, Typography } from '@mui/material';
import CollectionTable from './CollectionTable';

const CollectionPage = () => {
  return (
    <Stack>
      <Typography variant='h5' my={2} mx={1}>
        Loại sản phẩm
      </Typography>
      <CollectionTable />
    </Stack>
  );
};

export default CollectionPage;
