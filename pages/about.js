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
      <div className="sm:py-12 md:flex-row py-4 w-full flex flex-1 flex-col my-0 mx-auto">
        <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="barrustica-afiche.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="sm:mt-0 mt-2 text-5xl font-light leading-large text-center">
            Titulo de la descripcion
          </h1>
          <p className="text-gray-600 leading-7 text-center">
            Descripcion
          </p>
        </div>
      </div>
      <div className="sm:py-12 md:flex-row py-4 w-full flex flex-1 flex-col my-0 mx-auto">
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="sm:mt-0 mt-2 text-5xl font-light leading-large text-center">
            Titulo de la descripcion
          </h1>
          <p className="text-gray-600 leading-7 text-center">Descripcion</p>
        </div>
        <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src="barrustica-afiche.jpg" alt="Inventory item" className="max-h-full" />
          </div>
        </div>
      </div>
    </>
  )
}