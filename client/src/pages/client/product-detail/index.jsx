import { Grid, Stack } from '@mui/material';
import ProductSummary from './ProductSummary';
import ProductImage from './ProductImage';
import TechnicalDetail from './TechnicalDetail';
import ConfigurationDetail from './ConfigurationDetail';
import RelatedTab from './RelatedTab';
import ReviewedProduct from './ReviewedProduct';

const ProductDetailPage = () => {
  const similarProducts = [
    {
      id: 'product-1',
      title: 'Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN',
      oldPrice: 22490000,
      price: 19990000,
      percentDiscount: 11,
      image:
        'https://product.hstatic.net/200000722513/product/khung-laptop-23_fd54463b52cb4cf79732623e567e930e.png',
    },
    {
      id: 'product-2',
      title: 'Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN',
      oldPrice: 22490000,
      price: 19990000,
      percentDiscount: 11,
      image:
        'https://product.hstatic.net/200000722513/product/khung-laptop-23_fd54463b52cb4cf79732623e567e930e.png',
    },
    {
      id: 'product-3',
      title: 'Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN',
      oldPrice: 22490000,
      price: 19990000,
      percentDiscount: 11,
      image:
        'https://product.hstatic.net/200000722513/product/khung-laptop-23_fd54463b52cb4cf79732623e567e930e.png',
    },
  ];

  const relatedBlogs = [
    {
      id: 'blog-1',
      title:
        'Hướng dẫn cách cài báo thức cho máy tính Windows 10, 11 siêu đơn giản',
      image:
        'https://file.hstatic.net/200000722513/article/gearvn-cach-cai-bao-thuc-cho-pc-laptop-windows-10-11-13_14a445fdcbf444158095a72c25dec745_grande.jpg',
    },
    {
      id: 'blog-2',
      title:
        'Hướng dẫn cách cài báo thức cho máy tính Windows 10, 11 siêu đơn giản',
      image:
        'https://file.hstatic.net/200000722513/article/gearvn-cach-cai-bao-thuc-cho-pc-laptop-windows-10-11-13_14a445fdcbf444158095a72c25dec745_grande.jpg',
    },
    {
      id: 'blog-3',
      title:
        'Hướng dẫn cách cài báo thức cho máy tính Windows 10, 11 siêu đơn giản',
      image:
        'https://file.hstatic.net/200000722513/article/gearvn-cach-cai-bao-thuc-cho-pc-laptop-windows-10-11-13_14a445fdcbf444158095a72c25dec745_grande.jpg',
    },
    {
      id: 'blog-4',
      title:
        'Hướng dẫn cách cài báo thức cho máy tính Windows 10, 11 siêu đơn giản',
      image:
        'https://file.hstatic.net/200000722513/article/gearvn-cach-cai-bao-thuc-cho-pc-laptop-windows-10-11-13_14a445fdcbf444158095a72c25dec745_grande.jpg',
    },
    {
      id: 'blog-5',
      title:
        'Hướng dẫn cách cài báo thức cho máy tính Windows 10, 11 siêu đơn giản',
      image:
        'https://file.hstatic.net/200000722513/article/gearvn-cach-cai-bao-thuc-cho-pc-laptop-windows-10-11-13_14a445fdcbf444158095a72c25dec745_grande.jpg',
    },
  ];

  return (
    <Stack spacing={2.5}>
      <Grid container bgcolor={'#fff'} borderRadius={1}>
        <Grid item xs={5} p={3}>
          <ProductImage />
        </Grid>
        <Grid item xs={7} p={3} borderLeft={'1px solid #ddd'}>
          <ProductSummary />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={7.3}>
          <TechnicalDetail />
        </Grid>
        <Grid item xs={0.2}></Grid>
        <Grid item xs={4.5}>
          <ConfigurationDetail />
          <RelatedTab
            title='Sản phẩm tương tự'
            data={similarProducts}
            type='product'
          />
          <RelatedTab
            title='Tin tức về các sản phẩm'
            data={relatedBlogs}
            type='blog'
          />
        </Grid>
      </Grid>
      <ReviewedProduct />
    </Stack>
  );
};

export default ProductDetailPage;
