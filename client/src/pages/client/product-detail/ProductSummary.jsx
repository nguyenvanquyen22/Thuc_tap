import { AddShoppingCart, Redeem } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';

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

const ProductSummary = () => {
  return (
    <>
      <Typography variant='h5' mb={2}>
        Laptop gaming ASUS TUF Gaming A15 FA506NC HN011W
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
        <Typography variant='h5' color={'#E30019'}>
          {moneyFormatter(18990000)}
        </Typography>
        <Typography
          ml={2}
          color='#6D6E72'
          sx={{
            textDecorationLine: 'line-through',
            fontSize: 18,
          }}
        >
          {moneyFormatter(21990000)}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            padding: '3px 8px',
            color: '#E30019',
            border: '1px solid #E30019',
            borderRadius: 1,
            ml: 2,
          }}
        >
          -14%
        </Typography>
      </div>

      <Box mb={2.5} border='1px solid #ddd' borderRadius={1}>
        <Typography
          p={1}
          bgcolor={'#f1f1f1'}
          display={'flex'}
          alignItems={'center'}
          fontWeight={600}
          color={'#E30019'}
        >
          <Redeem sx={{ mr: 1 }} />
          Quà tặng và ưu đãi kèm theo
        </Typography>
        <Box p={2}>
          <Typography fontSize={15} mb={0.5}>
            ✔ Bảo hành chính hãng 24 tháng.
          </Typography>
          <Typography fontSize={15} mb={0.5}>
            ✔ Hỗ trợ đổi mới trong 7 ngày.
          </Typography>
          <Typography fontSize={15} mb={0.5}>
            ✔ Windows bản quyền tích hợp.
          </Typography>
          <Typography fontSize={15} mb={0.5}>
            ✔ Miễn phí giao hàng toàn quốc.
          </Typography>
          <hr />
          <div style={{ fontSize: 15, marginTop: 12 }}>
            ⭐{' '}
            <a href='http://gearvn.com/pages/chuong-trinh-mua-kem-pc-gearvn'>
              <strong>Ưu đãi lên đến 54% khi mua kèm Laptop</strong>
            </a>
          </div>
          <span style={{ fontSize: 15 }}>
            <strong>
              <span style={{ color: '#ff0000' }}>
                Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON (
              </span>
              <a href='https://gearvn.com/pages/huong-dan-tra-gop'>
                <span style={{ color: '#3498db' }}>Xem chi tiết</span>
              </a>
              <span style={{ color: '#ff0000' }}>).</span>
            </strong>
          </span>
        </Box>
      </Box>

      <Box display={'flex'} alignItems={'center'} mt={2}>
        <p
          style={{
            marginRight: 5,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Số lượng:
        </p>
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
        <Button
          size='small'
          startIcon={<AddShoppingCart />}
          sx={{
            ml: 1,
            height: 36,
            border: '1px solid #dfdfdf',
            borderRadius: 0,
            color: 'inherit',
            px: 2,
            fontWeight: 600,
          }}
        >
          Thêm vào giỏ hàng
        </Button>
      </Box>

      <Button
        variant='contained'
        fullWidth
        sx={{
          mt: 2,
          bgcolor: '#E30019',
          p: 1,
          display: 'block',
          ':hover': {
            bgcolor: '#E30019',
            opacity: 0.8,
          },
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: 16,
            display: 'block',
          }}
        >
          MUA NGAY
        </span>
        <span
          style={{
            display: 'block',
          }}
        >
          Giao tận nơi hoặc nhận tại cửa hàng
        </span>
      </Button>
    </>
  );
};

export default ProductSummary;
