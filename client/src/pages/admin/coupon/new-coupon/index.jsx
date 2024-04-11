import { ArrowBack } from '@mui/icons-material';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Form from '../../../../components/form';
const NewCouponPage = () => {
  const generalFormFields = [
    {
      id: 'id-coupon',
      name: 'id',
      title: 'ID',
      type: 'text',
      xs: 12,
      placeholder: 'ID mã giảm giá',
    },
    {
      id: 'name-coupon',
      title: 'Tên',
      name: 'name',
      type: 'text',
      xs: 12,
      placeholder: 'Tên mã giảm giá',
    },
    {
      id: 'status-coupon',
      title: 'Trạng thái',
      name: 'status',
      type: 'checkbox',
      xs: 12,
      placeholder: 'Trạng thái mã giảm giá',
    },
    {
      id: 'discount-amount-coupon',
      title: 'Số tiền chiết khấu',
      name: 'discountAmount',
      type: 'number',
      xs: 4,
      placeholder: 'Số tiền chiết khấu',
    },
    {
      id: 'start-at-coupon',
      title: 'Ngày bắt đầu',
      name: 'startAt',
      type: 'date',
      xs: 4,
      placeholder: 'Ngày bắt đầu',
    },
    {
      id: 'end-at-coupon',
      title: 'Ngày kết thúc',
      name: 'endAt',
      type: 'date',
      xs: 4,
      placeholder: 'Ngày kết thúc',
    },
  ];

  const initialValues = {
    id: '',
    name: '',
    status: false,
    discountAmount: 0,
    startAt: '',
    endAt: '',
  };

  return (
    <Stack alignItems={'center'}>
      <Stack width={'calc(100% - 260px - 10%)'}>
        <Grid container alignItems={'center'}>
          <IconButton href='/admin/coupons'>
            <ArrowBack />
          </IconButton>
          <Typography variant='h5' my={2} mx={1}>
            Sửa mã giảm giá
          </Typography>
        </Grid>

        <Form
          id='form-new-coupon'
          action='/'
          method='POST'
          formFields={generalFormFields}
          initialValues={initialValues}
        >
          <></>
        </Form>
      </Stack>
    </Stack>
  );
};

export default NewCouponPage;
