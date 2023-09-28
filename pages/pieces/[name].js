import Head from 'next/head'
import Image from '../../components/Image'
import { slugify } from '../../utils/helpers'
import { SiteContext, ContextProviderComponent } from '../../context/mainContext'

const PieceView = (props) => {
  const { reqProduct } = props
  const { image, name, description, style } = reqProduct

  return (
    <>
      <Head>
        <title>Barrustica</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${name}`} key="title" />
      </Head>
      <div className="
        sm:py-12
        md:flex-row
        py-4 w-full flex flex-1 flex-col my-0 mx-auto
      ">
        <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Image src={image} alt="Inventory item" className="max-h-full" />
          </div>
        </div>
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">
          <h1 className="
           sm:mt-0 mt-2 text-5xl font-light leading-large
          ">{name}</h1>
          <h2 className="text-2xl tracking-wide sm:py-8 py-6">Estilo: {style}</h2>
          <p className="text-gray-600 leading-7">{description}</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths () {
  const req = await fetch('http://127.0.0.1:5132/Art/ListPiece');
  const products = await req.json();
  const paths = products.map(item => {
    return { params: { name: slugify(item.name) }}
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const name = params.name.replace(/-/g," ")
  const req = await fetch('http://127.0.0.1:5132/Art/ListPiece');
  const products = await req.json();
  const reqProduct = products.find(item => slugify(item.name) === slugify(name))

  return {
    props: {
      reqProduct,
    }
  }
}

function PieceViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <PieceView {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default PieceViewWithContext