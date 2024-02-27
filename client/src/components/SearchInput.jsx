import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

const SearchInput = () => {
  return (
    <FormControl sx={{ m: 1, width: '25ch', mr: 3 }} variant='outlined'>
      <InputLabel htmlFor='search-product'>Search</InputLabel>
      <OutlinedInput
        id='search-product'
        type='text'
        endAdornment={
          <InputAdornment position='end'>
            <IconButton edge='end'>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label='Search'
      />
    </FormControl>
  );
};

export default SearchInput;
