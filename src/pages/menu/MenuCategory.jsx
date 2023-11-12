import { Link } from "react-router-dom"
import Cover from "../../shared/cover/Cover"
import MenuItem from "../../shared/menuItem/MenuItem"


const MenuCategory = ({items, title, img}) => {
  return (
   <div>
     {title && <Cover img={img} title='OUR MENU'></Cover>}
    <div className="gap-10 grid md:grid-cols-2">
      {
        items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
      }
    </div>
    
    <Link to={`/order/${title}`}><button className="btn shadow-inner border-b-4 btn-outline text-black text-xl font-bold border-yellow-200">Order Now</button></Link>
   </div>
  )
}

export default MenuCategory
