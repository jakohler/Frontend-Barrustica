const Tag = ({ category, year }) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <div className="border-l border-gray-900 px-3 pt-1 mb-10">
      <p className="text-xs tracking-wider m-0 leading-tight">{formattedDate}</p>
      { year && <p className="text-xs tracking-wider m-0 leading-tight">{year}</p>}
    </div>
  )
}

export default Tag