import { ArrowForward } from '@mui/icons-material';
import { Grid, Typography, Box, Stack, Button, Link } from '@mui/material';

const FeaturedProduct = (props) => {
  return (
    <Box bgcolor={'#fff'} p={2} borderRadius={1}>
      <Stack
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        mb={2}
      >
        <Typography p='5px 10px' bgcolor='#2b80dd' color='#fff' variant='h5'>
          {props.title}
        </Typography>
        <Link href='/'>
          <Button
            color='error'
            variant='contained'
            size='small'
            endIcon={<ArrowForward />}
          >
            Xem tất cả
          </Button>
        </Link>
      </Stack>
      <Grid container>
        {props.products.map((item) => (
          <Grid key={item.id} item xs={3} p={1} textAlign='center'>
            <Box
              component='a'
              href={item.path}
              sx={{
                paddingBottom: 2,
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
                  loading='lazy'
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <Typography className='underline' variant='h6'>
                {item.title.toUpperCase()}
              </Typography>
              <Typography
                mb={0.2}
                mt={0.2}
                height={50}
                overflow={'hidden'}
                variant='body2'
              >
                {item.description}
              </Typography>
              <Typography color='error' variant='h5' fontWeight='bold'>
                {item.price.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProduct;
