import { FormControlLabel, InputLabel, Radio, RadioGroup } from '@mui/material';

const CheckboxGroup = (props) => {
  return (
    <div>
      <InputLabel htmlFor={props.id} sx={{ color: 'inherit', fontSize: 16 }}>
        {props.title}:
      </InputLabel>
      <RadioGroup
        defaultValue={props.defaultValue}
        onChange={(e) => {}}
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {props.list.map((item) => (
          <FormControlLabel
            value={item.value}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default CheckboxGroup;
