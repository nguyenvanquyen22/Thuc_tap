import { Box, Button, Toolbar } from '@mui/material';
import Input from '../input/Input';

const Filter = () => {
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
        <Box mr={3} width={'calc((100% - 36px) / 4)'}>
          <Input
            id={'product_name'}
            title=''
            disabled={false}
            type='text'
            value=''
            name='product-name'
            onChange={() => {}}
            placeholder='Tìm kiếm theo tên sản phẩm'
            sx={{ backgroundColor: '#f3f4f6', height: 48 }}
          />
        </Box>
        <Box mr={3} width={'calc((100% - 36px) / 4)'}>
          <Input
            id={'product_name'}
            title=''
            disabled={false}
            type='text'
            value=''
            name='product-name'
            onChange={() => {}}
            placeholder='Tìm kiếm theo tên sản phẩm'
            sx={{ backgroundColor: '#f3f4f6', height: 48 }}
          />
        </Box>
        <Box mr={3} width={'calc((100% - 36px) / 4)'}>
          <Input
            id={'product_name'}
            title=''
            disabled={false}
            type='text'
            value=''
            name='product-name'
            onChange={() => {}}
            placeholder='Tìm kiếm theo tên sản phẩm'
            sx={{ backgroundColor: '#f3f4f6', height: 48 }}
          />
        </Box>
        <Box
          width={'calc((100% - 36px) / 4)'}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Button
            onClick={() => {}}
            variant='contained'
            sx={{ width: '48%', height: 48, bgcolor: '#047857' }}
          >
            Lọc
          </Button>
          <Button
            onClick={() => {}}
            variant='contained'
            sx={{ width: '48%', height: 48 }}
            color='secondary'
          >
            Đặt lại
          </Button>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default Filter;
