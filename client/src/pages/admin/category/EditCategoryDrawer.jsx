import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditCategoryDrawer = (props) => {
  const { id } = useParams();

  useEffect(() => {
    // get category by id
  }, [id]);

  const formFields = [
    {
      id: 'id-category',
      name: 'id',
      label: 'Mã',
      type: 'text',
      xs: 12,
      placeholder: 'Mã loại mặt hàng',
    },
    {
      id: 'name-category',
      label: 'Tên',
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

  return <></>;
};

export default EditCategoryDrawer;
