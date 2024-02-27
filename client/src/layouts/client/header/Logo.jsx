import { Adb as AdbIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';

const Logo = () => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant='h5'
        noWrap
        component='a'
        href='#app-bar-with-responsive-menu'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Ecommerce
      </Typography>
    </>
  );
};

export default Logo;
