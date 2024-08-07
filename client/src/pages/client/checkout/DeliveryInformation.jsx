import {
  FormControlLabel,
  Grid,
  Radio,
  Stack,
  Typography,
} from '@mui/material';
import { moneyFormatter } from '../../../utils/moneyFormatter';

const deliveryInformation = [
  {
    id: 'fullName',
    title: 'Họ và tên',
    value: '',
  },
  {
    id: 'phoneNumber',
    title: 'Số điện thoại',
    value: '',
  },
  {
    id: 'email',
    title: 'Email',
    value: '',
  },
  {
    id: 'city',
    title: 'Tỉnh / thành phố',
    value: '',
  },
  {
    id: 'district',
    title: 'Quận / huyện',
    value: '',
  },
  {
    id: 'ward',
    title: 'Phường / xã',
    value: '',
  },
  {
    id: 'address',
    title: 'Số nhà, tên đường',
    value: '',
  },
];

const DeliveryInformation = (props) => {
  const { products } = props;

  return (
    <Stack pr={2} spacing={1.5}>
      <Typography variant='h5'>Địa chỉ giao hàng</Typography>
      <Stack p={3} pb={1.4} borderRadius={1} border='1px solid #ddd'>
        {deliveryInformation.map((item) => (
          <Grid key={item.id} container pb={2} alignItems='center'>
            <Grid item xs={3} container alignItems='center'>
              <Typography variant='subtitle1'>{item.title}</Typography>
            </Grid>
            <Grid item xs={9}>
              <input
                id={item.id}
                name={item.id}
                type='text'
                placeholder={item.title}
                value={item.value}
                style={{
                  padding: 10,
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Stack>
      <Typography variant='h5'>Chọn hình thức giao hàng</Typography>
      <Stack p={1.5} borderRadius={1} border='1px solid #ddd' spacing={1.5}>
        <FormControlLabel
          value='-1'
          checked
          control={<Radio />}
          label='Giao hàng tiêu chuẩn'
        />
        {products.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href={`/products/${item.id}`}
              style={{ width: 80, display: 'block' }}
            >
              <img src={item.image} alt='' />
            </a>
            <div style={{ width: 'calc(100% - 240px)', marginLeft: 10 }}>
              <a
                href={`/products/${item.id}`}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  display: 'block',
                }}
              >
                {item.title}
              </a>
              <div>SL: {item.quantity}</div>
            </div>
            <p style={{ width: 150, fontWeight: 600, fontSize: 16 }}>
              {moneyFormatter(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default DeliveryInformation;
