import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { moneyFormatter } from '../../../../utils/moneyFormatter';

const OrdersHistory = () => {
  const historyStatus = [
    {
      id: 'all',
      title: 'Tất cả',
      total: 3,
    },
    {
      id: 'processing',
      title: 'Đang xử lý',
      total: 1,
    },
    {
      id: 'delivering',
      title: 'Đang vận chuyển',
      total: 1,
    },
    {
      id: 'complete',
      title: 'Đã hoàn thành',
      total: 1,
    },
    {
      id: 'cancel',
      title: 'Đã huỷ',
      total: 0,
    },
  ];

  const [clickedStatus, setClickedStatus] = useState(0);

  const orders = [
    {
      id: '172301',
      title: 'Màn hình AOC Q24G2 24" IPS 2K 165Hz G-Sync chuyên game',
      image:
        'https://product.hstatic.net/200000722513/product/121d2924a3581e9be47de263576_6fb825a51a744d3c82e4aa7eed9cc1d2_1024x1024_23db2166e8714c008b17744e32b1b190.jpg',
      quantity: 1,
      discount: 340000,
      olPrice: 5190000,
      price: 4850000,
      status: 'Đang giao hàng',
    },
    {
      id: '172303',
      title: 'Màn hình AOC Q24G2 24" IPS 2K 165Hz G-Sync chuyên game',
      image:
        'https://product.hstatic.net/200000722513/product/121d2924a3581e9be47de263576_6fb825a51a744d3c82e4aa7eed9cc1d2_1024x1024_23db2166e8714c008b17744e32b1b190.jpg',
      quantity: 1,
      discount: 340000,
      olPrice: 5190000,
      price: 4850000,
      status: 'Đang giao hàng',
    },
  ];

  return (
    <Stack p={1}>
      <Typography variant='h5' p={2}>
        Quản lý đơn hàng
      </Typography>
      <Grid container>
        {historyStatus.map((item, index) => (
          <Grid key={item.id + '-status'} item xs={2.4}>
            <Typography
              onClick={() => {
                setClickedStatus(index);
              }}
              sx={{
                cursor: 'pointer',
                ':hover': {
                  bgcolor: 'rgba(22, 119, 255, 0.04)',
                },
                borderBottom: '3px solid',
                borderBottomColor: clickedStatus === index ? '#E30019' : '#fff',
              }}
              variant='h6'
              textAlign={'center'}
              p={0.5}
            >
              {item.title}{' '}
              {clickedStatus === index && (
                <span
                  style={{
                    color: '#FF3C53',
                  }}
                >
                  ({item.total})
                </span>
              )}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {orders.map((item) => (
        <Stack p={3} mb={1.5} borderBottom={'1px dashed'}>
          <Box
            component={'div'}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            pb={0}
          >
            <Typography fontSize={14} fontWeight={600} color='#666'>
              {item.status}
            </Typography>
            <Typography fontSize={14}>#172301</Typography>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mt={2}
            mb={2}
            pt={1}
            pb={1}
            borderTop='1px solid #aaa'
            borderBottom='1px solid #aaa'
          >
            <Grid container maxWidth={'75%'} p={1} alignItems={'center'}>
              <Box maxWidth={100}>
                <img
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={100}
                />
              </Box>
              <Box width={50} pl={1} pr={1} textAlign={'center'}>
                x{item.quantity}
              </Box>
              <Box>
                <Typography variant='h6' pb={1}>
                  {item.title}
                </Typography>
                <Typography>
                  Giảm giá: {moneyFormatter(item.discount)}
                </Typography>
              </Box>
            </Grid>
            <Box maxWidth={'23%'}>
              <Typography fontSize={16}>
                {moneyFormatter(item.price)}
              </Typography>
              <Typography
                fontSize={14}
                sx={{ textDecorationLine: 'line-through' }}
              >
                {moneyFormatter(item.olPrice)}
              </Typography>
            </Box>
          </Box>
          <Typography fontSize={16} textAlign={'right'}>
            Tổng tiền:{' '}
            <span style={{ color: '#E30019', fontWeight: 600 }}>
              {moneyFormatter(item.price - item.discount)}
            </span>
          </Typography>
          <div style={{ textAlign: 'right', marginTop: 8 }}>
            <Button variant='contained' href='/'>
              Xem chi tiết
            </Button>
          </div>
        </Stack>
      ))}
    </Stack>
  );
};

export default OrdersHistory;
