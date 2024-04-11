import {
  AppBar,
  Box,
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
          <Box sx={{ flexGrow: 1 }}></Box>

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
