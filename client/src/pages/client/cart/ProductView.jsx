import { DeleteOutlined } from '@mui/icons-material';
import {
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Checkbox,
  Stack,
} from '@mui/material';

const DetailRow = (props) => {
  return (
    <Grid container spacing={0} alignItems='center' pr={2}>
      <Grid item xs={5} alignItems='center' display='flex'>
        <Checkbox sx={{ p: 0, mr: 1 }} />
        {props.name}
      </Grid>
      <Grid item xs={2}>
        {props.price}
      </Grid>
      <Grid item xs={2.5}>
        {props.quantity}
      </Grid>
      <Grid item xs={2}>
        {props.amount}
      </Grid>
      <Grid item xs={0.5}>
        <Tooltip title='Xoán toàn bộ giỏ hàng' placement='bottom-start'>
          <IconButton>
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
      <DetailRow
        name='Tất cả (1 sản phẩm)'
        price='Đơn giá'
        quantity='Số lượng'
        amount='Thành tiền'
      />
      <DetailRow
        name='Tất cả (1 sản phẩm)'
        price='Đơn giá'
        quantity='Số lượng'
        amount='Thành tiền'
      />
    </Stack>
  );
};

export default ProductView;
