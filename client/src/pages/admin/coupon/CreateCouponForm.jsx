import FormDrawer from '../../../components/FormDrawer';

const CreateCouponForm = (props) => {
  const { open, onClose } = props;

  const formFields = [
    {
      id: 'id-coupon',
      name: 'id',
      label: 'Mã',
      type: 'text',
      placeholder: 'ID mã giảm giá',
    },
    {
      id: 'name-coupon',
      label: 'Tên mã giảm giá',
      name: 'name',
      type: 'text',
      placeholder: 'Tên mã giảm giá',
    },
    {
      id: 'status-coupon',
      label: 'Trạng thái',
      name: 'status',
      type: 'checkbox',
      placeholder: 'Trạng thái mã giảm giá',
    },
    {
      id: 'discount-amount-coupon',
      label: 'Số tiền chiết khấu',
      name: 'discountAmount',
      type: 'number',
      placeholder: 'Số tiền chiết khấu',
    },
    {
      id: 'start-at-coupon',
      label: 'Ngày bắt đầu',
      name: 'startAt',
      type: 'date',
      placeholder: 'Ngày bắt đầu',
    },
    {
      id: 'end-at-coupon',
      label: 'Ngày kết thúc',
      name: 'endAt',
      type: 'date',
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
    <FormDrawer
      title={'mã giảm giá'}
      formFields={formFields}
      initialValues={initialValues}
      open={open}
      onClose={onClose}
      btnText={'Tạo mã giảm giá'}
      sx={{
        width: '50%',
      }}
    />
  );
};

export default CreateCouponForm;
