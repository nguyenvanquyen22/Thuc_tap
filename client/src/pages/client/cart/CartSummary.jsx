import { Grid, Stack, Button, Typography } from '@mui/material';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 15px 10px 10px',
  borderBottom: 'solid 1px #e1e1e1',
  fontSize: 14,
  margin: 0,
};

const CartSummary = () => {
  return (
    <Stack>
      <Grid container mb={2}>
        <Grid item xs={9} display='flex' alignItems='center'>
          <input
            type='text'
            class='txt'
            id='discount_code'
            name='coupon_code'
            value=''
            placeholder='Mã giảm giá/ quà tặng'
            style={{
              width: '100%',
              height: 36,
              outline: 0,
              padding: '0 10px',
              border: '1px solid #e1e1e1',
              borderRight: 'none',
              borderRadius: '3px 0 0 3px',
            }}
          />
        </Grid>
        <Grid item xs={3} display='flex' alignItems='center'>
          <Button
            variant='contained'
            size='small'
            fullWidth
            sx={{ height: 36 }}
          >
            Áp dụng
          </Button>
        </Grid>
      </Grid>
      <div style={style}>
        <Typography>Tạm tính </Typography>
        <Typography fontWeight='bold'>199.000₫</Typography>
      </div>
      <div style={style}>
        <Typography>Giảm giá</Typography>
        <Typography fontWeight='bold'>0₫</Typography>
      </div>
      <div style={style}>
        <Typography>Thành tiền</Typography>
        <Typography fontWeight='bold' color='#ee2724'>
          199.000₫
        </Typography>
      </div>
      <Typography
        mt={2}
        mb={2}
        textAlign='right'
        color='#333e48'
        fontSize='13px'
        pr='15px'
      >
        (Đã bao gồm VAT nếu có)
      </Typography>

      <Button variant='contained' href='/checkout'>
        Tiến hành đặt hàng
      </Button>
    </Stack>
  );
};

export default CartSummary;
