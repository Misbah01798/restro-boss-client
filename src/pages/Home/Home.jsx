import Banner from "./Banner"
import Feature from "./Featured/Feature"
import Category from "./category/Category"
import PopularMenu from "./popularMenu/PopularMenu"
import Testimonials from "./testomonials/Testimonials"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Feature></Feature>
        <Testimonials></Testimonials>
      
    </div>
  )
}

export default Home
