import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';

export default function ClientLayout() {
  return (
    <>
      <Header />
      <Container maxWidth='xl' sx={{ minHeight: 'calc(100vh - 60px)' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
