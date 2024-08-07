import Carousel from 'react-material-ui-carousel';

const ProductImage = () => {
  const images = [
    'https://product.hstatic.net/200000722513/product/gearvn-laptop-gaming-asus-tuf-gaming-a15-fa506nc-hn011w-1_52969cded26148e2839786f10bb8b40f_grande.jpg',
    'https://product.hstatic.net/200000722513/product/gearvn-laptop-gaming-asus-tuf-gaming-a15-fa506nc-hn011w-10_2338cdbf757e42209a8ff99b816721da_grande.jpg',
    'https://product.hstatic.net/200000722513/product/gearvn-laptop-gaming-asus-tuf-gaming-a15-fa506nc-hn011w-3_4ba08f8b07bd43c682814bee9bdebb8a_grande.jpg',
    'https://product.hstatic.net/200000722513/product/gearvn-laptop-gaming-asus-tuf-gaming-a15-fa506nc-hn011w-2_b34cc50bd199458899f371a4d5f8a670_grande.jpg',
    'https://product.hstatic.net/200000722513/product/gearvn-laptop-gaming-asus-tuf-gaming-a15-fa506nc-hn011w-1_05990549fedf4435b3ecc927e0a4571c_grande.jpg',
  ];

  return (
    <Carousel
      sx={{
        textAlign: 'center',
      }}
      keyBoardControl
      autoPlay
      transitionDuration={1000}
    >
      {images.map((item, index) => (
        <img
          loading='lazy'
          key={index + 'img'}
          style={{
            borderRadius: '5px',
            objectFit: 'cover',
          }}
          src={item}
          alt=''
        />
      ))}
    </Carousel>
  );
};

export default ProductImage;
