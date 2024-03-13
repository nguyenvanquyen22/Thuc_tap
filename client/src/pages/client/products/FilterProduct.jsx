import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';

const FilterItem = (props) => {
  return (
    <div key={props.id}>
      <Typography variant='h6' pb={1} pt={1} borderBottom='1px solid #ddd'>
        {props.filter.title}
      </Typography>
      <FormGroup
        sx={{
          p: '8px 16px 0 16px',
        }}
      >
        {props.filter.listItems.map((item) => (
          <FormControlLabel
            key={item.id}
            control={<Checkbox />}
            name={item.id}
            label={item.label}
          />
        ))}
      </FormGroup>
    </div>
  );
};

const FilterProduct = () => {
  const filters = [
    {
      id: 'category-1',
      title: 'Danh mục',
      listItems: [
        {
          id: 'macbook-lap-1',
          label: 'Macbook',
        },
        {
          id: 'asus-lap-1',
          label: 'ASUS',
        },
        {
          id: 'tablet-lap-1',
          label: 'Tablet',
        },
      ],
    },
    {
      id: 'category-2',
      title: 'Danh mục',
      listItems: [
        {
          id: 'macbook-lap-2',
          label: 'Macbook',
        },
        {
          id: 'asus-lap-2',
          label: 'ASUS',
        },
        {
          id: 'tablet-lap-2',
          label: 'Tablet',
        },
      ],
    },
  ];
  return (
    <Stack spacing={1.5} p={1} pr={2} pt={0}>
      <Typography
        variant='h6'
        textAlign='center'
        bgcolor={'#f6f6f6'}
        border='1px solid #eee'
        borderRadius={1}
        p={0.5}
      >
        Lọc sản phẩm
      </Typography>
      {filters.map((item) => (
        <FilterItem filter={item} key={item.id} />
      ))}
    </Stack>
  );
};

export default FilterProduct;
