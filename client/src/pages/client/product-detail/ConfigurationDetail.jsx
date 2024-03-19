import { Box, Stack, Typography } from '@mui/material';

const ConfigurationDetail = () => {
  const cfDetails = [
    {
      id: 'cpu-chip',
      title: 'cpu',
      value: 'R5-7535HS',
    },
    {
      id: 'ram-item',
      title: 'ram',
      value: '8GB',
    },
    {
      id: 'vga-item',
      title: 'vga',
      value: 'RTX 3050',
    },
    {
      id: 'ssd-disk',
      title: 'ssd',
      value: '512 GB',
    },
    {
      id: 'lcd-monitor',
      title: 'lcd',
      value: '15.6 inch FHD',
    },
    {
      id: 'hz-fps',
      title: 'hz',
      value: '144 Hz',
    },
  ];
  return (
    <>
      <Box bgcolor={'#fff'} borderRadius={1}>
        <Typography p={2} variant='h5'>
          Cấu hình
        </Typography>
        <Stack p={2.5} pt={0}>
          {cfDetails.map((item, index) => (
            <Box
              key={item.id}
              bgcolor={index % 2 ? '#fff' : '#dfdfdf'}
              display='flex'
              alignItems={'center'}
              justifyContent={'space-between'}
              p={1.5}
              border={'1px solid #dfdfdf'}
              sx={{
                borderTopLeftRadius: index === 0 ? 4 : 0,
                borderTopRightRadius: index === 0 ? 4 : 0,
                borderBottomLeftRadius: cfDetails.length === index + 1 ? 4 : 0,
                borderBottomRightRadius: cfDetails.length === index + 1 ? 4 : 0,
              }}
            >
              <Typography>{item.title}</Typography>
              <Typography>{item.value}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default ConfigurationDetail;
