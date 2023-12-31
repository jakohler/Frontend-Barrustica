import Image from '../Image'

const Showcase = ({ imageSrc }) => {
  return (
    <div className="z-10">
      <Image src={imageSrc} alt="Showcase item" />
    </div>
  )
}

export default Showcase