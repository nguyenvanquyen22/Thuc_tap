import { Button, InputLabel, Stack, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';
import RadioGroup from '../../../../components/input/RadioGroup';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const Profile = () => {
  const formValue = {
    name: 'Nguyễn Minh Quân',
    gender: 0,
    phone_number: '0333935933',
    email: 'anhquankk51@gmail.com',
    dob: '2002/03/22',
  };

  const forms = [
    {
      id: 'name',
      name: 'name',
      title: 'Họ tên',
      disabled: false,
      type: 'text',
    },
    {
      id: 'gender',
      name: 'gender',
      title: 'Giới tính',
      type: 'checkbox',
      list: [
        {
          id: 'male',
          title: 'Nam',
          value: 0,
        },
        {
          id: 'female',
          title: 'Nữ',
          value: 1,
        },
      ],
    },
    {
      id: 'email',
      name: 'email',
      title: 'Email',
      disabled: true,
      type: 'text',
    },
    {
      id: 'phone_number',
      name: 'phone_number',
      title: 'Số điện thoại',
      disabled: false,
      type: 'text',
    },
    {
      id: 'dob',
      name: 'dob',
      title: 'Ngày sinh',
      disabled: false,
      type: 'date',
    },
    {
      id: 'submit',
      name: 'submit',
      title: 'Lưu thay đổi',
      type: 'button',
    },
  ];

  return (
    <Stack p={1}>
      <Typography variant='h5' p={2}>
        Thông tin tài khoản
      </Typography>
      <Stack pl={'15%'} pr={'15%'} spacing={2.5} pb={1.5} pt={1.5}>
        {forms.map((item) => {
          if (item.type === 'text') {
            return (
              <Input
                {...item}
                key={item.id + 'input'}
                onChange={() => {}}
                value={formValue[item.name]}
                sx={{}}
              />
            );
          } else if (item.type === 'checkbox') {
            return (
              <RadioGroup
                {...item}
                key={item.id + 'radio'}
                onChange={() => {}}
                value={formValue[item.name]}
              />
            );
          } else if (item.type === 'date') {
            return (
              <div
                key={item.id}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <InputLabel
                  htmlFor={item.name}
                  sx={{ mr: 2, fontSize: 16, color: 'inherit' }}
                >
                  {item.title}:
                </InputLabel>
                <DatePicker
                  id={item.id}
                  name={item.name}
                  label={item.title}
                  defaultValue={dayjs(formValue[item.name])}
                />
              </div>
            );
          } else {
            return (
              <Button key={item.id} variant='contained' href='/'>
                {item.title}
              </Button>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

export default Profile;
