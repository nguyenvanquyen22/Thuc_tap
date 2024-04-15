import FormDrawer from '../../../components/FormDrawer';

const CreateCategoryDrawer = (props) => {
  const { open, onClose } = props;
  const formFields = [
    {
      id: 'id-category',
      name: 'codes',
      label: 'Mã loại',
      type: 'text',
      placeholder: 'Mã loại mặt hàng',
    },
    {
      id: 'name-category',
      label: 'Tên loại',
      name: 'name',
      type: 'text',
      placeholder: 'Tên loại mặt hàng',
    },
  ];

  const initialValues = {
    id: '',
    name: '',
  };

  return (
    <FormDrawer
      title={'loại mặt hàng'}
      formFields={formFields}
      initialValues={initialValues}
      open={open}
      onClose={onClose}
      btnText={'Tạo loại sản phẩm'}
    />
  );
};

export default CreateCategoryDrawer;
