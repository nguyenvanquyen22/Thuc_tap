import { Grid, Typography, Box } from '@mui/material';
import React from 'react';

const products = [
  {
    id: 'prod-1',
    title: 'MacBook Air 2023 15 inch',
    image: 'https://macone.vn/wp-content/uploads/2023/06/Midnight-300x250.jpg',
    price: 34890000,
    description: 'Apple M2 8GB RAM 256GB SSD - NEW',
    path: '',
  },
  {
    id: 'prod-2',
    title: 'MacBook Air 2020 13 inch',
    image:
      'https://macone.vn/wp-content/uploads/2020/11/macbook-air-gold-m1-2020-300x250.jpeg',
    price: 21500000,
    description: 'Apple M1 16GB RAM 256GB SSD - Like New',
    path: '',
  },
  {
    id: 'prod-3',
    title: 'Macbook Air 2017 13 inch',
    image:
      'https://macone.vn/wp-content/uploads/2017/12/macbook-air-2017-mqd32-300x279.png',
    price: 32990000,
    description: 'Core i5 8GB RAM 256GB SSD - Like New',
    path: '',
  },
  {
    id: 'prod-4',
    title: 'MacBook Air 2019 13 inch',
    image:
      'https://macone.vn/wp-content/uploads/2019/07/gold_19a9226357a74414bea5ed7b5c9f2c0b-e1605251495529-300x279.jpg',
    price: 200000000,
    description: 'Core i5 16GB RAM 256GB SSD - Like New',
    path: '',
  },
];

const FeaturedProduct = () => {
  return (
    <React.Fragment>
      <Typography variant='h5' textAlign='center' mt={'48px !important'}>
        Featured Products
      </Typography>
      <Grid container spacing={8} mt={'0 !important'} ml={'-64px !important'}>
        {products.map((item) => (
          <Grid
            key={item.id}
            item
            xs={3}
            pt={'0 !important'}
            textAlign='center'
          >
            <Box
              component='a'
              href={item.path}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                ':hover': {
                  opacity: 0.9,
                  '.underline': {
                    textDecoration: 'underline',
                  },
                },
              }}
            >
              <div
                style={{
                  width: 350,
                  height: 300,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <Typography className='underline' variant='h6'>
                {item.title.toUpperCase()}
              </Typography>
              <Typography mb={1} mt={1} variant='body2'>
                {item.description}
              </Typography>
              <Typography color='error' fontWeight='bold'>
                {item.price.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default FeaturedProduct;
