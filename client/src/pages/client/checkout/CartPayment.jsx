import QrCodeImage from '../../../assets/qr_code.jpeg';

import { ArrowDropDown } from '@mui/icons-material';
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const CartPayment = (props) => {
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [openProduct, setOpenProduct] = useState(false);
  const { products } = props;

  return (
    <Stack spacing={1.5}>
      <Stack p={1.5} border='1px solid #ddd' borderRadius={1}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography fontWeight={600} fontSize={16}>
            Đơn hàng
          </Typography>
          <Button variant='contained' href='/cart'>
            Sửa
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '8px 0',
          }}
        >
          <Typography>3 sản phẩm</Typography>
          <Button
            size='small'
            endIcon={<ArrowDropDown />}
            sx={{
              p: '0 4px',
              '.MuiButton-endIcon': {
                ml: 0,
              },
            }}
            onClick={() => {
              setOpenProduct(!openProduct);
            }}
          >
            Xem thông tin
          </Button>
        </div>
        {openProduct &&
          products.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 0',
              }}
            >
              <Typography fontSize={12} width={20} mr={'10px'}>
                {item.quantity}x
              </Typography>
              <a
                href={`/products/${item.id}`}
                style={{
                  fontSize: '12px',
                  width: 'calc(100% - 115px)',
                  wordBreak: 'break-all',
                  paddingRight: 10,
                }}
              >
                {item.title}
              </a>
              <Typography fontSize={12} width={85}>
                {moneyFormatter(item.price)}
              </Typography>
            </div>
          ))}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 10,
            borderTop: '1px solid #ddd',
            marginTop: 8,
          }}
        >
          <Typography fontWeight={600} fontSize={16}>
            Thành tiền
          </Typography>
          <Typography fontWeight={600} fontSize={18} color='#ee2724'>
            {moneyFormatter(
              products.reduce((pre, cur) => pre + cur.price * cur.quantity, 0)
            )}
          </Typography>
        </div>

        <Typography textAlign='right' color='#777' fontStyle='italic'>
          (Đã bao gồm VAT nếu có)
        </Typography>
      </Stack>
      <Typography variant='h5' mt={3}>
        Chọn hình thức thanh toán
      </Typography>
      <div
        style={{
          padding: '8px 16px',
          border: '1px solid #ddd',
          borderRadius: 4,
        }}
      >
        <RadioGroup
          defaultValue={paymentMethod}
          onChange={(e) => {
            setPaymentMethod(parseInt(e.target.value));
          }}
        >
          <FormControlLabel
            value='1'
            control={<Radio />}
            label='Thanh toán khi nhận hàng'
          />
          <FormControlLabel
            value='2'
            control={<Radio />}
            label='Thanh toán chuyển khoản'
          />
        </RadioGroup>
      </div>
      {paymentMethod === 2 && (
        <div>
          <Typography fontSize={12} textTransform={'uppercase'}>
            Khách hàng vvui lòng quét mã bên dưới để thanh toán chuyển khoản.
            Nội dung chuyển khoản yêu cầu: tên + số điện thoại. Sau khi chuyển
            khoản xong, khách hàng vui lòng điền ghi chú ở bên dưới là mã số
            giao dịch và bấm đặt hàng!
          </Typography>
          <div style={{ margin: '12px 0', maxWidth: 400, padding: '0 36px' }}>
            <img
              src={QrCodeImage}
              alt='QRCode Payment'
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>
      )}
      <TextField
        id='note'
        name='note'
        label='Ghi chú'
        placeholder='Ghi chú'
        multiline
        rows={3}
      />
      <Button fullWidth variant='contained' color='error'>
        Đặt hàng
      </Button>
      <Button fullWidth variant='contained' color='warning'>
        Chọn thêm sản phẩm
      </Button>
    </Stack>
  );
};

export default CartPayment;
