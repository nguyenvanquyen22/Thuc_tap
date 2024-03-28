import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Form from '../../../../components/form';
import { ArrowBack } from '@mui/icons-material';

const NewCategoryPage = () => {
  const formFields = [
    {
      id: 'id-category',
      name: 'id',
      title: 'Mã',
      type: 'text',
      xs: 12,
      placeholder: 'Mã loại mặt hàng',
    },
    {
      id: 'name-category',
      title: 'Tên',
      name: 'name',
      type: 'text',
      xs: 12,
      placeholder: 'Tên loại mặt hàng',
    },
  ];

  const initialValues = {
    id: '',
    name: '',
  };

  return (
    <Stack alignItems={'center'}>
      <Stack width={'calc(100% - 260px - 10%)'}>
        <Grid container mb={2} alignItems={'center'}>
          <IconButton href='/admin/categories'>
            <ArrowBack />
          </IconButton>
          <Typography variant='h5' mx={1}>
            Tạo loại sản phẩm
          </Typography>
        </Grid>
        <Form
          id='form-new'
          action='/'
          method='POST'
          formFields={formFields}
          initialValues={initialValues}
        />
      </Stack>
    </Stack>
  );
};

export default NewCategoryPage;
