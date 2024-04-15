import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const Form = (props) => {
  const { id, action, method, btnText } = props;
  return (
    <form id={id} action={action} method={method}>
      <div>
        <Button type='submit'>{btnText || 'Lưu lại'} </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOfType(['GET', 'POST']).isRequired,
};

export default Form;
