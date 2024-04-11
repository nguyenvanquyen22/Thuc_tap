import { Stack, Typography } from '@mui/material';
import CollectionTable from './CollectionTable';

const CollectionPage = () => {
  return (
    <Stack>
      <Typography variant='h5' mb={2} mx={1}>
        Bộ sưu tập sản phẩm
      </Typography>
      <CollectionTable />
    </Stack>
  );
};

export default CollectionPage;
