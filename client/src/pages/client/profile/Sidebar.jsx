import {
  AccountCircle,
  Logout,
  Person,
  ShoppingBag,
  Visibility,
} from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

const Sidebar = (props) => {
  const tabs = [
    {
      id: 'profile',
      title: 'Thông tin tài khoản',
      icon: Person,
    },
    {
      id: 'orders-history',
      title: 'Quản lý đơn hàng',
      icon: ShoppingBag,
    },
    {
      id: 'viewed',
      title: 'Sản phẩm đã xem',
      icon: Visibility,
    },
    {
      id: 'logout',
      title: 'Đăng xuất',
      icon: Logout,
    },
  ];

  return (
    <Stack
      spacing={1}
      p={0.5}
      borderRadius={2}
      boxShadow='0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)'
    >
      <Stack
        p={1.5}
        display={'flex'}
        flexDirection='row'
        borderBottom='1px solid #ddd'
        alignItems={'center'}
      >
        <AccountCircle
          sx={{
            color: '#777',
            fontSize: 52,
          }}
        />
        <Typography variant='h6' fontSize={18} ml={1}>
          Nguyễn Minh Quân
        </Typography>
      </Stack>
      <Stack p={1.5} spacing={2}>
        {tabs.map((item, index) => (
          <Button
            key={item.id + '-tab'}
            startIcon={
              <item.icon
                sx={{
                  mr: 0.5,
                  fontSize: '24px !important',
                  fontWeight: props.tab === index ? 600 : 500,
                  color: props.tab === index ? '#E30019' : '#777',
                }}
              />
            }
            sx={{
              justifyContent: 'start',
              alignItems: 'center',
              fontSize: 16,
              color: props.tab === index ? '#E30019' : 'inherit',
              fontWeight: props.tab === index ? 600 : 500,
            }}
            onClick={() => {
              props.onChangeTab(index);
            }}
          >
            {item.title}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
