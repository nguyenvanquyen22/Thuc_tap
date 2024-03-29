import { Box, Stack, Typography } from '@mui/material';

const ProductDescription = (props) => {
  const { title } = props;
  return (
    <Box mt={1} py={2} mx={2} borderTop={'1px solid #dfdfdf'}>
      <Typography variant='h5'>{title}</Typography>
      <img
        src='https://product.hstatic.net/200000722513/product/gearvn-laptop-gaming-asus-tuf-gaming-a15-fa506nc-hn011w-1_52969cded26148e2839786f10bb8b40f_grande.jpg'
        alt=''
      />
    </Box>
  );
};

const TechnicalDetail = () => {
  const techDetails = [
    {
      id: 'tech-cpu',
      title: 'CPU',
      value:
        'AMD Ryzen™ 5 7535HS Processor 3.3GHz (19MB Cache, up to 4.55 GHz, 6 cores, 12 Threads)',
    },
    {
      id: 'tech-ram',
      title: 'RAM',
      value: '8GB DDR5 4800MHz (2x SO-DIMM socket, up to 32GB SDRAM)',
    },
    {
      id: 'tech-disk',
      title: 'Ổ cứng',
      value: '512GB PCIe® 4.0 NVMe™ M.2 SSD (Còn trống 1 khe SSD M.2 PCIE)',
    },
    {
      id: 'tech-vga',
      title: 'Card đồ họa',
      value: 'NVIDIA® GeForce RTX 3050 4GB GDDR6',
    },
    {
      id: 'tech-monitor',
      title: 'Màn hình',
      value:
        '15.6" FHD (1920 x 1080) IPS, 144Hz, Wide View, 250nits, Narrow Bezel, Non-Glare with 45% NTSC, 63% sRGB, Adaptive-Sync',
    },
    {
      id: 'tech-community',
      title: 'Cổng giao tiếp',
      value:
        '1x USB 3.2 Gen 2 Type-C support DisplayPort™ / power delivery / G-SYNC\n2x USB 3.2 Gen 1 Type-A\n1x RJ-45 LAN\n1x HDMI 2.1 FRL\n1x COMBO audio jack',
    },
    {
      id: 'tech-audio',
      title: 'Audio',
      value: '2-speaker system, DTS software',
    },
    {
      id: 'tech-keyboard',
      title: 'Bàn phím',
      value: 'Backlit Chiclet Keyboard 1-Zone RGB',
    },
    {
      id: 'tech-lan',
      title: 'Chuẩn LAN',
      value: '10/100/1000 Mbps',
    },
    {
      id: 'tech-wifi',
      title: 'Chuẩn WIFI',
      value: 'Wi-Fi 6(802.11ax) (2x2)',
    },
    {
      id: 'tech-bluetooth',
      title: 'Bluetooth',
      value: 'v5.3',
    },
    {
      id: 'tech-webcam',
      title: 'Webcam',
      value: 'HD 720p',
    },
    {
      id: 'tech-os',
      title: 'Hệ điều hành',
      value: 'Windows 11 Home',
    },
    {
      id: 'tech-pin',
      title: 'Pin',
      value: '4 Cell 48WHrs',
    },
    {
      id: 'tech-weight',
      title: 'Trọng lượng',
      value: '2.3 kg',
    },
    {
      id: 'tech-color',
      title: 'Màu sắc',
      value: 'Graphite Black',
    },
    {
      id: 'tech-size',
      title: 'Kích thước',
      value: '35.9 x 25.6 x 2.28 ~ 2.45 cm (14.13" x 10.08" x 0.90" ~ 0.96")',
    },
  ];

  return (
    <Box borderRadius={1} bgcolor={'#fff'}>
      <Typography p={2} variant='h5'>
        Thông số kỹ thuật
      </Typography>
      <Stack p={2.5} pt={0}>
        {techDetails.map((item, index) => (
          <Box
            key={item.id}
            bgcolor={index % 2 ? '#fff' : '#dfdfdf'}
            display='flex'
            alignItems={'center'}
            p={1}
            border={'1px solid #dfdfdf'}
          >
            <Typography
              width={140}
              textAlign={'left'}
              fontSize={'1rem'}
              fontWeight={600}
            >
              {item.title}:
            </Typography>
            <Typography width={'calc(100% - 100px)'}>{item.value}</Typography>
          </Box>
        ))}
      </Stack>
      <ProductDescription title='Laptop gaming ASUS TUF Gaming A15 FA506NC HN011W' />
    </Box>
  );
};

export default TechnicalDetail;
