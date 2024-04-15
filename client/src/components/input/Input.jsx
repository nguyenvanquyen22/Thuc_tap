import { InputLabel, OutlinedInput } from '@mui/material';

const Input = (props) => {
  return (
    <div>
      <InputLabel
        htmlFor={props.id}
        sx={{ mb: 0.5, fontSize: 16, color: 'inherit' }}
      >
        {props.title}:
      </InputLabel>

      <OutlinedInput
        id={props.id}
        disabled={props.disabled}
        type={props.type}
        value={props.value ?? ''}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        fullWidth
        sx={{ fontSize: 16 }}
      />
    </div>
  );
};

export default Input;
