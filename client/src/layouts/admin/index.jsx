import { Stack, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FixedDrawer from './Drawer';

export default function AdminLayout() {
  return (
    <>
      <Header />
      <Stack display='flex' flexDirection='row'>
        <FixedDrawer />
        <Stack width='calc(100% - 260px)'>
          <Box minHeight='100vh'>
            <Outlet />
          </Box>
          <Footer />
        </Stack>
      </Stack>
    </>
  );
}
