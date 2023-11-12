import SectionTitle from "../../../components/section/SectionTitle"
import feature from '../../../assets/home/featured.jpg'
import '../../../pages/Home/Featured/feature.css'


const Feature = () => {
  return (
    <div  className=" feature-item bg-fixed text-white my-20">
        <SectionTitle 
        subHeader='check it Out' header='Featured Item'
        >

        </SectionTitle>
        <div className="md:flex justify-center bg-opacity-60 items-center py-8 px-16">
            <div>
                <img src={feature} alt="" />
            </div>
            <div className="space-y-4  md:ml-10">
                <p>Aug 20, 2023</p>
                <p className="uppercase text-2xl font-bold">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio ipsa asperiores. Alias modi, eveniet quo necessitatibus velit numquam dolorum. Perferendis voluptates consectetur debitis nostrum! Neque commodi veritatis blanditiis vero non eius obcaecati</p>
                <button className="btn shadow-inner border-b-4 btn-outline text-white text-xl font-bold border-yellow-200">Order Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Feature
