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
    <Stack borderTop={'1px solid #ddd'} pt={2} px={'25%'}>
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
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
        </Grid>
        <Grid item xs={3} display='flex' alignItems='center'>
          <Button
            variant='contained'
            size='small'
            fullWidth
            sx={{
              height: 36,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            Áp dụng
          </Button>
        </Grid>
      </Grid>
      <div style={style}>
        <Typography>Tạm tính </Typography>
        <Typography fontWeight={600} fontSize={16}>
          {(1990000).toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}
        </Typography>
      </div>
      <div style={style}>
        <Typography>Giảm giá</Typography>
        <Typography fontWeight={600} fontSize={16}>
          {(0).toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}
        </Typography>
      </div>
      <div style={style}>
        <Typography>Thành tiền</Typography>
        <Typography fontWeight={600} fontSize={20} color='#ee2724'>
          {(1990000).toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}
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

      <Button
        variant='contained'
        size='large'
        sx={{ fontWeight: 600 }}
        href='/checkout'
      >
        Tiến hành đặt hàng
      </Button>
    </Stack>
  );
};

export default CartSummary;
