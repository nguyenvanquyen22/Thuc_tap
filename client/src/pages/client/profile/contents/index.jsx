import Logout from './Logout';
import OrdersHistory from './OrdersHistory';
import Profile from './Profile';
import Viewed from './Viewed';

const Content = (props) => {
  return (
    <>
      {props.tab === 0 && <Profile />}
      {props.tab === 1 && <OrdersHistory />}
      {props.tab === 2 && <Viewed />}
      {props.showDialog && (
        <Logout
          showDialog={props.showDialog}
          handleClose={props.handleCloseDialog}
        />
      )}
    </>
  );
};

export default Content;
