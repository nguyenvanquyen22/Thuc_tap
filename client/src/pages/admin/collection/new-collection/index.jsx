import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Form from '../../../../components/form';
import { ArrowBack } from '@mui/icons-material';
import AddProductCollection from '../common/AddProductCollection';

const NewCollectionPage = () => {
  const generalFormFields = [
    {
      id: 'id-collection',
      name: 'id',
      title: 'Mã',
      type: 'text',
      xs: 12,
      placeholder: 'Mã bộ sưu tập',
    },
    {
      id: 'name-collection',
      title: 'Tên',
      name: 'name',
      type: 'text',
      xs: 12,
      placeholder: 'Tên bộ sưu tập',
    },
  ];

  const initialValues = {
    id: '',
    name: '',
  };

  return (
    <Stack alignItems={'center'}>
      <Stack width={'calc(100% - 260px - 10%)'}>
        <Grid container alignItems={'center'}>
          <IconButton href='/admin/collections'>
            <ArrowBack />
          </IconButton>
          <Typography variant='h5' my={2} mx={1}>
            Tạo bộ sưu tập
          </Typography>
        </Grid>

        <Form
          id='form-new-collection'
          action='/'
          method='POST'
          formFields={generalFormFields}
          initialValues={initialValues}
        >
          <AddProductCollection />
        </Form>
      </Stack>
    </Stack>
  );
};

export default NewCollectionPage;
