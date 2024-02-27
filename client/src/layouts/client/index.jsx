import { Outlet } from 'react-router-dom';
import Header from './header';
import { Container } from '@mui/material';

export default function ClientLayout() {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Outlet />
      </Container>
    </>
  );
}
