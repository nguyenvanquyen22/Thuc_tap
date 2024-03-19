import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';

export default function ClientLayout() {
  // const style = {
  //   width: 150,
  //   position: 'fixed',
  //   top: 80,
  //   left: 0,
  //   zIndex: 10010,
  // };
  return (
    <>
      {/* <div class='trangtritet2024'>
        <img
          src='https://hanoicomputercdn.com/media/lib/29-02-2024/bongbay83trai.png'
          alt=''
          style={style}
        />
      </div>
      <div class='trangtritet2024'>
        <img
          src='https://hanoicomputercdn.com/media/lib/29-02-2024/bongbay83phai.png'
          alt=''
          style={{
            ...style,
            right: 0,
            left: 'auto',
          }}
        />
      </div> */}
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
