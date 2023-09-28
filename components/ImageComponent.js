import axios from 'axios';
import { useState, useEffect } from 'react';

async function fetchImage() {
    const response = await axios.get('http://127.0.0.1:3000/api/images');
    return response.data;
}

function ImageComponent() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const imageData = await fetchImage();
      setImage(imageData);
    }
    loadImage();
  }, []);

  if (!image) {
    return <div>Cargando imagen...</div>;
  }

  return <img src={image} alt="Imagen de Backblaze" />;
}

export default ImageComponent;