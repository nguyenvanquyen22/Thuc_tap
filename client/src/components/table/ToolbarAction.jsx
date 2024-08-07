import {
  Add,
  Delete,
  FileDownloadOutlined,
  FileUploadOutlined,
} from '@mui/icons-material';
import { Box, Button, Toolbar } from '@mui/material';

const ToolbarAction = (props) => {
  return (
    <Toolbar
      sx={{
        p: 2,
        justifyContent: 'space-between',
        borderRadius: '0.5rem',
        bgcolor: '#fff',
      }}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        p={1}
      >
        <Box>
          <Button
            sx={{
              mr: 2,
              color: 'inherit',
              border: '1px solid #d1d5db',
              p: 1,
              px: 1.5,
              ':hover': {
                color: '#34d399',
                borderColor: '#34d399',
              },
            }}
            startIcon={<FileDownloadOutlined />}
          >
            Nhập
          </Button>
          <Button
            sx={{
              color: 'inherit',
              border: '1px solid #d1d5db',
              p: 1,
              px: 1.5,
              ':hover': {
                color: '#facc15',
                borderColor: '#facc15',
              },
            }}
            startIcon={<FileUploadOutlined />}
          >
            Xuất
          </Button>
        </Box>
        <Box>
          <Button
            variant='contained'
            startIcon={<Delete />}
            disabled={props.selected.length <= 0}
            onClick={props.onHandleDelete}
            sx={{
              bgcolor: '#ff0000',
              mr: 2,
              px: 2,
              py: 1.5,
              opacity: props.selected.length > 0 ? 1 : 0.6,
              ':hover': {
                opacity: 0.9,
                bgcolor: '#ff0000',
              },
              ':disabled': {
                bgcolor: '#ff938d',
              },
            }}
          >
            Xoá
          </Button>
          <Button
            variant='contained'
            startIcon={<Add />}
            sx={{
              px: 2,
              py: 1.5,
              bgcolor: '#12b981',
              ':hover': {
                bgcolor: '#079669',
              },
            }}
            onClick={props.onOpenNew}
          >
            Thêm mới
          </Button>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default ToolbarAction;
