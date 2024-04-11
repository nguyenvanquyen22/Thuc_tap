import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function createData(code, name, total) {
  return { code, name, total };
}

const rows = [
  createData(21123, 'Camera Lens', 40),
  createData(12312, 'Laptop', 300),
  createData(19323, 'Mobile', 355),
  createData(139323, 'Handset', 50),
  createData(912323, 'Computer Accessories', 100),
  createData(123423, 'TV', 99),
  createData(9312323, 'Keyboard', 125),
  createData(312323, 'Mouse', 89),
  createData(723323, 'Desktop', 185),
  createData(132323, 'Chair', 100),
];

const headCells = [
  {
    id: 'code',
    align: 'left',
    label: 'Mã SP',
  },
  {
    id: 'name',
    align: 'left',
    label: 'Tên SP',
  },
  {
    id: 'total',
    align: 'right',
    label: 'Đã bán',
  },
];

export default function BestSellingProductTable() {
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
                <TableRow key={row.code} hover role='checkbox' tabIndex={-1}>
                  {headCells.map((th) => (
                    <TableCell
                      key={th.id + 'in-row'}
                      component='th'
                      scope='row'
                      align={th.align}
                    >
                      {th.id === 'code' ? (
                        <Link color='secondary' component={RouterLink} to='/?'>
                          {row[th.id]}
                        </Link>
                      ) : (
                        row[th.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
