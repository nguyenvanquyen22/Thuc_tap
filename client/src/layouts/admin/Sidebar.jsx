import React from 'react';

import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { menu } from './menu';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  return (
    <Box sx={{ width: 260, pt: 1.5, borderRight: '1px solid #e1e3e5' }}>
      {menu.map((group) => (
        <React.Fragment key={group.id + '-flagment'}>
          <List
            key={group.id}
            subheader={
              <Typography variant='caption' display='block' pl={1}>
                {group.title}
              </Typography>
            }
          >
            {group.children.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{
                    mb: 0.5,
                    alignItems: 'flex-start',
                    py: 1,
                    pl: 3,
                  }}
                  selected={pathname.indexOf(`/${item.id}`) > -1}
                  onClick={() => {
                    navigate(`/admin/${item.id}`);
                  }}
                >
                  <ListItemIcon sx={{ my: 'auto', minWidth: 16 }}>
                    <item.icon stroke={1.5} size='1.1rem' />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ ml: 1 }}
                    primary={
                      <Typography color='inherit'>{item.title}</Typography>
                    }
                  />
                </ListItemButton>
              );
            })}
          </List>

          <Divider key={group.id + '-divider'} sx={{ mt: 0.25, mb: 1.25 }} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Sidebar;
