// const Footer = ({ designer }) => {
//   return (
//     <div className="flex flex-1 flex-col justify-end pb-10 mt-4">
//         <p className="font-light text-xs tracking-tight m-0 leading-tight mb-2">algo</p>
//         <p className="text-xxs font-semibold tracking-tight m-0 leading-tight">{designer}</p>
//     </div>
//   )
// }

// export default Footer

import Image from '../Image'
//import Image from 'next/image'; // Importa el componente Image de Next.js

const Footer = ({ designer }) => {
  return (
    <div className="flex flex-1 flex-col justify-end pb-10 mt-4">
      <div className="flex">
        <a href="https://www.facebook.com/profile.php?id=100079878728740" target="_blank" rel="noopener noreferrer">
          {/* Enlace a Facebook */}
          <Image
            src="logo-facebook.png" // Ruta a la imagen del logo de Facebook
            alt="Facebook"
            width={32} // Ancho de la imagen
            height={32} // Altura de la imagen
          />
        </a>
        <a href="https://www.instagram.com/barrustica2019/" target="_blank" rel="noopener noreferrer">
          {/* Enlace a Twitter */}
          <Image
            src="logo-instagram.png" // Ruta a la imagen del logo de Twitter
            alt="Instagram"
            width={49} // Ancho de la imagen
            height={49} // Altura de la imagen
          />
        </a>
      </div>
    </div>
  )
}

export default Footer;
