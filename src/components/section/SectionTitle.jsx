

const SectionTitle = ({header, subHeader}) => {
  return (
    <div className="text-center mx-auto mb-8 md:w-4/12">
        <p className="text-yellow-600 mb-2">---{subHeader}---</p>
        <h3 className="text-3xl uppercase border-y-4 py-4">{header}</h3>
      
    </div>
  )
}

export default SectionTitle
