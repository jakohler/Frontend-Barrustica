import Head from 'next/head'
import ListProduct from '../components/ListProduct'
import { titleIfy, slugify } from '../utils/helpers'

export default function Seminario({reqProduct}) {
  return (
    <>
      <Head>
        <title>Barrustica</title>
        <meta name="description" content={`Seminarios`} />
        <meta property="og:title" content={`Seminarios`} key="title" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="max-w-fw flex flex-col w-full">
          <div className="pt-4 sm:pt-10 pb-8">
            <h1 className="text-5xl font-light">{titleIfy('Seminarios')}</h1>
          </div>

          <div>
            <div className="flex flex-1 flex-wrap flex-row">
              {
                reqProduct.map((item, index) => {
                  return (
                    <ListProduct
                      key={index}
                      link={`/seminario/${slugify(item.name)}`}
                      title={item.name}
                      imageSrc={item.image}
                    />
                  )
                })
              }
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:5132/Art/ListSeminario');
  const reqProduct = await res.json();

  return {
    props: {
      reqProduct,
    },
  };
}