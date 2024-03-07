import Routes from './routes';
import ThemeCustomization from './themes';
import { GlobalStyles } from '@mui/material';

function App() {
  const globalStyles = {
    img: {
      maxWidth: '100%',
    },
    a: {
      textDecorationLine: 'none',
      color: 'inherit',
    },
  };
  return (
    <ThemeCustomization>
      <GlobalStyles styles={globalStyles} />
      <Routes />
    </ThemeCustomization>
  );
}

export default App;
