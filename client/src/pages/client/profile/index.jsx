import { Grid } from '@mui/material';
import Sidebar from './Sidebar';
import Content from './contents';
import { useState } from 'react';

const ProfilePage = () => {
  const [tab, setTab] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const handleChangeTab = (n) => {
    if (n === 3) {
      setShowDialog(true);
      return;
    }
    setTab(n);
  };

  return (
    <Grid container mt={3}>
      <Grid item xs={3} p={1} pt={0}>
        <Sidebar tab={tab} onChangeTab={handleChangeTab} />
      </Grid>
      <Grid item xs={9} p={1} pt={0}>
        <Content
          tab={tab}
          showDialog={showDialog}
          handleCloseDialog={() => {
            setShowDialog(false);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
