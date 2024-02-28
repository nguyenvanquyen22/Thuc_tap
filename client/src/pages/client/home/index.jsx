import { Stack } from '@mui/material';
import CarouselBanner from './CarouselBanner';
import FeaturedProduct from './FeaturedProduct';
import FeaturedCategory from './FeaturedCategory';

const HomePage = () => {
  return (
    <Stack spacing={2}>
      <CarouselBanner />
      <FeaturedCategory />
      <FeaturedProduct />
      <FeaturedProduct />
    </Stack>
  );
};

export default HomePage;
