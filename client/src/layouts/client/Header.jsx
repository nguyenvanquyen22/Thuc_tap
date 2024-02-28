import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Link,
  IconButton,
  Typography,
  Container,
} from '@mui/material';
import {
  ShoppingCartOutlined,
  Search,
  PersonOutlineOutlined,
} from '@mui/icons-material';

const menu = [
  {
    id: 'macbook',
    title: 'Macbook',
    path: '/',
  },
  {
    id: 'window',
    title: 'Window',
    path: '/',
  },
];

const Header = () => {
  return (
    <AppBar
      position='static'
      color='inherit'
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #ebebeb',
        marginBottom: '3rem',
        mb: 0,
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant='h3'
            component='a'
            href='/'
            sx={{
              mr: 4,
              display: 'flex',
              fontFamily: 'monospace',
              letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
              background: '-webkit-linear-gradient(#fff, #000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ecommerce
          </Typography>

          {/* Menu */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {menu.map((item) => (
              <Link key={item.id} underline='none' href={item.path}>
                <Button
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontSize: '1rem',
                  }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Search */}
          <IconButton sx={{ mr: 1, p: 0 }}>
            <Search fontSize='medium' color='inherit' />
          </IconButton>

          {/* Cart */}
          <Link href='/cart' underline='none'>
            <IconButton sx={{ mr: 1, p: 0 }}>
              <ShoppingCartOutlined fontSize='medium' color='inherit' />
            </IconButton>
          </Link>

          {/* Profile  */}
          <Link href='/account' underline='none'>
            <IconButton sx={{ mr: 1, p: 0 }}>
              <PersonOutlineOutlined fontSize='medium' color='inherit' />
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
