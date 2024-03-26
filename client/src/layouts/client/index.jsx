import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';

export default function ClientLayout() {
  const style = {
    width: 150,
    position: 'fixed',
    top: 100,
    zIndex: 10010,
  };
  return (
    <>
      <div
        style={{
          ...style,
          left: 70,
        }}
      >
        <a href='/pages/pc-gvn'>
          <img
            style={{
              borderRadius: 6,
            }}
            src='https://file.hstatic.net/200000722513/file/pc_banner_side_ec17a1add0714215ab65c1ec5f530684.png'
            alt='PC gaming'
          />
        </a>
      </div>
      <div
        style={{
          ...style,
          right: 70,
        }}
      >
        <a href='/products/laptop-asus-vivobook-14-oled-m1405ya-km047w'>
          <img
            style={{
              borderRadius: 6,
            }}
            src='https://file.hstatic.net/200000722513/file/side_web_-_laptop_46aab67c39b346609cc31deaf149a580.png'
            alt='Laptop Oled'
          />
        </a>
      </div>
      <Header />
      <Container
        maxWidth='lg'
        sx={{
          minHeight: 'calc(100vh - 60px)',
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
