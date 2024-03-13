import { Stack, Typography } from '@mui/material';
import Form from '../../../components/form';

const NewCategoryPage = () => {
  return (
    <Stack>
      <Typography variant='h5' my={2} mx={1}>
        Loại sản phẩm
      </Typography>
      <Form id='form-new' action='/' method='POST' />
    </Stack>
  );
};

export default NewCategoryPage;
