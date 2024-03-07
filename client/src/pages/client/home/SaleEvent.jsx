import { Stack, Typography, Box, Link, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SaleEvent = (props) => {
  return (
    <Stack border='3px solid #ed1b24' borderTop='none'>
      <Typography
        textAlign='center'
        variant='h4'
        color='#ff0'
        fontStyle='italic'
        sx={{
          p: '4px 0',
          background:
            'repeating-linear-gradient(to right, #ed1b24 0, #243a76 50%, #ed1b24 100%)',
        }}
      >
        FLASH SALE
      </Typography>
      <Box
        sx={{
          width: '100%',
          p: '20px',
          pr: '10px',
          textAlign: 'center',
        }}
      >
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
            },
          }}
          infinite
          autoPlay
          autoPlaySpeed={1000}
          customTransition='all 1000ms'
          transitionDuration={1000}
        >
          {props.products.map((item) => (
            <Box
              component='a'
              href={item.path}
              sx={{
                m: 0.5,
                mr: 1,
                p: '8px 16px',
                display: 'block',
                borderRadius: 2,
                boxShadow:
                  '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)',
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
              <Typography mb={0.2} mt={0.2} variant='body2'>
                {item.description}
              </Typography>
              <div>
                <Typography
                  variant='caption'
                  sx={{
                    textDecoration: 'line-through',
                  }}
                >
                  {item.price.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </Typography>
                <Typography ml={0.5} variant='caption' color='#d82a29'>
                  (Giảm:{' '}
                  {(900000).toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                  )
                </Typography>
              </div>
              <Typography color='error' variant='h5' fontWeight='bold'>
                {item.price.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Typography>
              <Typography
                mb={0.5}
                mt={0.2}
                textAlign='center'
                color='#fff'
                variant='body2'
                sx={{
                  borderRadius: '15px',
                  background:
                    'repeating-linear-gradient(to right, #ed1b24 0, #243a76 50%, #ed1b24 100%)',
                }}
              >
                Còn 10 sản phẩm
              </Typography>
            </Box>
          ))}
          {props.products.map((item) => (
            <Box
              component='a'
              href={item.path}
              sx={{
                m: 0.5,
                mr: 1,
                p: '8px 16px',
                display: 'block',
                borderRadius: 2,
                boxShadow:
                  '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)',
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
              <Typography mb={0.2} mt={0.2} variant='body2'>
                {item.description}
              </Typography>
              <div>
                <Typography
                  variant='caption'
                  sx={{
                    textDecoration: 'line-through',
                  }}
                >
                  {item.price.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </Typography>
                <Typography ml={0.5} variant='caption' color='#d82a29'>
                  (Giảm:{' '}
                  {(900000).toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                  )
                </Typography>
              </div>
              <Typography color='error' variant='h5' fontWeight='bold'>
                {item.price.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Typography>
              <Typography
                mb={0.5}
                mt={0.2}
                textAlign='center'
                color='#fff'
                variant='body2'
                sx={{
                  borderRadius: '15px',
                  background:
                    'repeating-linear-gradient(to right, #ed1b24 0, #243a76 50%, #ed1b24 100%)',
                }}
              >
                Còn 10 sản phẩm
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Link href='/' textAlign='center' mb={2}>
        <Button variant='outlined'>Xem tất cả sản phẩm ...</Button>
      </Link>
    </Stack>
  );
};

export default SaleEvent;
