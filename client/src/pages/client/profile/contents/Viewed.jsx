import { Grid, Link, Stack, Typography } from '@mui/material';

const Viewed = () => {
  const viewedProducts = [
    {
      id: 'prod-1',
      title: 'Laptop Asus VivoBook 14 OLED M1405YA KM047W',
      image:
        'https://product.hstatic.net/200000722513/product/km047w_fe34ae67ecf844f094a5e716f73d8f42_grande.png',
      oldPrice: 17990000,
      price: 13790000,
    },
    {
      id: 'prod-2',
      title: 'Laptop Asus VivoBook 14 OLED M1405YA KM047W',
      image:
        'https://product.hstatic.net/200000722513/product/km047w_fe34ae67ecf844f094a5e716f73d8f42_grande.png',
      oldPrice: 17990000,
      price: 13790000,
    },
    {
      id: 'prod-3',
      title: 'Laptop Asus VivoBook 14 OLED M1405YA KM047W',
      image:
        'https://product.hstatic.net/200000722513/product/km047w_fe34ae67ecf844f094a5e716f73d8f42_grande.png',
      oldPrice: 17990000,
      price: 13790000,
    },
    {
      id: 'prod-4',
      title: 'Laptop Asus VivoBook 14 OLED M1405YA KM047W',
      image:
        'https://product.hstatic.net/200000722513/product/km047w_fe34ae67ecf844f094a5e716f73d8f42_grande.png',
      oldPrice: 17990000,
      price: 13790000,
    },
    {
      id: 'prod-5',
      title: 'Laptop Asus VivoBook 14 OLED M1405YA KM047W',
      image:
        'https://product.hstatic.net/200000722513/product/km047w_fe34ae67ecf844f094a5e716f73d8f42_grande.png',
      oldPrice: 17990000,
      price: 13790000,
    },
    {
      id: 'prod-6',
      title: 'Laptop Asus VivoBook 14 OLED M1405YA KM047W',
      image:
        'https://product.hstatic.net/200000722513/product/km047w_fe34ae67ecf844f094a5e716f73d8f42_grande.png',
      oldPrice: 17990000,
      price: 13790000,
    },
  ];
  return (
    <Stack p={1}>
      <Typography variant='h5' p={2}>
        Sản phẩm đã xem
      </Typography>
      <Grid container>
        {viewedProducts.map((item) => (
          <Grid key={item.id} item xs={3}>
            <Stack p={2}>
              <Link
                href={`/products/${item.id}`}
                sx={{
                  textDecorationLine: 'none !important',
                  color: '#000',
                }}
              >
                <img src={item.image} alt={item.title} />
                <Typography fontWeight={600} fontSize={14}>
                  {item.title}
                </Typography>
              </Link>
              <Typography
                mt={1}
                fontSize={13}
                sx={{ textDecorationLine: 'line-through', color: '#6D6E72' }}
              >
                {item.oldPrice.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Typography>
              <Typography
                sx={{ color: '#E30019', fontSize: 16, fontWeight: 600 }}
              >
                {item.price.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
export default Viewed;
