import { Button } from '../';
import { useRouter } from 'next/router'

const Center = ({ title, link }) => {
  const router = useRouter()
  function navigate() {
    router.push(link)
  }
  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none mb-8">{title}</p>
      <Button
        onClick={navigate}
        title="Sobre nosotras"
      />
    </div>
  )
}

export default Center