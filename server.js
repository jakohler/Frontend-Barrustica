const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; 

app.get('/api/images', async (req, res) => {
    try {
      const response = await axios.get('https://barrustica.s3.us-east-005.backblazeb2.com/vaso+jabali.jpeg');
      const imageData = response.data;
      res.send(imageData);
    } catch (error) {
      console.error('Error al obtener la imagen de Backblaze:', error.message);
      res.status(500).send('Error al obtener la imagen');
    }
});

app.listen(port, () => {
    console.log(`Servidor proxy en funcionamiento en http://localhost:${port}`);
});