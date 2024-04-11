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
import { moneyFormatter } from '../../../utils/moneyFormatter';

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
      <Grid item xs={6} alignItems='center' display='flex'>
        {props.colProduct}
      </Grid>
      <Grid item xs={2} container>
        {props.colPrice}
      </Grid>
      <Grid item xs={1.5}>
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

const styleQuantityChange = {
  height: 36,
  width: 36,
  fontSize: 14,
  display: 'flex',
  fontWeight: 600,
  alignItems: 'center',
  border: '1px solid #dfdfdf',
  justifyContent: 'center',
  textAlign: 'center',
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
      <Box mt={2}></Box>
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
                    href={`/products/${item.id}`}
                    style={{
                      width: 90,
                      display: 'block',
                    }}
                  >
                    <img
                      loading='lazy'
                      src={item.image}
                      alt=''
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  container
                  flexDirection='column'
                  justifyContent={'center'}
                  xs={9}
                >
                  <a
                    href={`/products/${item.id}`}
                    style={{ fontSize: 15, fontWeight: 600 }}
                  >
                    {item.title}
                  </a>
                  <Typography mt={1} fontSize={13}>
                    Mã SP: CSAS018
                  </Typography>
                </Grid>
              </Grid>
            }
            colPrice={
              <>
                <Typography fontWeight={600} fontSize={16}>
                  {moneyFormatter(item.price)}
                </Typography>
                <Typography
                  fontSize={14}
                  color='#888'
                  sx={{ textDecorationLine: 'line-through' }}
                >
                  {moneyFormatter(item.oldPrice)}
                </Typography>
              </>
            }
            colQuantity={
              <Box display={'flex'} alignItems={'center'}>
                <p
                  style={{
                    ...styleQuantityChange,
                    borderRight: 'none',
                    cursor: 'pointer',
                  }}
                >
                  -
                </p>
                <input
                  value='1'
                  size='5'
                  style={styleQuantityChange}
                  onChange={() => {}}
                />
                <p
                  style={{
                    ...styleQuantityChange,
                    borderLeft: 'none',
                    cursor: 'pointer',
                  }}
                >
                  +
                </p>
              </Box>
            }
            colAmount={
              <Typography fontWeight={600} fontSize={18} color='#ee2724'>
                {moneyFormatter(item.quantity * item.price)}
              </Typography>
            }
          />
        );
      })}
    </Stack>
  );
};

export default ProductView;
