import { Add, Delete } from '@mui/icons-material';
import { Button, Toolbar, Tooltip } from '@mui/material';
import { useLocation } from 'react-router-dom';

const TableToolbar = (props) => {
  const { pathname } = useLocation();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        justifyContent: 'space-between',
      }}
    >
      <Tooltip title='Thêm'>
        <Button
          variant='contained'
          startIcon={<Add />}
          href={pathname + '/new'}
        >
          Thêm mới
        </Button>
      </Tooltip>

      {props.selected.length > 0 && (
        <Tooltip title='Delete'>
          <Button
            variant='contained'
            startIcon={<Delete />}
            onclick={props.onHandleDelete}
            color='error'
          >
            Xoá
          </Button>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default TableToolbar;
