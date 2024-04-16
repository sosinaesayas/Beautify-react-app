import React from 'react';
import ImageWithButtons from '../components/imagewithbuttons';

const App = () => {
  const images  = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    { src: 'image4.jpg', alt: 'Image 4' },
    { src: 'image5.jpg', alt: 'Image 5' },
  ];

  return (
    <div>
      {images.map((image:any, index:any) => (
        <ImageWithButtons key={index} src={image.src} alt={image.alt } />
      ))}
    </div>
  );
};

export default App;