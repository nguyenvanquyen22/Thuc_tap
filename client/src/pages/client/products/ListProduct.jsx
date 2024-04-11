import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { products } from './products';
import { Check, ShoppingCartOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const ListProduct = () => {
  const buttonSort = [
    {
      id: 'new',
      title: 'Hàng mới',
    },
    {
      id: 'view',
      title: 'Xem nhiều',
    },
    {
      id: 'price-off',
      title: 'Giá giảm nhiều',
    },
    {
      id: 'price-asc',
      title: 'Giá tăng dần',
    },
    {
      id: 'price-desc',
      title: 'Giá giảm dần',
    },
  ];

  const totalPage = 10;
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    // TODO
  };

  return (
    <Stack spacing={3}>
      <div
        style={{
          border: '1px solid #eee',
          backgroundColor: '#f6f6f6',
          padding: 8,
          borderRadius: 4,
        }}
      >
        <Typography ml={1} mb={1} variant='h6'>
          Sắp xếp theo
        </Typography>
        <Box display='flex'>
          {buttonSort.map((item, index) => (
            <Button
              key={item.id}
              variant='contained'
              onClick={() => {
                // open
              }}
              sx={{
                mr: 3,
                color: 'inherit',
                bgcolor: '#fff',
                fontWeight: 600,
                border: '1px #243a76 dashed',
                ':hover': { color: '#fff', border: '1px #243a76 solid' },
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </div>

      <Grid container spacing={1.5} marginLeft={'-15px !important'}>
        {products.map((item) => (
          <Grid key={item.id} item xs={3}>
            <Stack
              p={1.25}
              boxShadow={
                '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15);'
              }
              borderRadius={5}
            >
              <Box maxHeight={210} display={'block'} textAlign='center'>
                <img src={item.image} alt={item.title} />
              </Box>
              <div>
                <Typography
                  display='inline-block'
                  bgcolor='#f1f1f1'
                  p='3px 5px'
                  fontSize={11}
                  textTransform='uppercase'
                  borderRadius={1}
                >
                  Mã: {item.id}
                </Typography>
              </div>
              <Typography
                fontWeight={600}
                fontSize={13.5}
                textTransform='uppercase'
                height={36}
                overflow='hidden'
                component={'a'}
                m={1}
                href={`/products/${item.id}`}
              >
                {item.title}
              </Typography>
              <Stack height={180} overflow='hidden' m={1} mt={0}>
                {item.detail.map((e) => (
                  <Typography
                    key={e.id}
                    lineHeight={1.75}
                    fontSize={13}
                    color='#333e48'
                    display='list-item'
                    sx={{
                      listStyle: 'inside',
                    }}
                  >
                    {e.name + ': ' + e.title}
                  </Typography>
                ))}
              </Stack>
              <Typography variant='h5' ml={1} color={'#ed1b24'}>
                {moneyFormatter(item.price)}
              </Typography>
              <Box
                m={1}
                mb={0}
                mt={0}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                maxHeight={32}
              >
                <Box display='flex' alignItems='center'>
                  <Check
                    sx={{
                      color: '#2cc067',
                    }}
                  />
                  <Typography color='#2cc067'>Sẵn hàng</Typography>
                </Box>
                <IconButton
                  sx={{
                    height: 32,
                    width: 32,
                    bgcolor: '#ed1b24',
                    borderRadius: '50%',
                    ':hover': {
                      bgcolor: '#ed1b24',
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => {
                    // add to cart
                  }}
                >
                  <ShoppingCartOutlined sx={{ color: '#fff', fontSize: 20 }} />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Pagination
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
        count={totalPage}
        page={page}
        onChange={handleChange}
        variant='outlined'
        shape='rounded'
      />
    </Stack>
  );
};

export default ListProduct;
