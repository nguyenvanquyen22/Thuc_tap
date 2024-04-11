import { Stack, Table, TableContainer, TablePagination } from '@mui/material';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import { useState } from 'react';
import ToolbarAction from './ToolbarAction';
import Filter from './Filter';

const DataTable = (props) => {
  const { rows, headCells } = props;

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack spacing={2}>
      <ToolbarAction selected={selected} onHandleDelete={() => {}} />
      <Filter />
      <TableContainer sx={{ bgcolor: '#fff', border: '1px solid #e5e7eb' }}>
        <Table size={'small'}>
          <TableHeader
            onSelectAllClick={handleSelectAllClick}
            order={order}
            orderBy={orderBy}
            numSelected={selected.length}
            rowCount={rows.length}
            onRequestSort={handleRequestSort}
            headCells={headCells}
          />
          <TableContent
            rows={rows}
            selected={selected}
            page={page}
            rowsPerPage={rowsPerPage}
            order={order}
            orderBy={orderBy}
            setSelected={setSelected}
            headCells={headCells}
          />
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          labelRowsPerPage='Số hàng'
          labelDisplayedRows={(v) => {
            return `Hiển thị ${v.from} - ${v.to} trong ${v.count} kết quả`;
          }}
          sx={{
            bgcolor: '#fff',
          }}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Stack>
  );
};

export default DataTable;
