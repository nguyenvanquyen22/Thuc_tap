import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import TextField from '../../../../components/form/fields/TextField';

const SelectProductDialog = (props) => {
  const { open, handleClose, searchValue, handleSearch, products } = props;

  return (
    <Dialog open={open} onClose={handleClose} scroll={'paper'} fullWidth>
      <DialogTitle id='scroll-dialog-title'>Chọn sản phẩm</DialogTitle>
      <DialogContent dividers>
        <TextField
          id={'search-products'}
          required={false}
          name='search'
          value={searchValue}
          onChange={handleSearch}
          placeholder='Nhập tên sản phẩm muốn chọn'
        />
        <Grid container mt={0.5}>
          {products.length === 0 && (
            <Typography
              textAlign={'center'}
              p={3}
              mt={1}
              width={'100%'}
              border={'1px solid #ddd'}
            >
              Không tìm thấy sản phẩm nào có với "{searchValue}"
            </Typography>
          )}
          {products.map((item) => (
            <Grid
              key={item.id + '-grid-item'}
              item
              container
              justifyContent={'space-between'}
              alignItems={'center'}
              xs={12}
            >
              <Grid item xs={2} textAlign={'center'}>
                <img src={item.image} height={100} alt={item.title} />
              </Grid>
              <Grid item xs={8.5} overflow={'hidden'}>
                <Typography fontWeight={600} fontSize={13}>
                  {item.title}
                </Typography>
              </Grid>
              <Grid item xs={1.5} textAlign={'right'}>
                <Button
                  variant='contained'
                  color='inherit'
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  Chọn
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='contained'>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectProductDialog;
