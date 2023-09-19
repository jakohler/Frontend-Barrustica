import Head from 'next/head'
import { Center, Footer, Tag, Showcase, DisplayMedium } from '../components'
import { fetchInventory } from '../utils/inventoryProvider'

const Home = () => {

  return (
    <>
      <div className="w-full">
        <Head>
          <title>Barrustica</title>
          <meta name="description" content="Jamstack ECommerce Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js." />
          <meta property="og:title" content="Jamstack ECommerce" key="title" />
        </Head>
        <div className="bg-orange-300
          p-6 pb-10 smpb-6
          flex lg:flex-row flex-col">
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <Tag/>
            <Center
              title="Barrústica"
              link={`/about`}
            />
            <Footer
              designer="Logos de redes sociales"
            />
          </div>
          <div className="flex flex-1 justify-center items-center relative">
              <Showcase
                imageSrc="barrustica-afiche.jpg"
              />
              <div className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full" />
          </div>
        </div>
      </div>
      <div className="
        lg:my-8 lg:grid-cols-3
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisplayMedium
          imageSrc="https://res.cloudinary.com/dtonpwwo3/image/upload/v1695137648/dtexmuwydsfjmqjifccn.jpg"
          subtitle="Barrustica"
          title="Seminarios"
          link={`/seminario`}
        />
        <DisplayMedium
          imageSrc="https://res.cloudinary.com/dkchgeslr/image/upload/v1691501222/q627zzuvcchyymwpqzt7.jpg"
          subtitle="Barrustica"
          title="Piezas"
          link={`/pieces`}
        />
        <DisplayMedium
          imageSrc="https://res.cloudinary.com/dtonpwwo3/image/upload/v1695139838/mkhwsbvlz3dtnygenuco.jpg"
          subtitle="Barrustica"
          title="Talleres"
          link={`/taller`}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()
  
  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach(c => {
      const index = acc.findIndex(item => item.name === c)
      if (index !== -1) {
        const item = acc[index]
        item.itemCount = item.itemCount + 1
        acc[index] = item
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1
        }
        acc.push(item)
      }
    })
    return acc
  }, [])
  
  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized
    }
  }
}

export default Home