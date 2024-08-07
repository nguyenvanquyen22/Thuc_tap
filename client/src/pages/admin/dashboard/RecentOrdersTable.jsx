import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Dot from '../../../components/Dot';
import { moneyFormatter } from '../../../utils/moneyFormatter';

function createData(id, name, quantity, status, amount) {
  return { id, name, quantity, status, amount };
}

const rows = [
  createData(84564564, 'Camera Lens', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Handset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'TV', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Chair', 100, 4, 14001),
];

const headCells = [
  {
    id: 'id',
    align: 'left',
    label: 'Code',
  },
  {
    id: 'name',
    align: 'left',
    label: 'Tên sản phẩm',
  },
  {
    id: 'quantity',
    align: 'right',
    label: 'Số lượng',
  },
  {
    id: 'status',
    align: 'left',
    label: 'Trạng thái',
  },
  {
    id: 'amount',
    align: 'right',
    label: 'Tổng tiền',
  },
];

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'primary';
      title = 'Đang giao';
      break;
    case 1:
      color = 'success';
      title = 'Đã giao';
      break;
    case 2:
      color = 'error';
      title = 'Đã huỷ';
      break;
    default:
      color = 'warning';
      title = 'Chưa xử lý';
  }

  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};

export default function OrderTable() {
  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          display: 'block',
          maxWidth: '100%',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.align}
                  sx={{ border: 'none' }}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  <TableCell component='th' scope='row' align='left'>
                    <Link color='secondary' component={RouterLink} to=''>
                      {row.id}
                    </Link>
                  </TableCell>
                  <TableCell align='left'>{row.name}</TableCell>
                  <TableCell align='right'>{row.quantity}</TableCell>
                  <TableCell align='left'>
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell align='right'>
                    {moneyFormatter(row.amount)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
