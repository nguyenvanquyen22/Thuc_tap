import { Button, Grid, Typography } from '@mui/material';
import SelectProductDialog from './SelectProductDialog';
import { useState } from 'react';
import { products } from '../../../client/products/products';

const AddProductCollection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      {openDialog && (
        <SelectProductDialog
          open={openDialog}
          handleClose={() => {
            setOpenDialog(false);
          }}
          searchValue={searchValue}
          handleSearch={(e) => {
            setSearchValue(e.target.value);
          }}
          products={products.filter((v) =>
            v.title.toLowerCase().includes(searchValue.toLowerCase())
          )}
        />
      )}
      <Grid
        container
        mb={2}
        p={2}
        sx={{
          boxShadow:
            '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)',
          borderRadius: 2,
        }}
      >
        <Grid container justifyContent={'space-between'}>
          <Typography mb={1.5} fontWeight={600} fontSize={16}>
            Sản phẩm của bộ sưu tập
          </Typography>
          <Button
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            Thêm sản phẩm
          </Button>
        </Grid>
        <Typography fontStyle={'italic'}>
          {products.length} sản phẩm đã chọn
        </Typography>
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
              <Typography fontWeight={600}>{item.title}</Typography>
            </Grid>
            <Grid item xs={1.5} textAlign={'right'}>
              <Button
                color='error'
                variant='contained'
                sx={{
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Xoá
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AddProductCollection;
