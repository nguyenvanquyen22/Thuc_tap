import { DeleteOutlined } from '@mui/icons-material';
import {
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Checkbox,
  Stack,
  Box,
} from '@mui/material';

const cartProducts = [
  {
    id: 'SPSS1',
    title: 'Vỏ Case ASUS A21 BLK  (Mid Tower / Màu Đen)',
    image:
      'https://hanoicomputercdn.com/media/product/250_75357_vo_case_asus_a21_15.png',
    price: 15000000,
    oldPrice: 1999000,
    quantity: 1,
  },
  {
    id: 'SPSS2',
    title: 'Vỏ Case ASUS A21 BLK  (Mid Tower / Màu Đen)',
    image:
      'https://hanoicomputercdn.com/media/product/250_75357_vo_case_asus_a21_15.png',
    price: 15000000,
    oldPrice: 1999000,
    quantity: 1,
  },
  {
    id: 'SPSS3',
    title: 'Vỏ Case ASUS A21 BLK  (Mid Tower / Màu Đen)',
    image:
      'https://hanoicomputercdn.com/media/product/250_75357_vo_case_asus_a21_15.png',
    price: 15000000,
    oldPrice: 1999000,
    quantity: 1,
  },
  {
    id: 'SPSS4',
    title: 'Vỏ Case ASUS A21 BLK  (Mid Tower / Màu Đen)',
    image:
      'https://hanoicomputercdn.com/media/product/250_75357_vo_case_asus_a21_15.png',
    price: 15000000,
    oldPrice: 1999000,
    quantity: 1,
  },
];

const ProductDetailRow = (props) => {
  return (
    <Grid container spacing={0} alignItems='center' pr={2}>
      <Grid item xs={5} alignItems='center' display='flex'>
        {props.colProduct}
      </Grid>
      <Grid item xs={2} container>
        {props.colPrice}
      </Grid>
      <Grid item xs={2.5}>
        {props.colQuantity}
      </Grid>
      <Grid item xs={2}>
        {props.colAmount}
      </Grid>
      <Grid item xs={0.5}>
        <Tooltip title='Xoán toàn bộ giỏ hàng' placement='bottom-start'>
          <IconButton onClick={() => {}}>
            <DeleteOutlined />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

const ProductView = () => {
  return (
    <Stack>
      <ProductDetailRow
        colProduct={
          <>
            <Checkbox sx={{ p: 0, mr: 1 }} />
            Tất cả (1 sản phẩm)
          </>
        }
        colPrice={<Typography>Đơn giá</Typography>}
        colQuantity={<Typography>Số lượng</Typography>}
        colAmount={<Typography>Thành tiền</Typography>}
      />
      <Box mt={5}></Box>
      {cartProducts.map((item) => {
        return (
          <ProductDetailRow
            key={item.id}
            colProduct={
              <Grid container>
                <Grid item xs={0.6} container alignItems='center'>
                  <Checkbox sx={{ p: 0, mr: 1 }} />
                </Grid>
                <Grid item xs={2.4}>
                  <a
                    href='http://'
                    style={{
                      width: 90,
                      display: 'block',
                    }}
                  >
                    <img
                      src={item.image}
                      alt=''
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </a>
                </Grid>
                <Grid item container flexDirection='column' xs={9}>
                  <a
                    style={{
                      textDecorationLine: 'none',
                      color: 'inherit',
                    }}
                    href='/'
                  >
                    {item.title}
                  </a>
                  <Typography mt={1} fontSize={13} color='#888'>
                    Mã SP: CSAS018
                  </Typography>
                </Grid>
              </Grid>
            }
            colPrice={
              <>
                <Typography variant='subtitle1'>
                  {item.price.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </Typography>
                <Typography
                  fontSize={13}
                  color='#888'
                  sx={{ textDecorationLine: 'line-through' }}
                >
                  {item.oldPrice.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </Typography>
              </>
            }
            colQuantity={
              <Stack
                flexDirection='row'
                alignItems='center'
                sx={{
                  a: {
                    display: 'flex',
                    textDecorationLine: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 32,
                    width: 32,
                    border: '1px solid #888',
                    borderRadius: '3px',
                    color: 'inherit',
                    fontSize: 18,
                  },
                  input: {
                    textAlign: 'center',
                    height: 32,
                    width: 40,
                    borderRadius: 0,
                    fontSize: 16,
                    border: '1px solid #888',
                  },
                }}
              >
                <a
                  href='/'
                  style={{
                    borderRight: 'none',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  -
                </a>
                <input value={item.quantity} />
                <a
                  href='/'
                  style={{
                    borderLeft: 'none',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  +
                </a>
              </Stack>
            }
            colAmount={
              <Typography variant='subtitle1' color='#ee2724'>
                {(item.quantity * item.price).toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Typography>
            }
          />
        );
      })}
    </Stack>
  );
};

export default ProductView;
