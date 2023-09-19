import Head from 'next/head'
import Image from '../components/Image'

export default function AboutView(){

  return (
    <>
      <Head>
        <title>Barrustica</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="title" key="title" />
      </Head>
      <div className="md:flex-row flex justify-center">
        <div className="pt-2 px-0 md:px-10 pb-8 w-full flex flex-col justify-center items-center">
          <h1 className="sm:mt-4 mt-2 text-5xl font-light leading-large text-center">
            Sobre nosotras
          </h1>
          <p className="mt-4 text-gray-600 leading-7 text-center">
            Barrústica es un espacio para compartir los saberes de la cerámica, y crear nuevos vínculos.
            <br></br>Quienes somos: 
            <br></br>Valeria y Carina Alfageme que se encontraron después de un tiempo, que les atrajo el arte de manipular el barro y el arte de la pintura fusionándolos; para crear objetos únicos, bellos y coloridos. Muchos con una personalidad inigualable y escuchando lo que piden nuestrxs clientes. 
            <br></br>Siguiendo nuestros sueños de participar en eventos, ferias, seminarios y talleres donde se encuentren el barro y las personas haciendo de todos un único ser. 
            Compartiendo experiencias de estas disciplinas y de la vida con todxs los que se acercan a nuestro espacio. En definitiva, dos personas que siempre tienen el deseo de seguir aprendiendo.
          </p>
        </div>
      </div>
      <div className="md:flex-row flex">
        <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="https://res.cloudinary.com/dkchgeslr/image/upload/v1694183706/WhatsApp_Image_2021-12-18_at_11.57.02_whlknh.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="https://res.cloudinary.com/dkchgeslr/image/upload/v1694183706/WhatsApp_Image_2023-04-24_at_3.13.28_PM_sx14fc.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
      </div>
      <div className="md:flex-row flex">
        <div className="w-full md:w-1/3 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="https://res.cloudinary.com/dkchgeslr/image/upload/v1694095692/Taller_fsdrpt.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
        <div className="w-full md:w-1/3 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="https://res.cloudinary.com/dkchgeslr/image/upload/v1694183706/WhatsApp_Image_2022-09-03_at_13.13.21_pvqm9z.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
        <div className="w-full md:w-1/3 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="https://res.cloudinary.com/dkchgeslr/image/upload/v1694183707/IMG_20220703_190830193_dp1c1q.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
      </div>
    </>
  )
}
