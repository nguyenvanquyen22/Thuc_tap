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
    <Box
      sx={{
        width: 260,
        pt: 1.5,
        borderRight: '1px solid #e1e3e5',
        bgcolor: '#fff',
      }}
    >
      {menu.map((group) => (
        <React.Fragment key={group.id + '-flagment'}>
          <List
            key={group.id}
            subheader={
              <Typography
                variant='caption'
                fontWeight={500}
                display='block'
                pl={2}
                color={'rgb(140, 140, 140)'}
              >
                {group.title}
              </Typography>
            }
          >
            {group.children.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{
                    alignItems: 'flex-start',
                    py: 1,
                    pl: 4.5,
                  }}
                  selected={pathname === item.path}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon sx={{ my: 'auto', minWidth: 16 }}>
                    <item.icon
                      sx={{
                        fontSize: 20,
                        color: pathname === item.path ? '#008060' : '#000',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ ml: 1.25 }}
                    primary={
                      <Typography
                        color={pathname === item.path ? '#008060' : '#000'}
                        fontWeight={500}
                      >
                        {item.title}
                      </Typography>
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
