import { Helmet } from "react-helmet"
import Cover from "../../shared/cover/Cover"
import img3 from '../../assets/menu/menu-bg.png'
import img2 from '../../assets/menu/dessert-bg.jpeg'
import img4 from '../../assets/menu/pizza-bg.jpg'
import img5 from '../../assets/menu/salad-bg.jpg'
import img6 from '../../assets/menu/soup-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import PopularMenu from "../Home/popularMenu/PopularMenu"
import useMenu from "../../hooks/usemenu"
import SectionTitle from "../../components/section/SectionTitle"
import MenuCategory from "./MenuCategory"


const Menu = () => {
    const [menu]=useMenu();
  const pizza =menu.filter(item => item.category === 'pizza');
  const desserts =menu.filter(item => item.category === 'dessert');
  const soup =menu.filter(item => item.category === 'soup');
  const salad =menu.filter(item => item.category === 'salad');
  const offered =menu.filter(item => item.category === 'offered');
  return (
    <div>
        <Helmet>
        <title>Restro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={dessertImg} title={'Our Menu'}></Cover>
      <SectionTitle subHeader="Don't Miss" header="Today's Offer"></SectionTitle>
      <MenuCategory items={offered} ></MenuCategory>
      {/*dessert menu item */}
      <MenuCategory items={desserts} title='desserts' img={img2}></MenuCategory>
      <MenuCategory items={pizza} title='pizza' img={img4}></MenuCategory>
      <MenuCategory items={soup} title='soup' img={img6}></MenuCategory>
      <MenuCategory items={salad} title='salad' img={img5}></MenuCategory>
      
      

      
    </div>
  )
}

export default Menu
