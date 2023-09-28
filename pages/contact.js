import Head from 'next/head'
import Image from '../components/Image'
import React, { useState } from 'react';
import axios from 'axios';

export default function AboutView(){

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
    
    try {
      // Enviar los datos del formulario al servidor backend
      await axios.post('http://127.0.0.1:5132/Contact/sendEmail', formData);
      
      // Limpiar el formulario o realizar cualquier otra acción que desees
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Opcional: Mostrar un mensaje de éxito al usuario
      alert('El correo se ha enviado exitosamente.');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      // Opcional: Mostrar un mensaje de error al usuario
      alert('Se produjo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
    }
  }

  return (
    <>
      <Head>
        <title>Barrustica</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="title" key="title" />
      </Head>
      <div className="sm:py-12 md:flex-row py-4 w-full flex flex-1 flex-col my-0 mx-auto">
        <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="https://res.cloudinary.com/dkchgeslr/image/upload/v1694627977/2_vasos_r1esi2.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2 flex flex-col ml-auto">
          <h1 className="sm:mt-0 mt-2 text-5xl font-light leading-large">
            Contacto 
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md h-48 w-full" required />
            </div>
            <div className="mt-6">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
