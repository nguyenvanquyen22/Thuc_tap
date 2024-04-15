import { Box, Button, Drawer, Grid, Stack, Typography } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';

const FormDrawer = (props) => {
  const {
    title,
    sx = {},
    formFields,
    initialValues,
    btnText,
    children,
    onChange,
    onClose,
    open,
  } = props;
  const gridColStyle = {
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
    display: 'grid',
    marginBottom: '1.5rem',
  };
  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          width: '85%',
          ...sx,
        },
      }}
    >
      <Stack>
        <Box
          sx={{
            p: '1.5rem',
            bgcolor: 'rgb(249 250 251)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            position: 'sticky',
            top: 0,
          }}
        >
          <Box>
            <Typography variant='h5'>Thêm {title}</Typography>
            <Typography>
              Thêm {title} và những thông tin cần thiết ở đây
            </Typography>
          </Box>
          <Button color='error' onClick={onClose}>
            <CancelOutlined
              sx={{
                fontSize: 40,
              }}
            />
          </Button>
        </Box>
        <form
          style={{
            minHeight: 'calc(100vh - 211px)',
          }}
        >
          <Grid p={4} container>
            {formFields.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  sx={gridColStyle}
                  xs={12}
                  alignItems={'center'}
                >
                  <label
                    style={{
                      gridColumn: 'span 2 / span 2',
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </label>
                  <Box gridColumn='span 4 / span 4'>
                    {item.type !== 'textarea' ? (
                      <input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        value={initialValues[item.id]}
                        onChange={(e) => {
                          onChange();
                        }}
                        style={{
                          width: item.type === 'checkbox' ? '5%' : '100%',
                          fontSize: 15,
                          padding: 12,
                          backgroundColor: '#f3f4f6',
                          borderRadius: 6,
                          border: '1px solid #e5e7eb',
                          lineHeight: 1.5,
                        }}
                      />
                    ) : (
                      <textarea
                        name={item.name}
                        placeholder={item.placeholder}
                        rows='4'
                        spellcheck='false'
                        value={initialValues[item.id]}
                        onChange={(e) => {
                          onChange(e);
                        }}
                        style={{
                          width: '100%',
                          fontSize: 15,
                          padding: 12,
                          backgroundColor: '#f3f4f6',
                          borderRadius: 6,
                          border: '1px solid #e5e7eb',
                          lineHeight: 1.5,
                        }}
                      ></textarea>
                    )}
                  </Box>
                </Grid>
              );
            })}

            {children && (
              <Grid item xs={12} style={gridColStyle}>
                {children}
              </Grid>
            )}
          </Grid>
        </form>
        <Box
          p={4}
          display={'flex'}
          justifyContent={'space-between'}
          bgcolor={'rgb(249 250 251)'}
          position={'sticky'}
          width={'100%'}
          bottom={0}
        >
          <Box width={'48%'}>
            <Button
              onClick={onClose}
              fullWidth
              variant='contained'
              sx={{
                p: 1.25,
                color: '#ef4444',
                bgcolor: 'white',
                border: '1px solid #dfdfdf',
                ':hover': {
                  bgcolor: '#fef2f2',
                  borderColor: '#ffd1d1',
                },
              }}
            >
              Huỷ
            </Button>
          </Box>
          <Box width={'48%'}>
            <Button
              fullWidth
              variant='contained'
              sx={{
                p: 1.25,
                color: 'white',
                bgcolor: '#10b981',
                ':hover': {
                  bgcolor: '#059669',
                },
              }}
              onClick={() => {}}
            >
              {btnText}
            </Button>
          </Box>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default FormDrawer;
